let a;
console.log(a);        // undefined

let b = null;
console.log(b);        // null

console.log(typeof a); // undefined
console.log(typeof b); // object (quirk in JS)
console.log(a === b);  // false (undefined is not equal to null)
console.log(a == b);   // true (loose equality, both are falsy)
console.log(a == undefined); // true
console.log(b == null); // true
console.log(a === undefined); // true
console.log(b === null); // true
console.log(a == null); // true (both undefined and null are falsy)
console.log(b == undefined); // true (null is loosely equal to undefined)
console.log(a === null); // false (undefined is not strictly equal to null)
console.log(b === undefined); // false (null is not strictly equal to undefined)
console.log(a == 0); // false (undefined is not equal to 0)
console.log(b == 0); // false (null is not equal to 0)
console.log(a == ""); // false (undefined is not equal to an empty string)
console.log(b == ""); // false (null is not equal to an empty string)
console.log(a == false); // false (undefined is not equal to false)
console.log(b == false); // false (null is not equal to false)
console.log(a == true); // false (undefined is not equal to true)
console.log(b == true); // false (null is not equal to true)
console.log(a == NaN); // false (undefined is not equal to NaN)
console.log(b == NaN); // false (null is not equal to NaN)
console.log(a == 5); // false (undefined is not equal to 5)
console.log(b == 5); // false (null is not equal to 5)
console.log(a == "5"); // false (undefined is not equal to "5")
console.log(b == "5"); // false (null is not equal to "5")
console.log(a == null); // true (undefined is loosely equal to null)
console.log(b == undefined); // true (null is loosely equal to undefined)
console.log(a == undefined); // true (undefined is loosely equal to itself)
console.log(b == null); // true (null is loosely equal to itself)
console.log(a === null); // false (undefined is not strictly equal to null)