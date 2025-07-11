let str = "hello";
str[0] = 'H';  // won't work
console.log(str); // still 'hello'
console.log("Strings are immutable in JavaScript. You cannot change a character directly.");