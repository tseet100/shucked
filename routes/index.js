const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth');
const Post = require('../models/Post');

//login/landing page :: GET
router.get('/', ensureGuest, (req, res) => {
  res.render('LOGIN', {
    layout: 'login',
  });
});

//dashboard :: GET
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const posts = await Post.find({user: req.body.user}).lean();
    res.render('dashboard', {
      name: req.user.firstName,
      posts,
    });
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});

module.exports = router;
