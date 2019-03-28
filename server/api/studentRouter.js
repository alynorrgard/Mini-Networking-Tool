const router = require('express').Router();
const { Student, Campus } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (err) {
    next(err);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const studentById = await Student.findById(req.params.studentId, {
      include: { model: Campus },
    });
    res.send(studentById);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:studentId', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.studentId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
