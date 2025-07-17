// Function returning another function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

let double = multiplier(2);
console.log(double(5)); // 10
