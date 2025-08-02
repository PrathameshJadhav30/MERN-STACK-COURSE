function asyncTask(msg, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, delay);
    });
}

asyncTask("Step 1", 1000)
    .then((res) => {
        console.log(res);
        return asyncTask("Step 2", 1000);
    })
    .then((res) => {
        console.log(res);
        return asyncTask("Step 3", 1000);
    })
    .then((res) => console.log(res));
