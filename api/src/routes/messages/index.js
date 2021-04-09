const MessagesRouter = require('express').Router();
const db = require('../../postgres');

/**
 * TODO: Figure out a more reasonable way to implement count/page functionality.
 *       This is certainly suboptimal.
 * TODO: We should probably be returning actual user objects for the from/to fields, rather than just the ID,
 *       So the frontEnd doesn't have to make extra API calls
 */

MessagesRouter.get('/', (req, res) => {
  if (!req.userAuthorized) {
    res.sendStatus(403);
    return;
  }
  let count = req.query.count || 5;
  let page = req.query.page || 1;

  req.user
  .getIncomingMessages({
    include: [
      {
        model: db.user,
        as: 'from',
      },
    ],
  })
    .then((data) => {
      let filtered = data.map((message) => {
        let messageObj = {
          id: message.id,
          subject: message.subject,
          from: message.fromId,
          unread: message.opened,
          created_at: message.createdAt,
          fromUser: message.from
        };
        return messageObj;
      });
      res.json({
        count: count,
        totalCount: filtered.length,
        page: page,
        messages: filtered.slice((page - 1) * count, page * count),
      });
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

MessagesRouter.get('/unread', (req, res) => {
  if (!req.userAuthorized) {
    res.sendStatus(403);
    return;
  }
  let count = req.query.count || 5;
  let page = req.query.page || 1;

  req.user
    .getIncomingMessages({
      where: { opened: false },
      include: [
        {
          model: db.user,
          as: 'from',
        },
      ],
     })
    .then((data) => {
      let filtered = data.map((message) => {
        let messageObj = {
          id: message.id,
          subject: message.subject,
          from: message.fromId,
          unread: message.opened,
          created_at: message.createdAt,
          fromUser: message.from
        };
        return messageObj;
      });
      res.json({
        count: count,
        totalCount: filtered.length,
        page: page,
        messages: filtered.slice((page - 1) * count, page * count),
      });
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

MessagesRouter.get('/sent', (req, res) => {
  if (!req.userAuthorized) {
    res.sendStatus(403);
    return;
  }
  let count = req.query.count || 5;
  let page = req.query.page || 1;

  req.user
    .getSentMessages({
      include: [
        {
          model: db.user,
          as: 'to',
        },
      ],
    })
    .then((data) => {
      let filtered = data.map((message) => {
        let messageObj = {
          id: message.id,
          subject: message.subject,
          from: message.fromId,
          to: message.toId,
          unread: message.opened,
          created_at: message.createdAt,
          toUser: message.to
        };
        return messageObj;
      });
      res.json({
        count: count,
        totalCount: filtered.length,
        page: page,
        messages: filtered.slice((page - 1) * count, page * count),
      });
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

/*
 In theory, this route should check that the current logged in user is either the toId or the fromId,
 otherwise a user can theoretically see any messages they want... Future goals
 */
MessagesRouter.get('/:messageId', (req, res) => {
  if (!req.userAuthorized) {
    res.sendStatus(403);
    return;
  }
  db.message
    .findOne({ where: { id: req.params.messageId } })
    .then((message) => {
      res.json(message);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

MessagesRouter.post('/', (req, res) => {
  if (!req.userAuthorized) {
    res.sendStatus(403);
    return;
  }
  let newMessage = {
    fromId: req.user.id,
    toId: req.body.toId,
    body: req.body.body,
    subject: req.body.subject,
    opened: false,
    createdAt: new Date(),
  };

  db.message
    .create(newMessage)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.error(err);
    });
});

module.exports = MessagesRouter;
