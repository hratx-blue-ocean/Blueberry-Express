const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('Hello, Back-End!');
});

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});
