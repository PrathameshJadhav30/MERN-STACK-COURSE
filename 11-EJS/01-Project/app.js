const express = require("express");
const app = express();
const path = require("path");

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Prathamesh", age: 21 });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Passing array data for loops
app.get("/instagram", (req, res) => {
  const posts = [
    { user: "alice", caption: "Beautiful sunset 🌅", likes: 120 },
    { user: "bob", caption: "Hiking trip 🏔️", likes: 95 },
    { user: "carol", caption: "Foodie vibes 🍕", likes: 200 },
  ];
  res.render("instagram", { posts });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
