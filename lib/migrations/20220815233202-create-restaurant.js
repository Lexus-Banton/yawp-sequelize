'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cuisine: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      open: {
        type: Sequelize.STRING,
      },
      close: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Restaurants');
  },
};
