// Global Scope
let globalVar = "I am global";

function checkScope() {
    // Local Scope
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
// console.log(localVar); //  Error: localVar is not defined
