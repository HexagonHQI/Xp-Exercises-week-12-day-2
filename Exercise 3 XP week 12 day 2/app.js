const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the books router
const booksRouter = require('./routes/books');

// Use the books router for routes starting with /books
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
