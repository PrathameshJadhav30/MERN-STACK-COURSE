function delayedMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Message after 2 seconds"), 2000);
    });
}

async function showMessage() {
    const msg = await delayedMessage();
    console.log(msg);
}

showMessage();
