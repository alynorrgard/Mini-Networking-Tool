const Sequelize = require('sequelize');
const db = require('./database');

const User = require('./UserModel');
const Pet = require('./PetModel');

const Relationship = db.define('relationship', {
  type: {
    type: Sequelize.ENUM(
      'Mom',
      'Dad',
      'Wife',
      'Husband',
      'Girlfriend',
      'Boyfriend',
      'Child'
    ),
    allowNull: true,
  },
});

User.belongsToMany(User, {
  as: 'relationships',
  through: 'relationship',
});
User.hasMany(Relationship);
Pet.belongsTo(User);
User.hasMany(Pet);

module.exports = {
  db,
  User,
  Pet,
  Relationship,
};
