const User = require('../models/user');
const collaborativeFiltering = require('../helpers/collaborativeFiltering');

exports.getRecommendations = async (req, res) => {
  const { user } = req;

  try {
    // Get recommendations for the user using the collaborative filtering algorithm
    const recommendations = collaborativeFiltering.getRecommendations(user.id);

    res.json(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
