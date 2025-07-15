const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Tablet", price: 15000 }
];

products.forEach(product => {
    console.log(`Name: ${product.name}, Price: ₹${product.price}`);
});
