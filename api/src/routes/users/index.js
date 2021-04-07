const jwt = require('jsonwebtoken');

const UsersRouter = require('express').Router();
const db = require('../../postgres');


UsersRouter.get('/', (req, res) => {
  db.user.findAll()
  .then((data) => {
		res.status(200).json(data);
  })
  .catch((err) =>
		console.log(err)
	);
});

UsersRouter.get('/:userId', (req, res) => {
  var userId = req.params.userId;

  db.user.findAll({
    where: {
      id: userId,
    },
  })
  .then((data) => {
		res.status(200).json(data);
  })
  .catch((err) =>
		console.log(err)
	);
});

UsersRouter.put('/type', (req, res) => {
  //what data am I getting from the front-end?
  let isStudent = req.params.isStudent; //?????
  let userId = req.params.userId;

		db.user.update(
			{ student: true },
			{ where: { id: userId } }
		)
		.then(() => {
			res.sendStatus(204);
		})
		.catch((err) => {
			res.sendStatus(500);
			console.log(err.message);
		});
});

// UsersRouter.post('/languages/:languageId', (req, res) => {
//   res.sendStatus(400);
// });

UsersRouter.post('/:userId/languages/:languageId', (req, res) => {
  let userId = req.params.userId;
  let languageId = req.params.languageId;
  console.log('params', req.params)


  db.language.findOne({
    where: {id: languageId}
  })
  .then((data) => {
    const lang = data;
    lang.addUser(userId)
  })
  .then(() => {
    res.status(201).send('saved!');
  })
  .catch((err) => {
    res.sendStatus(500);
    console.log(err.message);
  });
});

UsersRouter.get('/users/:userId/availability', (req, res) => {
  res.sendStatus(400);
});

UsersRouter.post('/users/availability', (req, res) => {
  res.sendStatus(400);
});

module.exports = UsersRouter;
