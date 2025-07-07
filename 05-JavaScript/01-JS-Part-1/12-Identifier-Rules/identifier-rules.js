// Identifiers can contain letters, digits, underscores, and dollar signs
let $ = 10;
let _value = 20;
let value1 = 30;

// Identifiers cannot start with a digit
// let 1value = 40; // Invalid

// Case sensitivity
let Value = 50;
console.log(value1); // 30
console.log(Value);  // 50
// Reserved keywords cannot be used as identifiers
let functionName = "myFunction"; // Valid identifier
//let if = "condition"; // Invalid identifier, 'if' is a reserved keyword
