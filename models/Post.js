const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: true,
    trim: true,
  },
  oyster: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large'],
  },
  price: {
    type: Number,
  },
  drink: {
    type: String,
  },
  image: {
    type: String,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
