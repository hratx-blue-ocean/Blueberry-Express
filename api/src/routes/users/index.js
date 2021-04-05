const UsersRouter = require('express').Router();

UsersRouter.get('/', (req, res) => {
  res.sendStatus(404);
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
