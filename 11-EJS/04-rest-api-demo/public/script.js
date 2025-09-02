const bookForm = document.getElementById("bookForm");
const booksList = document.getElementById("booksList");

// Fetch all books
async function fetchBooks() {
  const res = await fetch("/api/books");
  const data = await res.json();
  renderBooks(data);
}

// Render books in UI
function renderBooks(books) {
  booksList.innerHTML = "";
  books.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${book.title}</strong> by ${book.author}
      <button onclick="deleteBook('${book.id}')">❌</button>
      <button onclick="editBook('${book.id}')">✏️</button>
    `;
    booksList.appendChild(li);
  });
}

// Add new book
bookForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  await fetch("/api/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author })
  });

  bookForm.reset();
  fetchBooks();
});

// Delete book
async function deleteBook(id) {
  await fetch(`/api/books/${id}`, { method: "DELETE" });
  fetchBooks();
}

// Edit book (simple prompt-based demo)
async function editBook(id) {
  const newTitle = prompt("Enter new title:");
  const newAuthor = prompt("Enter new author:");

  await fetch(`/api/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, author: newAuthor })
  });

  fetchBooks();
}

// Load on page start
fetchBooks();
