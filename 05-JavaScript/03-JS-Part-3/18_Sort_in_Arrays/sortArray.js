let nums = [4, 2, 5, 1];
console.log(nums.sort()); // [1,2,4,5] (lexical sort)
console.log(nums.sort((a, b) => a - b)); // Numeric sort
console.log(nums.sort((a, b) => b - a)); // Descending sort