const MessagesRouter = require('express').Router();

MessagesRouter.get('/', (req, res) => {
  res.sendStatus(400);
});

MessagesRouter.get('/unread', (req, res) => {
  res.sendStatus(400);
});

MessagesRouter.get('/sent', (req, res) => {
  res.sendStatus(400);
});

MessagesRouter.get('/:messageId', (req, res) => {
  res.sendStatus(400);
});

MessagesRouter.post('/', (req, res) => {
  res.sendStatus(400);
});

module.exports = MessagesRouter;
