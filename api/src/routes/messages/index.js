const MessagesRouter = require('express').Router();
const db = require('../../postgres');

MessagesRouter.get('/', (req, res) => {
  let count = req.params.count || 5;
  let page = req.params.page || 1;

  req.user.getIncomingMessages()
  .then((data) => {
    let filtered = data.map((message) => {
      let messageObj = {
        id: message.id,
        subject: message.subject,
        from: message.fromId,
        unread: message.opened,
        created_at: message.createdAt
      };
      return messageObj
    })
    res.json({
      count: count,
      totalCount: filtered.length,
      page: page,
      messages: filtered,
    })
  })
  .catch((err) => {
    res.sendStatus(500);
    console.log(err.message);
  });
});

MessagesRouter.get('/unread', (req, res) => {
  let count = req.params.count || 5;
  let page = req.params.page || 1;

  req.user.getIncomingMessages({ where: { opened: false } })
  .then((data) => {
    let filtered = data.map((message) => {
      let messageObj = {
        id: message.id,
        subject: message.subject,
        from: message.fromId,
        unread: message.opened,
        created_at: message.createdAt
      };
      return messageObj;
    })
    res.json({
      count: count,
      totalCount: filtered.length,
      page: page,
      messages: filtered,
    })
  })
  .catch((err) => {
    res.sendStatus(500);
    console.log(err.message);
  });

});

MessagesRouter.get('/sent', (req, res) => {
  let count = req.params.count || 5;
  let page = req.params.page || 1;

  req.user.getSentMessages()
  .then((data) => {
    let filtered = data.map((message) => {
      let messageObj = {
        id: message.id,
        subject: message.subject,
        from: message.fromId,
        to: message.toId,
        unread: message.opened,
        created_at: message.createdAt
      };
      return messageObj;
    })
    res.json({
      count: count,
      totalCount: filtered.length,
      page: page,
      messages: filtered,
    })
  })
  .catch((err) => {
    res.sendStatus(500);
    console.log(err.message);
  });

});

MessagesRouter.get('/:messageId', (req, res) => {
  db.message.findOne({ where: { id: req.params.messageId } })
  .then((message) => {
    res.json(message);
  })
  .catch((err) => {
    res.sendStatus(500);
    console.log(err.message);
  });
});

MessagesRouter.post('/', (req, res) => {
  let newMessage = {
    fromId: req.user.id,
    toId: req.params.toId,
    body: req.params.body,
    subject: req.params.subject,
    opened: false,
    createdAt: new Date(),
    from_id: req.user.id,      //???
    to_id: req.params.toId     //???
  }

  db.message.create(newMessage)
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
		res.sendStatus(500);
    console.error(err);
  })
});

module.exports = MessagesRouter;
