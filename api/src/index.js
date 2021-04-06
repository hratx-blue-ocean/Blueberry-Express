const path = require('path');

const envPath = path.resolve(__dirname, '.env.' + process.env.NODE_ENV);
require('dotenv').config({
  path: envPath,
});

const express = require('express');
const app = express();
const Router = require('./routes');

const postgres = require('./postgres');

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
