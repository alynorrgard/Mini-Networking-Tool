const { db, User, Pet, Relationship } = require('./server/db');
const { userData, petData, relationshipData } = require('./payload');
const { green, red } = require('chalk');

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      userData.map(user => {
        return User.create(user);
      })
    );
    await Promise.all(
      petData.map(pet => {
        return Pet.create(pet);
      })
    );
    await Promise.all(
      relationshipData.map(relationship => {
        return Relationship.create(relationship);
      })
    );

    console.log(green('Seeding success!'));
    db.close();
  } catch (err) {
    console.error(red('Could not seed the database!'));
    console.error(err);
    db.close();
  }
};

seed().catch(err => {
  console.error(red('Something went wrong!'));
  console.error(err);
  db.close();
});
