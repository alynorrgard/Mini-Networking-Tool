const campusDummyData = [
  {
    name: 'Gryffindor',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/700?cb=20190222162949',
    address: '79 Elka Terrace',
    description:
      'Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Godric instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, and determination, to be sorted into his house. The emblematic animal is a lion, and its colours are scarlet and gold. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick" is the House ghost.',
  },
  {
    name: 'Hufflepuff',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/scale-to-width-down/700?cb=20161020182518',
    address: '1 Brentwood Center',
    description:
      "Hufflepuff is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members. The emblematic animal is a badger, and yellow and black are its colours. The Head of Hufflepuff is Pomona Sprout and the Fat Friar is the House's patron ghost.",
  },
  {
    name: 'Ravenclaw',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/scale-to-width-down/350?cb=20161020182442',
    address: '730 Butterfield Center',
    description:
      'Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house are characterised by their wit, learning, and wisdom. The emblematic animal symbol is an eagle, and blue and bronze are its colours. The Head of Ravenclaw is Filius Flitwick and the house ghost is the Grey Lady, otherwise known as Helena Ravenclaw.',
  },
  {
    name: 'Slytherin',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182557',
    address: '9 Cardinal Trail',
    description:
      "Slytherin is one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics include: cunning, resourcefulness, and ambition. Many Slytherin students tend to clique together, often acquiring leaders, which further exemplifies Slytherin's ambitious qualities.",
  },
  {
    name: 'Chamber of Secrets',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Chamber.png/revision/latest/scale-to-width-down/700?cb=20180613173723',
    address: '74 Mccormick Drive',
    description:
      'The Chamber of Secrets was created under the Dungeons of Hogwarts School of Witchcraft and Wizardry during Medieval times by Salazar Slytherin, who disagreed with the other Hogwarts founders on the merits of Blood Purity. The Chamber of Secrets was home to an ancient Basilisk, which, according to legend, was intended to be used to purge the area of Muggle-born students.',
  },
  {
    name: 'Forbidden Forest',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/5/59/Forbidden_Forest.png/revision/latest/scale-to-width-down/700?cb=20130819184917',
    address: '350 Tony Park',
    description:
      'The Forbidden Forest, also known as the Dark Forest, borders the edges of the Hogwarts School of Witchcraft and Wizardry grounds. The forest is a very old place that holds many secrets and houses many creatures, some dark and dangerous, others friendly. The trees in the forest are considered ancient, they are dense and rough looking from years of exposure to the elements.',
  },
];

const studentDummyData = [
  {
    firstName: 'Rubeus',
    lastName: 'Hagrid',
    email: 'rhagrid@gryffindor.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Rubeushagrid.PNG/revision/latest/scale-to-width-down/699?cb=20161123044204',
    gpa: 0.49,
  },
  {
    firstName: 'Luna',
    lastName: 'Lovegood',
    email: 'llovegood1@ravenclaw.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/4/49/Luna_profile.jpg/revision/latest/scale-to-width-down/673?cb=20160902165706',
    gpa: 2.5,
    campusId: 3,
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'hpotter1@gryffindor.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/c/cd/Harry-potter-and-the-sorcerers-stone1.jpg/revision/latest/scale-to-width-down/149?cb=20150725151406',
    gpa: 3.81,
    campusId: 1,
  },
  {
    firstName: 'Draco',
    lastName: 'Malfoy',
    email: 'dmalfoy3@slytherin.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/revision/latest/scale-to-width-down/700?cb=20180116013508',
    gpa: 3.14,
    campusId: 4,
  },
  {
    firstName: 'Hannah',
    lastName: 'Abbott',
    email: 'habbott4@hufflepuff.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg/revision/latest?cb=20170731215859',
    gpa: 1.34,
    campusId: 2,
  },
  {
    firstName: 'Hermione',
    lastName: 'Granger',
    email: 'hgranger2@gryffindor.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/4/41/Hermionedhface.jpg/revision/latest/scale-to-width-down/700?cb=20161221044857',
    gpa: 3.84,
    campusId: 1,
  },
  {
    firstName: 'Severus',
    lastName: 'Snape',
    email: 'ssnape@slytherin.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest?cb=20150307193047',
    gpa: 3.2,
    campusId: 4,
  },
  {
    firstName: 'Horace',
    lastName: 'Slughorn',
    email: 'hslughorn@slytherin.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/a/a1/Horace_Slughorn_%28HBP_promo%29_1-1.jpg/revision/latest?cb=20100706114608',
    gpa: 3.62,
    campusId: 4,
  },
  {
    firstName: 'Cedric',
    lastName: 'Diggory',
    email: 'cdiggory5@hufflepuff.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/2/23/CedricDiggoryProfile.png/revision/latest/scale-to-width-down/700?cb=20161123045136',
    gpa: 2.17,
    campusId: 2,
  },
  {
    firstName: 'Ronald',
    lastName: 'Weasley',
    email: 'rweasley7@gryffindor.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/8/85/Ron_Weasley.jpg/revision/latest?cb=20150828153318',
    gpa: 3.21,
    campusId: 1,
  },
  {
    firstName: 'Newton',
    lastName: 'Scamander',
    email: 'nscamander3@hufflepuff.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/4/43/NewtonScamander-Profile-crop.png/revision/latest/scale-to-width-down/602?cb=20170112223036',
    gpa: 2.87,
    campusId: 2,
  },
  {
    firstName: 'Gilderoy',
    lastName: 'Lockhart',
    email: 'glockhart@ravenclaw.edu',
    imageUrl:
      'https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Kenneth_Branagh_as_Gilderoy-Lockhart_%286%29.jpg/revision/latest?cb=20181009213748',
    gpa: 2.82,
    campusId: 3,
  },
];

module.exports = { campusDummyData, studentDummyData };
