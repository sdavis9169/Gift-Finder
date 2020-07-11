const express = require('express');
const router = express.Router();

// Get all users gifts

router.get('/', (req, res) => {
  res.send('Get all users gifts');
});

// Add a gift

router.post('/', (req, res) => {
  res.send('Add a gift');
});

// Edit a gift

router.put('/:id', (req, res) => {
  res.send('Edit a gift');
});

// Delete a gift

router.delete('/:id', (req, res) => {
  res.send('gift deleted');
});

module.exports = router;
