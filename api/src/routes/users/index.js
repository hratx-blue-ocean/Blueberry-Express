const db = require('../../postgres');
const jwt = require('jsonwebtoken');

const UsersRouter = require('express').Router();

UsersRouter.get('/', (req, res) => {
  if (req.headers.authorization) {
    console.dir(req.user);
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      db.user.findOne({ where: { googleKey: token.googleKey } }).then((user) => {
        console.log('USER', user);
        res.json({
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.student ? 'student' : 'teacher',
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

// UsersRouter.post('/languages/:languageId', (req, res) => {
//   res.sendStatus(400);
// });

UsersRouter.post('/languages/:languageId', (req, res) => {
  let languageId = req.params.languageId;

  db.language
    .findOne({
      where: { id: languageId },
    })
    .then((data) => {
      const lang = data;
      lang.addUser(req.user);
    })
    .then(() => {
      res.status(201).send('saved!');
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.get('/users/:userId/availability', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.post('/users/availability', (req, res) => {
  res.sendStatus(400);
});

module.exports = UsersRouter;
