const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { first_name, last_name, username, password, dob, country, gender } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

  try {
    const [result] = await User.create({
      first_name,
      last_name,
      username,
      password: hashedPassword,
      dob,
      country,
      gender,
    });
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await User.findByUsername(username);
    if (rows.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, 'yourSecretKey', {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
