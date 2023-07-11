const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Movie',
  }
);

module.exports = Movie;
