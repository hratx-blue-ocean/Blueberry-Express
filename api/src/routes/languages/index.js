const LanguagesRouter = require('express').Router();
const db = require('../../postgres');

LanguagesRouter.get('/', async (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count || 100;
  if (!req.userAuthorized) {
    res.sendStatus(403);
  } else {
    try {
      const result = await db.language.findAndCountAll({
        limit: count,
        offset: (page - 1) * count,
      });
      res.json({
        count: Math.min(count, result.count),
        page: page,
        totalCount: result.count,
        languages: result.rows.map((l) => ({ id: l.id, name: l.name })),
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  }
});

LanguagesRouter.get('/:languageId/teachers', async (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count || 10;
  const languageId = req.params.languageId;
  if (!req.userAuthorized) {
    res.sendStatus(403);
  } else {
    try {
      const language = await db.language.findOne({ where: { id: languageId } });
      const teachers = await language.getUsers({ where: { student: false }, include: [{ model: db.language }] });
      //console.log(teachers.map(({ languages }) => ({ languages: languages.map(({ id }) => id) })));
      res.json({
        count: teachers.length,
        totalCount: teachers.length,
        page: 1,
        users: teachers.map(({ id, name, bio, profileImg, languages }) => ({
          id,
          name,
          bio,
          profileImg,
          languages: languages.map(({ id, name }) => ({ id, name })),
        })),
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  }
});

LanguagesRouter.get('/:languageId/students', async (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count || 10;
  const languageId = req.params.languageId;
  if (!req.userAuthorized) {
    res.sendStatus(403);
  } else {
    try {
      const language = await db.language.findOne({ where: { id: languageId } });
      const teachers = await language.getUsers({ where: { student: true }, include: [{ model: db.language }] });
      //console.log(teachers.map(({ languages }) => ({ languages: languages.map(({ id }) => id) })));
      res.json({
        count: teachers.length,
        totalCount: teachers.length,
        page: 1,
        users: teachers.map(({ id, name, bio, profileImg, languages }) => ({
          id,
          name,
          bio,
          profileImg,
          languages: languages.map(({ id, name }) => ({ id, name })),
        })),
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  }
});

module.exports = LanguagesRouter;
