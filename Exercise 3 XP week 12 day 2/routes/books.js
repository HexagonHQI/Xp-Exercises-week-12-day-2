const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;
