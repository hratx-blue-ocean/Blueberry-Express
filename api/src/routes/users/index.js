const jwt = require('jsonwebtoken');

const UsersRouter = require('express').Router();

UsersRouter.get('/', (req, res) => {
  if (req.headers.authorization) {
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      res.json(token.user);
    } catch (e) {
      res.json({});
    }
  } else {
    res.json({});
  }
});

UsersRouter.get('/:userId', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.put('/type', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.post('/languages/:languageId', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.get('/users/:userId/availability', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.post('/users/availability', (req, res) => {
  res.sendStatus(400);
});

module.exports = UsersRouter;
