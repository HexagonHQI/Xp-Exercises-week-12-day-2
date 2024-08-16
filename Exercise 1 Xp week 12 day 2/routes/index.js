const express = require('express');
const router = express.Router();

// Define a route for the About Us page
router.get('/about', (req, res) => {
  res.send('About Us');
});

module.exports = router; // Ensure the router is correctly exported
