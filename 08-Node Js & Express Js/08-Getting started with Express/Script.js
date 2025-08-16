
const express = require("express");
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express Getting Started Example!");
});

app.listen(3000, () => {
  console.log("Express app running on http://localhost:3000");
});
