const promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation Successful!");
    } else {
        reject("Operation Failed!");
    }
});

console.log(promise);
