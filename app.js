const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', router);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
