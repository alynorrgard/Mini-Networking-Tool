import React from 'react';

const Home = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <h4>to the</h4>
      <h1>Hogwarts School of Witchcraft and Wizardry!</h1>
      <img src="https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest?cb=20110806202805" />
      <p id="home">
        Hogwarts School of Witchcraft and Wizardry is a British wizarding
        school, located in the Scottish Highlands. It takes students from the
        United Kingdom of Great Britain and Northern Ireland, and also the
        Republic of Ireland. Established around the 10th century, Hogwarts is
        considered to be one of the finest magical institutions in the Wizarding
        World. The school's motto is{' '}
        <i>
          Draco Dormiens Nunquam Titillandus (Draco Dormiens Nvnqvam
          Titillandvs)
        </i>
        , which, translated from Latin, means "Never tickle a sleeping dragon".
      </p>
      {/* <img
        id="map"
        src="https://i.etsystatic.com/14079108/r/il/f571ca/1098906480/il_570xN.1098906480_bp3n.jpg"
      /> */}
    </main>
  );
};

export default Home;
