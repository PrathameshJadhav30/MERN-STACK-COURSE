// Function that takes another function as an argument
function repeatTask(task, times) {
    for (let i = 0; i < times; i++) {
        task();
    }
}

repeatTask(() => console.log("Running task"), 3);
