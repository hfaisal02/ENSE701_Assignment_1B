const express = require('express');
const app = express();
const port = 5000; // Choose a port for your server
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const uri = "mongodb+srv://grp5405:grp5405@speedapp.x1oolm2.mongodb.net/?retryWrites=true&w=majority"; // Update with your MongoDB URL, username, and password

app.use(express.json()); // Middleware to parse JSON requests

// Create a MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// Define your routes and APIs here
// Existing search endpoint
app.get('/api/search', async (req, res) => {
  const searchTerm = req.query.searchTerm;
  try {
<<<<<<< HEAD
    const results = await articlesCollection.find({ title: new RegExp(searchTerm, 'i') }).toArray(); // Using regex for case-insensitive and partial match
=======
    // Customize your MongoDB query based on your data structure
    const results = await yourMongoDBCollection.find({ name: searchTerm }).toArray();

>>>>>>> d2bac6ba96ac39bf98ac5e8ee64806917f66e17b
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
<<<<<<< HEAD


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
  res.json({ message: "Hardcoded success!" });
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

=======
>>>>>>> d2bac6ba96ac39bf98ac5e8ee64806917f66e17b
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});