const person = {
    name: "Alice",
    age: "25"
};

// String to number
const ageNum = Number(person.age);
console.log(typeof ageNum, ageNum); // number 25

// Number to string
const ageStr = String(ageNum);
console.log(typeof ageStr, ageStr); // string "25"
