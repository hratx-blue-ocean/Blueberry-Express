const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refreshToken.js');
const db = require('../../postgres');

AppointmentsRouter.get('/', async (req, res) => {
  // refresh(req.refreshToken)
  // .then((accessToken) => {
  //   Calendar.listEvents(accessToken, req.refreshToken, req.user.calendarId)
  //       .then((response) => {
  //         res.json(response);
  //       })
  //       .catch((err) => {
  //         res.send(err);
  //       });
  // })
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
        with: incomingAppointments[incomingIndex].from,
        pending: incomingAppointments[incomingIndex].pending,
        approved: incomingAppointments[incomingIndex].approved,
        start: event.start.dateTime,
        end: event.end.dateTime,
      });
    } else if (sentIndex !== -1) {
      appointments.push({
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

AppointmentsRouter.get('/appointments/pending', (req, res) => {
  // return a list of pending appointments
  res.sendStatus(400);
});

AppointmentsRouter.get('/appointments/requested', (req, res) => {
  // returns a list of requested appointments
  res.sendStatus(400);
});

AppointmentsRouter.get('/rejected', (req, res) => {
  // returns a list of rejected appointments
  res.sendStatus(400);
});

AppointmentsRouter.get('/available', (req, res) => {
  // free busy
  res.sendStatus(400);
});

AppointmentsRouter.post('/', async (req, res) => {
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

AppointmentsRouter.put('/:appointmentId', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.delete('/:appointmentId', (req, res) => {
  // get the user's accessToken and refresh token from the jwt
  Calendar.deleteEvent(accessToken, refreshToken, calendarId, req.params.appointmentId)
    .then((responseObj) => {
      console.log('response: ', responseObj);
      res.json(responseObj.response);
    })
    .catch((err) => {
      res.sendStatus(400).send(err);
    });
});

module.exports = AppointmentsRouter;
