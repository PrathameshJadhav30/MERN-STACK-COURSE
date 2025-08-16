
const express = require("express");
const app = express();

// Path parameter example
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product category: ${category}, Product ID: ${id}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
