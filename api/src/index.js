const express = require('express');
const app = express();
const Router = require('./routes');

app.use('/', Router);

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});
