const router = require('express').Router();
const { Campus, Student } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const campusById = await Campus.findById(req.params.campusId, {
      include: { model: Student },
    });
    res.send(campusById);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    await Campus.create(req.body);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
});

router.delete('/:campusId', async (req, res, next) => {
  try {
    await Campus.destroy({
      where: {
        id: req.params.campusId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
