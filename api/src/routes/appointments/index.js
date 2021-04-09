const AppointmentsRouter = require('express').Router();
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refreshToken.js');
const db = require('../../postgres');

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

AppointmentsRouter.post('/', (req, res) => {
  // (this route is not done!!!!)
  // find the refreshtoken for the "with" user in req.body.with
  db.user.findOne({ where: { googleKey: req.body.with } })
    .then(async (user) => {
      var accessTok = await refresh(req.refreshToken);

      Calendar.createEvent(accessToken, req.refreshToken, req.user.dataValues.calendarId, req.body)
        .then((responseObj) => {
          res.json(responseObj);
        })
        .catch((err) => {
          res.send(err);
        });

      return {
        refreshToken: user.refreshToken,
        calendarId: user.calendarId
      };
    });

  let newToken = refresh(req.refreshToken);

  Promise.resolve(newToken)
    .then((accessToken) => {
      Calendar.createEvent(accessToken, req.refreshToken, req.user.dataValues.calendarId, req.body)
        .then((responseObj) => {
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
