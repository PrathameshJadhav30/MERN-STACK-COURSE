const fetchData = (input) => {
    return new Promise((resolve, reject) => {
        if (input > 0) resolve("Data loaded");
        else reject("Invalid input");
    });
};

fetchData(1)
    .then(res => {
        console.log("Result:", res);
        return fetchData(-1); // Force error
    })
    .catch(err => console.error("Caught Error:", err));
