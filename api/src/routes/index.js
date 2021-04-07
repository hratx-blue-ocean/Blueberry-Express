const Router = require('express').Router();
const jwt = require('jsonwebtoken');
const isLoggedIn = require('../loggedIn');

Router.use('/users', isLoggedIn, require('./users'));
Router.use('/appointments', isLoggedIn, require('./appointments'));
Router.use('/messages', isLoggedIn, require('./messages'));
Router.use('/languages', isLoggedIn, require('./languages'));
Router.use('/auth', require('./auth'));

module.exports = Router;
