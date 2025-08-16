
const express = require("express");
const app = express();

app.get("/text", (req, res) => {
  res.send("This is a plain text response");
});

app.get("/json", (req, res) => {
  res.json({ message: "This is a JSON response", success: true });
});

app.get("/status", (req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
