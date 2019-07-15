const router = require('express').Router();
const { User, Pet, Relationship } = require('../db');
const Sequelize = require('sequelize');

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

router.post('/pets', async (req, res, next) => {
  try {
    const newPet = await Pet.create(req.body);
    res.status(201).send(newPet);
  } catch (err) {
    next(err);
  }
});

router.get('/search/:keywords', async (req, res, next) => {
  try {
    let results = [];
    const Op = Sequelize.Op;
    const lowerCaseQuery =
      req.params.keywords[0].toLowerCase() + req.params.keywords.slice(1);
    const uppercaseQuery =
      lowerCaseQuery[0].toUpperCase() + lowerCaseQuery.slice(1);
    const relationTypes = [
      'Mom',
      'Dad',
      'Wife',
      'Husband',
      'Girlfriend',
      'Boyfriend',
      'Child',
    ];
    if (relationTypes.includes(uppercaseQuery)) {
      // looks for matches in Relationship table
      const relationshipResults = await Relationship.findAll({
        where: { type: uppercaseQuery },
      });
      const userIdRelationshipResults = relationshipResults.map(
        relationship => relationship.relationshipId
      );

      for (let i = 0; i < userIdRelationshipResults.length; i++) {
        const userId = userIdRelationshipResults[i];
        const contact = await User.findOne({
          where: { id: userId },
        });
        results.push(contact);
      }
    } else {
      // looks for matches in User table
      const userResults = await User.findAll({
        where: {
          [Op.or]: [
            { displayName: { [Op.like]: `%${lowerCaseQuery}%` } },
            { displayName: { [Op.like]: `%${uppercaseQuery}%` } },
            { title: { [Op.like]: `%${lowerCaseQuery}%` } },
            { title: { [Op.like]: `%${uppercaseQuery}%` } },
            { company: { [Op.like]: `%${lowerCaseQuery}%` } },
            { company: { [Op.like]: `%${uppercaseQuery}%` } },
            { location: { [Op.like]: `%${lowerCaseQuery}%` } },
            { location: { [Op.like]: `%${uppercaseQuery}%` } },
          ],
        },
        include: [{ model: Pet }, { model: Relationship }],
      });

      // looks for matches in Pet table
      const petResults = await Pet.findAll({
        where: {
          [Op.or]: [
            { displayName: { [Op.like]: `%${lowerCaseQuery}%` } },
            { displayName: { [Op.like]: `%${uppercaseQuery}%` } },
            { type: { [Op.like]: `%${lowerCaseQuery}%` } },
            { type: { [Op.like]: `%${uppercaseQuery}%` } },
          ],
        },
        include: [{ model: User }],
      });
      const userPetResults = petResults.map(pet => pet.user);

      results = [...userResults, ...userPetResults];
    }

    res.send(results);
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
