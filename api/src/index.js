/**
 * These 3 imports should happen before anything else.
 * Anything you import above this group will not have access to the environment variables
 */

const path = require('path');
const envPath = path.resolve(__dirname, '.env.' + process.env.NODE_ENV);
require('dotenv').config({
  path: envPath,
});

const Router = require('./routes');
const postgres = require('./postgres');
const cors = require('cors');

const passport = require('passport');
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
const bodyParser = require('body-parser');
// const axios = require('axios');
require('./passport.setup.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    name: 'blueberry-express',
    keys: ['key1', 'key2'],
  })
);

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
