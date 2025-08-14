
const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, this is Node writing to a file!');

// Read from the file
const data = fs.readFileSync('example.txt', 'utf8');
console.log("File content:", data);
