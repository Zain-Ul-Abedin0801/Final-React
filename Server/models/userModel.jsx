const db = require('../config/db');

const User = {
  create: (userData) => {
    const { first_name, last_name, username, password, dob, country, gender } = userData;
    return db.execute(
      'INSERT INTO users (first_name, last_name, username, password, dob, country, gender) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, username, password, dob, country, gender]
    );
  },
  findByUsername: (username) => {
    return db.execute('SELECT * FROM users WHERE username = ?', [username]);
  },
};

module.exports = User;
