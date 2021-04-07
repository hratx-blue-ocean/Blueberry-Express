const AuthRouter = require('express').Router();
const passport = require('passport');

AuthRouter.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'openid', 'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events', 'https://www.googleapis.com/auth/calendar.events.readonly', 'https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar.settings.readonly'] }));

AuthRouter.get('/success',
  function(req, res) {
    console.log('blueberry session: ', req.session.passport.user);
    res.status(200).send(req.session);
  });

AuthRouter.get(('/failed', (req, res) => {
  // failed to login route, right now the plan is to send them back to login page
  res.status(401).send('failed to login');
}));

AuthRouter.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failed' }), function(req, res) {
    console.log('req.user: ', req.user);
    res.session = req.user;
    res.redirect('/auth/success');
  });

AuthRouter.get(('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
}));


module.exports = AuthRouter;