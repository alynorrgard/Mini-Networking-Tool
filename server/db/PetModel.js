const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('pet', {
  displayName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  type: {
    type: Sequelize.ENUM('dog', 'cat'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
