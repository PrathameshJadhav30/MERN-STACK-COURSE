// var is function-scoped
var x = 10;

// let and const are block-scoped
let y = 20;
const z = 30;

// y = 25; // Valid
// z = 35; // Error
function testScope() {
    var x = 50; // Function-scoped
    let y = 60; // Block-scoped
    const z = 70; // Block-scoped

    console.log("Inside function: x =", x, ", y =", y, ", z =", z);
}
testScope();

