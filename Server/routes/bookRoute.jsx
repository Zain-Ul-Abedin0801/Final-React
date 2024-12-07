const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

router.get('/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const [rows] = await Book.getAll(category);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching books' });
  }
});

// Add a book
router.post('/add', async (req, res) => {
  const { title, author, price, category, image } = req.body;

  try {
    const [result] = await Book.addBook({ title, author, price, category, image });
    res.status(201).json({ message: 'Book added successfully', bookId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error adding book' });
  }
});

module.exports = router;
