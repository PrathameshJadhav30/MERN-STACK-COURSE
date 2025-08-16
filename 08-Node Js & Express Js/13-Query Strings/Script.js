
const express = require("express");
const app = express();

// Query string example
// URL: http://localhost:3000/search?keyword=node&limit=5
app.get("/search", (req, res) => {
  const { keyword, limit } = req.query;
  res.json({
    keyword: keyword || "not provided",
    limit: limit || "not provided",
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
