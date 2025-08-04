function faultyPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Something went wrong!"), 1000);
    });
}

async function callFaulty() {
    try {
        const result = await faultyPromise();
        console.log(result);
    } catch (err) {
        console.error("Caught Error:", err);
    }
}

callFaulty();
