const router = require('express').Router();
const { User, Pet, Relationship } = require('../db');

router.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await User.findAll({
      include: [{ model: Pet }, { model: Relationship }],
    });
    res.send(contacts);
  } catch (err) {
    next(err);
  }
});

router.post('/contacts', async (req, res, next) => {
  try {
    const newContact = await User.create(req.body);
    res.status(201).send(newContact);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
