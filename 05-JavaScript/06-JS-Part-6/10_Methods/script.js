const person = {
    name: "Prathamesh",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Prathamesh
