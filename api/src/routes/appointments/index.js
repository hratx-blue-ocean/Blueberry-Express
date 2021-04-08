const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refresh.js');

AppointmentsRouter.get('/', (req, res) => {
  // list all events
  // req.refreshtoken

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

  let newToken = refresh(req.refreshToken);

  Promise.resolve(newToken)
    .then((accessToken) => {
      Calendar.createEvent(accessToken, req.refreshToken, req.user.dataValues.calendarId, req.body)
        .then((responseObj) => {
        // console.log('response: ', responseObj);
          res.json(responseObj);
        })
        .catch((err) => {
          res.send(err);
        });
    });
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
