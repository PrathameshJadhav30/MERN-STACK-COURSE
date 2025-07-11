let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 100;
console.log(arr1); // [100,2,3] because arr1 and arr2 point to same reference
console.log(arr2); // [100,2,3] same reference as arr1  