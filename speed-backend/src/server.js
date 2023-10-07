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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});