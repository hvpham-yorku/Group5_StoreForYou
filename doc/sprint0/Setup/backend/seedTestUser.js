const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Adjust the path if needed
require('dotenv').config();

const seedUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Check if user already exists
    const existingUser = await User.findOne({ email: 'test@example.com' });
    if (existingUser) {
      console.log('Test user already exists');
      return;
    }

    // Create a hashed password
    const hashedPassword = await bcrypt.hash('test123', 10);

    // Create a new user
    const user = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: hashedPassword,
    });

    await user.save();
    console.log('Test user created successfully');
  } catch (error) {
    console.error('Error seeding test user:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedUser();