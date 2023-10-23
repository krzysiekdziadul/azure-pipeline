function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

console.log(`Time: ${getCurrentTime()}`);
