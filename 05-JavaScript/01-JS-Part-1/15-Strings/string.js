let str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("Script"));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.charAt(0));
console.log(str.substring(0, 4));
console.log(str.slice(0, 4));
console.log(str.split("a"));
console.log(str.replace("Java", "Type"));
console.log(str.trim()); // Removes whitespace from both ends
console.log(str.startsWith("Java"));
console.log(str.endsWith("Script"));
console.log(str.concat(" is awesome!"));
console.log(str.repeat(2));
console.log(str.charCodeAt(0)); // ASCII value of first character
console.log(str.match(/Script/)); // Returns an array with matched substring
console.log(str.search("Script")); // Returns index of first occurrence
console.log(str.localeCompare("JavaScript")); // Compares two strings
console.log(str.padStart(15, "*")); // Pads the start with "*"
console.log(str.padEnd(15, "*")); // Pads the end with "*"
console.log(str.split("").reverse().join("")); // Reverses the string
console.log(str.replace(/Java/g, "Type")); // Replaces all occurrences of "Java" with "Type"
console.log(str.toString()); // Converts to string (redundant here, but useful for other types)
console.log(str.match(/a/g)); // Finds all occurrences of "a"
console.log(str.startsWith("Java", 0)); // Checks if it starts with "Java" at index 0
console.log(str.endsWith("Script", str.length)); // Checks if it ends with "Script" at the end of the string
console.log(str.split("")); // Splits into an array of characters
console.log(str.replace(/JavaScript/, "TypeScript")); // Replaces "JavaScript" with "TypeScript"
console.log(str.includes("Script", 4)); // Checks if "Script" is included starting from index 4