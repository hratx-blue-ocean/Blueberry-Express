const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refreshToken.js');
const db = require('../../postgres');

AppointmentsRouter.get('/', async (req, res) => {
  const accessToken = await refresh(req.refreshToken);
  const incomingAppointments = await req.user.getIncomingAppointments({
    include: [
      {
        model: db.user,
        as: 'from',
      },
    ],
  });
  const incomingEventIds = incomingAppointments.map(({ toEventId }) => toEventId);
  const sentAppointments = await req.user.getSentAppointments({
    include: [
      {
        model: db.user,
        as: 'to',
      },
    ],
  });

  const sentEventIds = sentAppointments.map(({ fromEventId }) => fromEventId);
  const events = await Calendar.listEvents(accessToken, req.user.calendarId);
  const appointments = [];
  for (const event of events.items) {
    const incomingIndex = incomingEventIds.indexOf(event.id);
    const sentIndex = sentEventIds.indexOf(event.id);
    if (incomingIndex !== -1) {
      appointments.push({
        id: incomingAppointments[incomingIndex].id,
        with: incomingAppointments[incomingIndex].from,
        pending: incomingAppointments[incomingIndex].pending,
        approved: incomingAppointments[incomingIndex].approved,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    } else if (sentIndex !== -1) {
      appointments.push({
        id: sentAppointments[sentIndex].id,
        with: sentAppointments[sentIndex].to,
        pending: sentAppointments[sentIndex].pending,
        approved: sentAppointments[sentIndex].approved,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    }
  }

  res.json({
    count: appointments.length,
    totalCount: appointments.length,
    page: 1,
    appointments: appointments,
  });
});

AppointmentsRouter.get('/pending', async (req, res) => {
  const accessToken = await refresh(req.refreshToken);

  const pending = await req.user.getIncomingAppointments({
    include: [{ model: db.user, as: 'from' }],
    where: { pending: true },
  });

  const eventIds = pending.map(({ toEventId }) => toEventId);
  const events = await Calendar.listEvents(accessToken, req.user.calendarId);

  const appointments = [];
  for (const event of events.items) {
    const index = eventIds.indexOf(event.id);
    if (index !== -1) {
      appointments.push({
        id: pending[index].id,
        with: pending[index].from,
        pending: true,
        approved: false,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    }
  }

  // return a list of pending appointments
  res.json({
    count: appointments.length,
    totalCount: appointments.length,
    page: 1,
    appointments: appointments,
  });
});

AppointmentsRouter.get('/requested', async (req, res) => {
  // returns a list of requested appointments

  const accessToken = await refresh(req.refreshToken);

  const pending = await req.user.getSentAppointments({
    include: [{ model: db.user, as: 'to' }],
    where: { pending: true },
  });

  const eventIds = pending.map(({ fromEventId }) => fromEventId);
  const events = await Calendar.listEvents(accessToken, req.user.calendarId);

  const appointments = [];
  for (const event of events.items) {
    const index = eventIds.indexOf(event.id);
    if (index !== -1) {
      appointments.push({
        id: pending[index].id,
        with: pending[index].to,
        pending: true,
        approved: false,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    }
  }

  // return a list of pending appointments
  res.json({
    count: appointments.length,
    totalCount: appointments.length,
    page: 1,
    appointments: appointments,
  });
});

AppointmentsRouter.get('/rejected', async (req, res) => {
  // returns a list of requested appointments

  const accessToken = await refresh(req.refreshToken);

  const pending = await req.user.getSentAppointments({
    include: [{ model: db.user, as: 'to' }],
    where: { pending: false, approved: false },
  });

  const eventIds = pending.map(({ fromEventId }) => fromEventId);
  const events = await Calendar.listEvents(accessToken, req.user.calendarId);

  const appointments = [];
  for (const event of events.items) {
    const index = eventIds.indexOf(event.id);
    if (index !== -1) {
      appointments.push({
        id: pending[index].id,
        with: pending[index].to,
        pending: false,
        approved: false,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    }
  }

  // return a list of pending appointments
  res.json({
    count: appointments.length,
    totalCount: appointments.length,
    page: 1,
    appointments: appointments,
  });
});

AppointmentsRouter.get('/available', (req, res) => {
  // free busy
  res.sendStatus(400);
});

AppointmentsRouter.post('/', async (req, res) => {
  console.log(req.body);
  const withUser = await db.user.findOne({ where: { id: req.body.with } });
  if (withUser === null) {
    return res.sendStatus(400);
  }

  const currUserAccessToken = await refresh(req.refreshToken);
  const withUserAccessToken = await refresh(withUser.refreshToken);

  const currUserEvent = await Calendar.createEvent(currUserAccessToken, req.user.calendarId, {
    ...req.body,
    summary: `Appointment with ${withUser.name}`,
  });
  const withUserEvent = await Calendar.createEvent(withUserAccessToken, withUser.calendarId, {
    ...req.body,
    summary: `Appointment with ${req.user.name}`,
  });

  if (currUserEvent === null || withUserEvent === null) {
    return res.sendStatus(400);
  }

  const appointment = await db.appointment.create({
    fromId: req.user.id,
    toId: withUser.id,
    fromEventId: currUserEvent.id,
    toEventId: withUserEvent.id,
  });

  res.json(appointment);
});

AppointmentsRouter.put('/:appointmentId', async (req, res) => {
  console.log(typeof req.body.approve);
  if (req.body.approve === undefined) return res.sendStatus(400);

  const appointment = await db.appointment.findOne({
    where: { id: req.params.appointmentId },
    include: [{ model: db.user, as: 'from' }],
  });

  if (!appointment) return res.sendStatus(400);

  if (appointment.toId !== req.user.id) return res.sendStatus(403);

  if (req.body.approve) {
    appointment.pending = false;
    appointment.approved = true;
    await appointment.save();
    return res.sendStatus(201);
  } else {
    appointment.pending = false;
    appointment.approved = false;
    const currUserAccessToken = await refresh(req.refreshToken);
    const withUserAccessToken = await refresh(appointment.from.refreshToken);
    await Calendar.markCancelled(currUserAccessToken, req.user.calendarId, appointment.toEventId);
    await Calendar.markCancelled(withUserAccessToken, appointment.from.calendarId, appointment.fromEventId);
    await appointment.save();
    return res.sendStatus(201);
  }
});

AppointmentsRouter.delete('/:appointmentId', async (req, res) => {
  const appointment = await db.appointment.findOne({
    where: { id: req.params.appointmentId },
    include: [
      { model: db.user, as: 'from' },
      { model: db.user, as: 'to' },
    ],
  });

  if (!appointment) return res.sendStatus(400);

  if (appointment.toId !== req.user.id && appointment.fromId !== req.user.id) return res.sendStatus(403);

  const fromUserAccessToken = await refresh(appointment.from.refreshToken);
  const toUserAccessToken = await refresh(appointment.to.refreshToken);

  await Calendar.deleteEvent(fromUserAccessToken, appointment.from.calendarId, appointment.fromEventId);
  await Calendar.deleteEvent(toUserAccessToken, appointment.to.calendarId, appointment.toEventId);

  await appointment.destroy();

  res.sendStatus(204);
});

module.exports = AppointmentsRouter;
