const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const isLoggedIn = require('./loggedIn.js');
require('./passport-setup');


app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use('/', (req, res) => {
  res.send('Hello, Back-End!');
});

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

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/login');
});