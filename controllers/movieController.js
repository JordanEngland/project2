const Movie = require('../models/movie');

exports.searchMovies = async (req, res) => {
  const { query } = req.query;

  try {
    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
