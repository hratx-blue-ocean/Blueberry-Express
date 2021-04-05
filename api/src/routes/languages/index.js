const LanguagesRouter = require('express').Router();

LanguagesRouter.get('/', (req, res) => {
  res.sendStatus(400);
});

LanguagesRouter.get('/languages/:languageId/teachers', (req, res) => {
  res.sendStatus(400);
});

LanguagesRouter.get('/languages/:languageId/students', (req, res) => {
  res.sendStatus(400);
});

module.exports = LanguagesRouter;
