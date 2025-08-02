const getData = (flag) => {
    return new Promise((resolve, reject) => {
        if (flag) resolve("Data fetched!");
        else reject("Error occurred!");
    });
};

getData(true)
    .then(data => console.log("Success:", data))
    .catch(err => console.log("Error:", err));
