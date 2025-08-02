function first() {
    console.log("First function called");
    second();
}

function second() {
    console.log("Second function called");
    third();
}

function third() {
    console.log("Third function called");
}

first();
