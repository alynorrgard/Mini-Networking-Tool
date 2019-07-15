const userData = [
  {
    id: 1,
    displayName: 'Kenneth Lai',
    title: 'Software Engineer',
    company: 'Grapevine',
    location: 'New York City',
  },
  {
    id: 2,
    displayName: 'Andrew Reiner',
    title: 'Cofounder',
    company: 'Grapevine',
    location: 'New York City',
  },
  {
    id: 3,
    displayName: 'Lloyd Emelle',
    title: 'Lead Hacker',
    company: 'Grapevine',
    location: 'New York City',
  },
  {
    id: 4,
    displayName: 'Rich Prior',
    title: 'Lead Designer',
    company: 'Grapevine',
    location: 'New York City',
  },
  {
    id: 5,
    displayName: 'Gina Lee',
    title: 'CEO',
    company: 'BanCard Plus',
    location: 'New York City',
  },
  {
    id: 6,
    displayName: 'Kristen Reiner',
    title: 'Investor Relations Business Development',
    company: 'The Blackstone Group',
    location: 'New York City',
  },
  {
    id: 7,
    displayName: 'Stacey',
    title: null,
    company: null,
    location: 'New York City',
  },
  {
    id: 8,
    displayName: 'Dylan Reiner',
    title: 'Baby',
    company: null,
    location: 'New York City',
  },
  {
    id: 9,
    displayName: 'Leah Prior',
    title: null,
    company: null,
    location: 'New York City',
  },
];

const petData = [
  { displayName: 'Nike', type: 'dog', userId: 2 },
  { displayName: 'Jjong', type: 'dog', userId: 5 },
  { displayName: 'Sweetie', type: 'cat', userId: 5 },
];

const relationshipData = [
  { userId: 1, relationshipId: 5, type: 'Girlfriend' },
  { userId: 2, relationshipId: 6, type: 'Wife' },
  { userId: 3, relationshipId: 7, type: 'Girlfriend' },
  { userId: 4, relationshipId: 9, type: 'Wife' },
  { userId: 5, relationshipId: 1, type: 'Boyfriend' },
  { userId: 6, relationshipId: 2, type: 'Husband' },
  { userId: 7, relationshipId: 3, type: 'Boyfriend' },
  { userId: 8, relationshipId: 2, type: 'Dad' },
  { userId: 8, relationshipId: 6, type: 'Mom' },
  { userId: 9, relationshipId: 4, type: 'Husband' },
];

module.exports = { userData, petData, relationshipData };
