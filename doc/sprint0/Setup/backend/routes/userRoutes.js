const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// User Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email:', email);
  console.log('Received password:', password);

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
	  console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
	console.log('Password valid:', isPasswordValid);
	
    if (!isPasswordValid) {
	  console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
	console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;