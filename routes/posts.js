const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middleware/auth');
const Post = require('../models/Post');

// GET /posts/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('posts/add');
});

// GET all posts
router.get('/', ensureAuth, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user')
      .sort({createdAt: 'desc'})
      .lean();
    res.render('posts/index', {
      posts,
    });
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});

// POST new posts
router.post('/', ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Post.create(req.body);
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});

module.exports = router;
