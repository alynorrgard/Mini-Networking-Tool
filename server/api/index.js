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

router.get('/contacts/:userId', async (req, res, next) => {
  try {
    const contact = await User.findById(req.params.userId, {
      include: [{ model: Pet }, { model: Relationship }],
    });
    res.send(contact);
  } catch (err) {
    next(err);
  }
});

router.get('/id/:displayName', async (req, res, next) => {
  try {
    const displayNameWithSpace = req.params.displayName.replace('%20', ' ');
    const contact = await User.findOne({
      where: { displayName: displayNameWithSpace },
    });
    res.send(contact);
  } catch (err) {
    next(err);
  }
});

router.post('/relationships', async (req, res, next) => {
  try {
    const newRelationship = await Relationship.create(req.body);
    res.status(201).send(newRelationship);
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
