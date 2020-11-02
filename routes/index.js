const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth');

//login/landing page :: GET
router.get('/', ensureGuest, (req, res) => {
  res.render('LOGIN', {
    layout: 'login',
  });
});

//dashboard :: GET
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
