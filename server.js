const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flashcards', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Flashcard Schema
const flashcardSchema = new mongoose.Schema({
  title: String,
  body: String,
  created: { type: Date, default: Date.now },
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

// Routes
// Get all flashcards
app.get('/flashcards', async (req, res) => {
  const flashcards = await Flashcard.find();
  res.send(flashcards);
});

// Create new flashcard
app.post('/flashcards', async (req, res) => {
  const flashcard = new Flashcard(req.body);
  await flashcard.save();
  res.send(flashcard);
});

// Delete flashcard
app.delete('/flashcards/:id', async (req, res) => {
  await Flashcard.findByIdAndDelete(req.params.id);
  res.send({ message: 'Flashcard deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
