const express = require('express');
const app = express();
const port = 5000;
const { MongoClient } = require('mongodb');
const cors = require('cors');
app.use(cors());

const uri = "mongodb+srv://grp5405:grp5405@speedapp.x1oolm2.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let articlesCollection;

client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db("SPEED_5405");
    articlesCollection = db.collection("SPEED");
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// ... [Rest of your routes] ...

// Existing search endpoint
app.get('/api/search', async (req, res) => {
  const searchTerm = req.query.searchTerm;
  try {
    const results = await articlesCollection.find({ title: new RegExp(searchTerm, 'i') }).toArray(); // Using regex for case-insensitive and partial match
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({ error: 'No matching records found' });
    }
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/articles', async (req, res) => {
  try {
    const allArticles = await articlesCollection.find({}).toArray(); // Get all articles without any filter
    res.json(allArticles);
  } catch (error) {
    console.error('Error fetching all articles:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// New POST endpoint to handle article submissions
app.post('/api/articles', async (req, res) => {
  try {
    const result = await articlesCollection.insertOne(req.body);
    if (result.insertedCount > 0) {
      res.json({ message: "Article successfully inserted!", id: result.insertedId });
    } else {
      res.status(400).json({ error: 'Failed to insert article. Data might be missing or in incorrect format.' });
    }
  } catch (error) {
    console.error('Error inserting article:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
