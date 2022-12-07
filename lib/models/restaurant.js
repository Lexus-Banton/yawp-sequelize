'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.hasMany(models.Review, {
        foreignKey: 'restaurantId',
      });
    }
  }
  Restaurant.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      open: {
        type: DataTypes.STRING,
      },
      close: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      cost: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: 'Image must be a valid url',
          },
        },
      },
      website: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: 'Website must be a valid url',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Restaurant',
    }
  );
  return Restaurant;
};
