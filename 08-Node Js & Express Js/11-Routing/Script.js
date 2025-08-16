
const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Home Route!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
