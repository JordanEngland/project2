const User = require('../models/user');
const Movie = require('../models/movie');

exports.addFavoriteMovie = async (req, res) => {
  const { movieId } = req.body;
  const { user } = req;

  try {
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    await user.addFavoriteMovie(movie);
    res.status(201).json({ message: 'Movie added to favorites' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.rateMovie = async (req, res) => {
  const { movieId, rating } = req.body;
  const { user } = req;

  try {
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    await user.addRatedMovie(movie, { through: { rating } });
    res.status(201).json({ message: 'Movie rated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
