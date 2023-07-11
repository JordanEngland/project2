const router = require('express').Router();
const { User } = require('../models/user');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;