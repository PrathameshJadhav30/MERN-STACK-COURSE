const jsonData = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonData);
console.log(obj.name); // John
console.log(JSON.stringify(obj)); // Back to JSON format
