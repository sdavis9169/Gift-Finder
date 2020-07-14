const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Gifts = require('../models/Gifts');

// Get all users gifts

router.get('/', async (req, res) => {
  try {
    const gifts = await Gifts.find().sort({ date: -1 });
    res.json(gifts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

// Add a gift

router.post('/', async (req, res) => {
  const { item, price, link, picture } = req.body;

  try {
    const newGift = new Gifts({
      item,
      price,
      link,
      picture
    });

    const gift = await newGift.save();
    res.json(gift);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
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
