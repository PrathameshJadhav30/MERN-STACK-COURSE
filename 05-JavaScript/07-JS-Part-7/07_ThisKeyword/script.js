// 1. Global scope (non-strict mode)
console.log("Global this:", this); // In browser, this is the `window` object

// 2. Inside a regular function
function showThis() {
    console.log("Regular Function this:", this); // In browser: window (non-strict)
}
showThis();

// 3. Inside an object method
const user = {
    name: "Prathamesh",
    showName: function () {
        console.log("Object Method this:", this.name); // Refers to `user` object
    },
};
user.showName();

// 4. Using 'this' in constructor
function Person(name) {
    this.name = name;
}
const p1 = new Person("Jadhav");
console.log("Constructor this:", p1.name); // Jadhav

// 5. 'this' with arrow function inside object
const obj = {
    name: "ArrowUser",
    arrow: () => {
        console.log("Arrow Function this:", this); // Arrow uses outer `this` (global/window)
    },
    regular: function () {
        console.log("Regular Function this:", this); // Refers to obj
    }
};
obj.arrow();
obj.regular();

// 6. 'this' inside setTimeout
const timerObj = {
    count: 0,
    start: function () {
        setTimeout(function () {
            console.log("Timeout Regular Function this.count:", this.count); // undefined or window.count
        }, 1000);

        setTimeout(() => {
            console.log("Timeout Arrow Function this.count:", this.count); // 0, as arrow captures `this` from surrounding
        }, 1500);
    }
};
timerObj.start();
