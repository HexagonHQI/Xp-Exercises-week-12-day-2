const express = require('express');
const app = express();
const port = 3000;

// Import the router module correctly
const indexRouter = require('./routes/index'); // Make sure this path is correct

// Mount the router module
app.use('/', indexRouter);

// Define a simple route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
