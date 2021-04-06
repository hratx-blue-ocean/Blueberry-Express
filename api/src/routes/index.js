const Router = require('express').Router();

Router.use('/users', require('./users'));
Router.use('/appointments', require('./appointments'));
Router.use('/messages', require('./messages'));
Router.use('/languages', require('./languages'));
Router.use('/auth', require('./auth'));
Router.use('/', (req, res) => {
  res.send('Hello, BackEnd!');
});

module.exports = Router;
