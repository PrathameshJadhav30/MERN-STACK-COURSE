async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.error("Failed to fetch:", error);
    }
}

getUserData();
