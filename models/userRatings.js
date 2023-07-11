const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Movie = require('./movie');

class UserRatings extends Model {}

UserRatings.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: 'id',
      },
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'UserRatings',
  }
);

module.exports = UserRatings;
