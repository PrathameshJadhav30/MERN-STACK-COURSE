let count = 0;

const intervalId = setInterval(() => {
    console.log("Count:", count);
    count++;

    if (count > 4) {
        clearInterval(intervalId); // Stop after 5 times
        console.log("Interval cleared.");
    }
}, 1000);
