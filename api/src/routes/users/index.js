const db = require('../../postgres');
const jwt = require('jsonwebtoken');
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refresh.js');
const UsersRouter = require('express').Router();

UsersRouter.get('/', (req, res) => {
  if (req.headers.authorization) {
    console.dir(req.user);
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      db.user.findOne({ where: { googleKey: token.googleKey } }).then(async (user) => {
        const languages = await user.getLanguages();
        res.json({
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.student !== null ? (user.student ? 'student' : 'teacher') : null,
          languages: languages.map(({ id, name }) => ({ id, name })),
          bio: user.bio,
        });
      });
    } catch (e) {
      console.error(e);
      res.json({});
    }

  } else {
    res.json({});
  }
});

UsersRouter.get('/languages', (req, res) => {
  req.user
    .getLanguages()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.get('/:userId', (req, res) => {
  var userId = req.params.userId;

  db.user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});

UsersRouter.put('/type', (req, res) => {
  if (req.user.student === null) {
    req.user.student = req.body.type === 'student';
    req.user
      .save()
      .then((data) => {
        res.sendStatus(204);
      })
      .catch(() => res.sendStatus(400));
  } else {
    res.sendStatus(400);
  }
});

UsersRouter.post('/languages/:languageId', (req, res) => {
  let languageId = req.params.languageId;

  req.user
    .addLanguage(languageId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.delete('/languages/:languageId', (req, res) => {
  let languageId = req.params.languageId;
  req.user
    .removeLanguage(languageId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.get('/:userId/availability', (req, res) => {
  // returns an array of busy start/end time objects
  let selectedUserRefreshTkn = db.user.findOne({ where: { googleKey: req.params.userId } })
    .then((user) => {
      return {
        refreshToken: user.refreshToken,
        calendarId: user.calendarId
      };
    });

  Promise.resolve((selectedUserRefreshTkn))
    .then((userInfo) => {

      let newToken = refresh(userInfo.refreshToken);
      Promise.resolve(newToken)
        .then((accessToken) => {
          Calendar.freeBusy(accessToken, req.refreshToken, userInfo.calendarId, req.query.start, req.query.end)
            .then((response) => {
            // console.log('response: ', responseObj);
              res.json(response.data);
            })
            .catch((err) => {
              res.setStatus(400).send(err);
            });
        });
    });
});

UsersRouter.post('/users/availability', (req, res) => {
  res.sendStatus(400);
});

module.exports = UsersRouter;
