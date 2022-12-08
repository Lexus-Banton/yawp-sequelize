'use strict';

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

    await queryInterface.bulkInsert('Genres', [
      {
        name: 'action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'animated',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'romance',
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
