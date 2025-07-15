// Random number between 0 and 1
console.log("Random (0-1):", Math.random());

// Random integer between 1 and 10
const random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", random1to10);

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random (50-100):", getRandomInt(50, 100));
