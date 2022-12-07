# Yawp Restaurant Reviews

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-yawp-sequelize) to get started.

### Learning Objectives

- Use an ORM to create migrations for managing your tables
- Use an ORM to query your database

### Description

Exciting news! Yawp has received Series A funding, but the new investors want you to expand from restaurant reviews to movie reviews. Thankfully, you have Sequelize installed to make adding new tables and data to your database much easier!

## Instructions

For this spotlight, we're going to talk a little about some concepts then break off and work on them with a pair, then we'll come back and cover more concepts.

### Setup

- One partner should use this repo as a template and then add partner 2 as a collaborator
- Both partners should clone the repo, and run:
  - `npm install`
  - check the settings in config.js to ensure the postgres user and password match your local setup
  - `npm run db:reset`
  - `npx sequelize-cli db:seed:all`
- Open BeeKeeper and confirm that you have 5 tables in your `yawp_development` database: `Restaurants`, `Reviews`,`SequelizeData`, `SequelizeMeta` and `Users`
- Decide which partner will drive first, and which will navigate

### Part 1 - Migrations

Add migrations for movies and genres. Each movie belongs to one genre. Each genre can have many movies. 
The genre table should have the following field

| Column | Type   |
| ------ | ------ |
| name   | string |

The movies table should have the following columns:

| Column      | Type                                 |
| ----------- | ------------------------------------ |
| title       | string                               |
| description | string                               |
| image       | string (validate isUrl)              |
| releaseYear | integer                              |
| genre_id    | integer - foreign key to Genre table |


- At the end of this step you should have 2 migration files in your migrations folder. The partner who is driving should run the migrations using `npx sequelize-cli db:migrate`. Be sure to look at BeeKeeper and make sure that your columns looks correct.
- ACP the migrations and push to your shared repo
- Have the partner who was navigating, pull down the code and run the migrations
- At the end of this step you should both have 2 additional tables in your database, Movies and Genres but there should be no data -- you should also have 2 additional rows in your `SequelizeMeta` table

### Part 2 - Add Relationships

We need to add our relationships to our migrations and our models. Movies belong to a Genre and Genre's can have many movies.

- Check your migration to ensure that `genre_id` is setup as a Foreign Key (you may have done this in step one -- if not, look at the Review migration to see how to do this)
- Update your Movie model to add a `belongsTo` relationship to Genres and update your Genre model to have a `hasMany` relationship to Movies
- If you made any changes to your migrations, be sure to run `npm run db:reset` to make sure your db has picked up the changes

### Part 3 - Generate Seeds

- Add a new seeder file called `demo-genres` using the sequelize-cli
- Add code in the seeder file to create some demo genres (use existing seeders as examples)
- Add a new seeder file called `demo-movies` using the sequelize-cli
- Add code in the seeder file to create some demo movies
- Run `npx sequelize-cli db:seeds:all` and check BeeKeeper to confirm you have data in your Genres and Movies tables
- ACP the seeders and push to your shared repo
- Have the partner who was navigating, pull down the code and run the seeds

### Part 4 - Add some routes

- TDD a `/movies` route that returns the list of movies (including the genre)
- TDD a `/genres` route that return the list of genres
- TDD a `/genre/:id` route that reutrns a genre with the list of movies in that genre
