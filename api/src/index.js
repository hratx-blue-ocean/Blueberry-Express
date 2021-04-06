const path = require('path');
const Router = require('./routes');
const postgres = require('./postgres');

const envPath = path.resolve(__dirname, '.env.' + process.env.NODE_ENV);
require('dotenv').config({
  path: envPath,
});
const passport = require('passport');
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const isLoggedIn = require('./loggedIn.js');
const bodyParser = require('body-parser');
// const axios = require('axios');
require('./passport.setup.js');


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  name: 'blueberry-express',
  keys: ['key1', 'key2']
}));

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});

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
