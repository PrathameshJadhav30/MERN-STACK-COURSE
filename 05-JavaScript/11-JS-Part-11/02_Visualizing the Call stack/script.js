function a() {
    console.log("Inside A");
    b();
}

function b() {
    console.log("Inside B");
    c();
}

function c() {
    console.log("Inside C");
    throw new Error("Oops! Let's visualize stack.");
}

a();
