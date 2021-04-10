const jwt = require('jsonwebtoken');
const db = require('./postgres');

const isLoggedIn = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
  } else {
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      db.user.findOne({ where: { id: token.id } }).then((user) => {
        if (!user.refreshToken || !user.calendarId) {
          return res.sendStatus(401);
        }
        if (!user || user.student === null) {
          req.userAuthorized = false;
        } else {
          req.userAuthorized = true;
        }
        req.user = user;
        req.refreshToken = user.refreshToken;
        next();
      });
    } catch (e) {
      res.sendStatus(403);
    }
  }
};

module.exports = isLoggedIn;
