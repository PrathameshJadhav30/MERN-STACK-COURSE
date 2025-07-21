
const nums = [1, 2, 3, 4, 5];

const squares = nums.map(n => n * n);
const evens = nums.filter(n => n % 2 === 0);

console.log("Squares:", squares);
console.log("Evens:", evens);
