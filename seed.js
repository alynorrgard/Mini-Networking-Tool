const { db } = require('./server/db');
const { green, red } = require('chalk');

const Campus = require('./server/db/CampusModel');

const campusDummyData = [
  {
    id: 1,
    name: 'Antonopoulos',
    imageUrl: 'http://dummyimage.com/194x160.jpg/cc0000/ffffff',
    address: '79 Elka Terrace',
    description:
      'quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam',
  },
  {
    id: 2,
    name: 'Abden',
    imageUrl: 'http://dummyimage.com/233x110.jpg/cc0000/ffffff',
    address: '1 Brentwood Center',
    description:
      'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
  },
  {
    id: 3,
    name: 'Killingbeck',
    imageUrl: 'http://dummyimage.com/191x102.jpg/dddddd/000000',
    address: '730 Butterfield Center',
    description:
      'eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
  },
  {
    id: 4,
    name: 'Westcar',
    imageUrl: 'http://dummyimage.com/169x123.jpg/cc0000/ffffff',
    address: '9 Cardinal Trail',
    description:
      'dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
  },
  {
    id: 5,
    name: 'Hammerstone',
    imageUrl: 'http://dummyimage.com/174x218.jpg/cc0000/ffffff',
    address: '350 Tony Park',
    description:
      'sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      campusDummyData.map(campus => {
        return Campus.create(campus);
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
