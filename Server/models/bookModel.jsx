const db = require('../config/db');

const Book = {
  getAll: (category) => {
    return db.execute('SELECT * FROM books WHERE category = ?', [category]);
  },
  addBook: (bookData) => {
    const { title, author, price, category, image } = bookData;
    return db.execute(
      'INSERT INTO books (title, author, price, category, image) VALUES (?, ?, ?, ?, ?)',
      [title, author, price, category, image]
    );
  },
};

module.exports = Book;
