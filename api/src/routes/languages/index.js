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
      const result = await db.user.findAndCountAll({
        where: { student: false },
        include: {
          model: db.language,
          required: true,
          where: {
            id: languageId,
          },
        },
      });
      res.json({
        count: Math.min(count, result.count),
        page: page,
        totalCount: result.count,
        users: result.rows.map((u) => ({ id: u.id, name: u.name, bio: u.bio, profileImg: u.profileImg })),
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
      const result = await db.user.findAndCountAll({
        where: { student: true },
        include: {
          model: db.language,
          required: true,
          where: {
            id: languageId,
          },
        },
      });
      res.json({
        count: Math.min(count, result.count),
        page: page,
        totalCount: result.count,
        users: result.rows.map((u) => ({ id: u.id, name: u.name, bio: u.bio, profileImg: u.profileImg })),
      });
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  }
});

module.exports = LanguagesRouter;
