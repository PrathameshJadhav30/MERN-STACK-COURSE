let str = "Hello";

console.log(str[0]);         // H
console.log(str.charAt(1));  // e

// Strings are immutable
// str[0] = "M"; // This will not change the string
console.log(str);           // Hello
console.log(str.length);    // 5
console.log(str[str.length - 1]); // o (last character)
// Accessing characters using negative indices (not standard in JavaScript)
console.log(str[-1]); // undefined (JavaScript does not support negative indices)
// Using a loop to access each character
for (let i = 0; i < str.length; i++) {
    console.log(`Character at index ${i}: ${str[i]}`);
}
// Using for...of loop to iterate over characters
for (const char of str) {
    console.log(`Character: ${char}`);
}
// Using forEach with Array.from
Array.from(str).forEach((char, index) => {
    console.log(`Character at index ${index}: ${char}`);
});
