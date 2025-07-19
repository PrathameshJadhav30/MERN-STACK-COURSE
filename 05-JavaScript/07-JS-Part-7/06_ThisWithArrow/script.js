const person = {
    name: "Prathamesh",
    normalFunc: function () {
        console.log("Normal Function:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow Function:", this.name);
    },
};

person.normalFunc();  // Works: prints Prathamesh
person.arrowFunc();   // Undefined: arrow functions don't have their own 'this'
