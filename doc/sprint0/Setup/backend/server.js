require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('API is running');
});

const Product = require('./models/Product');

app.post('/api/products', async (req, res) => {
  const { name, price, description, stock } = req.body;
  try {
    const newProduct = await Product.create({ name, price, description, stock });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

app.get('/api/products/search', async (req, res) => {
  const item = req.query.q; 
  try {
    const products = await Product.find({
      name: { $regex: item, $options: 'i' }, 
    });
    console.log(products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.delete('/clear', async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: 'All products cleared' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear products' });
  }
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);