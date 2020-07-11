const express = require('express');
const router = express.Router();

// Register a user

router.post('/', (req, res) => {
  res.send('Register a User');
});

module.exports = router;
