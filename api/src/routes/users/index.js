const db = require('../../postgres');
const jwt = require('jsonwebtoken');
const Calendar = require('../.././controller/index.js');
const refresh = require('../.././controller/refreshToken.js');
const UsersRouter = require('express').Router();

UsersRouter.get('/', (req, res) => {
  if (req.headers.authorization) {
    console.dir(req.user);
    try {
      const token = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      db.user.findOne({ where: { id: token.id } }).then(async (user) => {
        const languages = await user.getLanguages();
        if (!user) return res.json({});
        res.json({
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.student !== null ? (user.student ? 'student' : 'teacher') : null,
          languages: languages.map(({ id, name }) => ({ id, name })),
          bio: user.bio,
        });
      });
    } catch (e) {
      console.error(e);
      res.json({});
    }
  } else {
    res.json({});
  }
});

UsersRouter.get('/languages', (req, res) => {
  req.user
    .getLanguages()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.get('/:userId', (req, res) => {
  var userId = req.params.userId;

  db.user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
});

UsersRouter.put('/type', (req, res) => {
  if (req.user.student === null) {
    req.user.student = req.body.type === 'student';
    req.user
      .save()
      .then((data) => {
        res.sendStatus(204);
      })
      .catch(() => res.sendStatus(400));
  } else {
    res.sendStatus(400);
  }
});

UsersRouter.post('/languages/:languageId', (req, res) => {
  let languageId = req.params.languageId;

  req.user
    .addLanguage(languageId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.delete('/languages/:languageId', (req, res) => {
  let languageId = req.params.languageId;
  req.user
    .removeLanguage(languageId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err.message);
    });
});

UsersRouter.get('/:userId/availability', async (req, res) => {
  // returns an array of busy start/end time objects
  const user = await db.user.findOne({ where: { id: req.params.userId } });
  if (!user) return res.sendStatus(400);
  try {
    const accessToken = await refresh(user.refreshToken);
    const freeBusy = await Calendar.freeBusy(accessToken, user.calendarId);
    res.json(freeBusy);
  } catch (e) {
    console.log(e.message);
    res.status((e.response && e.response.status) || 400);
    res.send(e.message);
  }
});

UsersRouter.post('/availability', async (req, res) => {
  /**
   * So, the general workflow here is to setup recurring weekly events, with the summary '{DayOfWeek} Unavailable'.
   * In order to do that, we need to delete all previous events in the calendar with the summary '{DayOfWeek} Unavailable', and then set new ones
   */
  // Step 0, get accessToken
  try {
    const accessToken = await refresh(req.user.refreshToken);
    // Step 1 get all events
    const events = (await Calendar.listEvents(accessToken, req.user.calendarId)).items;
    // Step 2, filter to the 'recurring events' with the name '{DayOfWeek} Unavailable'
    const recurring = events.filter((e) => e.recurrence && e.summary.includes('Unavailable'));
    console.log(recurring.length);
    console.log(req.user.calendarId);
    console.log(recurring[0].id);

    // Step 3, Delete those recurring events.
    const results = await Promise.all(
      recurring.map(({ id }) => Calendar.deleteEvent(accessToken, req.user.calendarId, id))
    );
    console.log(results);
    // Step 4, create new recurring events for each day.
    const promises = [];
    Object.keys(req.body).forEach((day) => {
      req.body[day].forEach((busyBlock) => {
        promises.push(
          Calendar.createEvent(accessToken, req.user.calendarId, {
            start: busyBlock.start,
            end: busyBlock.end,
            summary: `${day} Unavailable`,
            recurrence: 'RRULE:FREQ=WEEKLY;UNTIL=21001231T000000Z',
          })
        );
      });
    });
    await Promise.all(promises);
    res.sendStatus(204);
  } catch (e) {
    console.log(e.message);
    res.status((e.response && e.response.status) || 400);
    res.send(e.message);
  }
});

module.exports = UsersRouter;
