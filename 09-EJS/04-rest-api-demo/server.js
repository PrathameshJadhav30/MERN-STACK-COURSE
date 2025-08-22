import express from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Helpers to serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve frontend

let books = [];

// -------------------------------
// API ROUTES
// -------------------------------

// Root (frontend will serve index.html automatically)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// INDEX
app.get("/api/books", (req, res) => {
  res.json(books);
});

// CREATE
app.post("/api/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title & Author required" });
  }
  const newBook = { id: uuidv4(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// SHOW
app.get("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// UPDATE
app.put("/api/books/:id", (req, res) => {
  const { title, author } = req.body;
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// DESTROY
app.delete("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  books = books.filter(b => b.id !== req.params.id);
  res.json({ message: "Book deleted" });
});

// REDIRECT
app.get("/home", (req, res) => {
  res.redirect("/");
});

// -------------------------------
// Start server
// -------------------------------
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
