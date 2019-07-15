const Sequelize = require('sequelize');
const db = require('./database');

const User = require('./UserModel');
const Pet = require('./PetModel');

// Relationship types are currently limited to the below options,
// so it is easy to predict and create the vice-versa relationship
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

// creates relations between database models
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
