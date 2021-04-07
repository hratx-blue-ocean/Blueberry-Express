const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  if (!req.headers.authorization) {
    res.sendStatus(403);
  } else {
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      req.user = token.user;
      next();
    } catch (e) {
      res.sendStatus(403);
    }
  }
};

module.exports = isLoggedIn;
