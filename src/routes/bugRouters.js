const express = require('express');
const router = express.Router();

const Bug = require('../models/bug');

// Get all bugs
router.get('/bugs', async (req, res) => {
  const bugs = await Bug.find();
  res.send(bugs);
})

// Create bug
router.post('/bug', async (req, res) => {
  const { title, description, status, developer } = req.body;
  const newBug = new Bug({ title, description, status, developer });
  await newBug.save();
  res.send(newBug);
})

module.exports = router;