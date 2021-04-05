const AppointmentsRouter = require('express').Router();

AppointmentsRouter.get('/', (req, res) => {
  res.sendStatus(400);
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
