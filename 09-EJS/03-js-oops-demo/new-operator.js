function Animal(type) {
  this.type = type;
  this.speak = function() {
    console.log(`This is a ${this.type}`);
  };
}

const dog = new Animal("Dog");
const cat = new Animal("Cat");

dog.speak(); // This is a Dog
cat.speak(); // This is a Cat
