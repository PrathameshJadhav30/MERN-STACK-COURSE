
const express = require("express");
const app = express();

// Handle GET request
app.get("/hello", (req, res) => {
  res.send("This is a GET request!");
});

// Handle POST request
app.post("/hello", (req, res) => {
  res.send("This is a POST request!");
});

// Handle PUT request
app.put("/hello", (req, res) => {
  res.send("This is a PUT request!");
});

// Handle DELETE request
app.delete("/hello", (req, res) => {
  res.send("This is a DELETE request!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
