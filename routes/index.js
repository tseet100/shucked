const express = require('express');
const router = express.Router();

//login/landing page :: GET
router.get('/', (req, res) => {
  res.render('LOGIN');
});

//dashboard :: GET
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
