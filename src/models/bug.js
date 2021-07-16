const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    required: true,
    trim: true,
  },
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;