const bcrypt = require('bcrypt');
const { User, Movie, UserFavorite, UserRating } = require('../models');

const seedDatabase = async () => {
  try {
    // Create users
    const userData = [
      { username: 'john', password: bcrypt.hashSync('password', 10) },
      { username: 'emma', password: bcrypt.hashSync('password', 10) },
    ];
    const users = await User.bulkCreate(userData);

    // Create movies
    const movieData = [
      { title: 'Movie 1', genre: 'Action' },
      { title: 'Movie 2', genre: 'Comedy' },
    ];
    const movies = await Movie.bulkCreate(movieData);

    // Create user favorites
    const userFavoriteData = [
      { userId: users[0].id, movieId: movies[0].id },
      { userId: users[1].id, movieId: movies[1].id },
    ];
    await UserFavorite.bulkCreate(userFavoriteData);

    // Create user ratings
    const userRatingData = [
      { userId: users[0].id, movieId: movies[0].id, rating: 4 },
      { userId: users[1].id, movieId: movies[1].id, rating: 5 },
    ];
    await UserRating.bulkCreate(userRatingData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
