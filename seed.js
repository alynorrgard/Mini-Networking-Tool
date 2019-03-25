const { db } = require('./server/db');
const { green, red } = require('chalk');

const Campus = require('./server/db/CampusModel');
const Student = require('./server/db/StudentModel');
const { campusDummyData, studentDummyData } = require('./server/db/dummyData');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      campusDummyData.map(campus => {
        return Campus.create(campus);
      })
    );
    await Promise.all(
      studentDummyData.map(student => {
        return Student.create(student);
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
  console.error(red('Oh noes! Something went wrong!'));
  console.error(err);
  db.close();
});
