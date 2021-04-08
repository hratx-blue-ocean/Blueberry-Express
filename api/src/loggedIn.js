const jwt = require('jsonwebtoken');
const db = require('./postgres');

const isLoggedIn = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
  } else {
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      db.user.findOne({ where: { googleKey: token.googleKey } }).then((user) => {
        if (!user || user.student === null) {
          req.userAuthorized = false;
        } else {
          req.userAuthorized = true;
        }
        // console.log(req.userAuthorized);
        req.user = user;
        // console.log('USER: ', user);
        req.accessToken = token.accessToken;
        req.refreshToken = token.refreshToken;
        next();
      });
    } catch (e) {
      res.sendStatus(403);
    }
  }
};

module.exports = isLoggedIn;
