const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refreshToken.js');

AppointmentsRouter.get('/', (req, res) => {
  refresh(req.refreshToken)
  .then((accessToken) => {
    Calendar.listEvents(accessToken, req.refreshToken, req.user.calendarId)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.send(err);
        });
  })
});

AppointmentsRouter.get('/appointments/pending', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.get('/appointments/requested', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.get('/rejected', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.get('/available', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.post('/', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.put('/:appointmentId', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.delete('/:appointmentId', (req, res) => {
  res.sendStatus(400);
});

module.exports = AppointmentsRouter;
