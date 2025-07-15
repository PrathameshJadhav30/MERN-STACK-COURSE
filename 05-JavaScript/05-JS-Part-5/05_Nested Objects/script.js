const user = {
    name: "John",
    address: {
        street: "MG Road",
        city: "Pune",
        pincode: 411001
    }
};

console.log(user.address.city);         // Access nested value
console.log(user["address"]["pincode"]); // Alternate way
