function wait(msg, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(msg), delay);
    });
}

wait("First", 1000)
    .then(result => {
        console.log(result);
        return wait("Second", 1000);
    })
    .then(result => {
        console.log(result);
        return wait("Third", 1000);
    })
    .then(result => console.log(result));
