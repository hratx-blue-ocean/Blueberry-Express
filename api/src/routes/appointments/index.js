const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');

AppointmentsRouter.get('/', (req, res) => {
  // list all events

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
  // free busy
  res.sendStatus(400);
});

AppointmentsRouter.post('/', (req, res) => {
  // creating an appointment
  // grab the user's calendar id from the db based on the user id attached to the jwt
  // get the username of the userId in the with category
  console.log('req.accessToken: ', req.accessToken);
  console.log('req.refreshToken: ', req.refreshToken);
  console.log('req.user.dataValues.calendarId: ', req.user.dataValues.calendarId);
  console.log('REQ.BODY: ', req.body);
  Calendar.createEvent(req.accessToken, req.refreshToken, req.user.dataValues.calendarId, req.body)
    .then((responseObj) => {
      // console.log('response: ', responseObj);
      res.json(responseObj);
    })
    .catch((err) => {
      res.send(err);
    });
});

AppointmentsRouter.put('/:appointmentId', (req, res) => {
  res.sendStatus(400);
});

AppointmentsRouter.delete('/:appointmentId', (req, res) => {
  // grab the user's calendar id from the db based on the user id attached to the jwt
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
