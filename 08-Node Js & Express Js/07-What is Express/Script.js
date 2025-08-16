// Import express
const express = require("express");

// Create app object
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
