const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('pet', {
  displayName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
