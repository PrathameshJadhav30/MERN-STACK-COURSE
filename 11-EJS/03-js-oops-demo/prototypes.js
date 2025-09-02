// Object with prototype
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.greet(); // Hello, my name is Alice
p2.greet(); // Hello, my name is Bob
