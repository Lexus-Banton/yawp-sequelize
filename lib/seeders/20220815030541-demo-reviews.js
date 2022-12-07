'use strict';

const db = require('../models');
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await db.User.bulkCreate([
      {
        firstName: 'Alvin',
        lastName: 'A',
        password: '123456',
        email: 'alvin@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Bob',
        lastName: 'B',
        password: '123456',
        email: 'bob@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Carole',
        lastName: 'C',
        password: '123456',
        email: 'carole@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        restaurantId: 1,
        stars: 5,
        detail: 'Best restaurant ever!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        restaurantId: 1,
        stars: 1,
        detail: 'Terrible service :(',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        restaurantId: 1,
        stars: 4,
        detail: 'It was fine.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
