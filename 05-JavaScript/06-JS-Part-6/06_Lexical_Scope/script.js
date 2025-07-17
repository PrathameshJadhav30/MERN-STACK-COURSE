function outer() {
    let outerVar = "I am from outer";

    function inner() {
        console.log(outerVar); //  Has access to parent scope
    }

    inner();
}

outer();
