function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.log("Error occurred:", error.message);
    } finally {
        console.log("Division attempt finished.");
    }
}

divide(10, 2);
divide(5, 0);
