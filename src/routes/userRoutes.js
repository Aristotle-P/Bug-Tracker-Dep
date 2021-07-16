const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/user');

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
})


// Create user
router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (foundUser) {
    res.send('Email already in use');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.send(user);
})

module.exports = router;