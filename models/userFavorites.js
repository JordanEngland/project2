const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Movie = require('./movie');

class UserFavorites extends Model {}

UserFavorites.init(
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
  },
  {
    sequelize,
    modelName: 'UserFavorites',
  }
);

module.exports = UserFavorites;
