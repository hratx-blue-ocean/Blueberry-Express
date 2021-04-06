const path = require('path');
const Router = require('./routes');
const postgres = require('./postgres');

const envPath = path.resolve(__dirname, '.env.' + process.env.NODE_ENV);
require('dotenv').config({
  path: envPath,
});

const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const isLoggedIn = require('./loggedIn.js');
const bodyParser = require('body-parser');
const axios = require('axios');
require('./passport-setup');


app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'openid', 'https://www.googleapis.com/auth/calendar.events', 'https://www.googleapis.com/auth/calendar.events.readonly', 'https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/auth/calendar.settings.readonly'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/profile-page');
  });

app.get('/failed', (req, res) => {
  // failed to login route, right now the plan is to send them back to login page
  res.send('failed to login');
});

app.get('/success', isLoggedIn, (req, res) => {
  console.log('blueberry session: ', req.session.passport.user);

  res.send(`successful login: ${req.session}`);
});

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }), function(req, res) {
  // Successful authentication, redirect home.
  // console.log('inauth callback', req.query)
    console.log('req.user: ', req.user);
    res.session = req.user;
    res.redirect('/success');
  });

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
});

// open a popup window
// jwt JSON web token
app.use('/', Router);
postgres.sequelize
  .authenticate()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Express app listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
