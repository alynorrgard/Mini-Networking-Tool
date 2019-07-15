# Mini-Networking-Tool

This Mini-Networking-Tool is a private web app built for Grapevine's coding challenge. I have been having a lot of fun building it and look forward to any feedback!

## Installation

To test this app:

- Clone the Mini-Networking-Tool repo: https://github.com/alynorrgard/Mini-Networking-Tool.git
- `npm install`
- Create a postgres database called `mini-grapevine`
- `npm run seed` to seed the database with the payload provided in the challenge specs
- `npm run start:dev` to start poking around the app on a local host

## Technologies Used

After referencing documentation and practicing with GraphQL API queries, I decided to first get the app up and running using familiar technologies before transitioning the backend. So, this version is currently using a PostgreSQL database with Node.js, Express, and Sequelize as I continue to experiment separately with GraphQL. My Sequelize queries started to get very loaded, so I think GraphQL definitely has the better payoff in the end by allowing more customizable queries. The frontend was built with React and Redux - a more flattering UI is also under construction!

## Project Requirements

- Add New Contact (Priority: 5/5)

* [x] Entry form can add new contacts
* [x] Establish relations to other previous entities (and vice versa)

- Single Profile View (Priority: 4/5)

* [x] Display each key value on a page
* [x] Include links to related entities
  - Working on creating another database query to render the related entity's name, rather than just their relationship type

- Search Page (Priority: 3/5)

* [x] Search users based on a partial/fuzzy search by any key/relational value
* [x] Display links to resulting profiles (do not preload all contacts on page)
  - Working on a helper function to filter duplicate ID edge cases that may appear

## Further Notes

I have provided some comments throughout my files to help convey my thought process behind some of my decisions for the app, but I will gladly review any portion of code further. I have also made use of logging middleware to track Redux state in the developer console, and server connections in the terminal.
