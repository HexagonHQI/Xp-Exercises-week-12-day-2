const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [];

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'To-do item not found' });
  }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  todos = todos.filter(t => t.id !== todoId);
  res.status(204).send();
});

module.exports = router;
