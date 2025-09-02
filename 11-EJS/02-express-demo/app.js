const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse POST request body
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// GET Request Example
app.get("/", (req, res) => {
  res.render("index", { name: "Prathamesh" });
});

// GET Request with query params
app.get("/greet", (req, res) => {
  const { user = "Guest" } = req.query;
  res.send(`Hello, ${user}!`);
});

// GET Request with form
app.get("/form", (req, res) => {
  res.render("form");
});

// Handling POST Request
app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  res.send(`Form Submitted! Username: ${username}, Email: ${email}`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
