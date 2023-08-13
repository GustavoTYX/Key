const generatedKeyElement = document.getElementById('generated-key');

function generateRandomKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }
    return key;
}

function updateGeneratedKey() {
    const generatedKey = generateRandomKey();
    generatedKeyElement.textContent = generatedKey;

    const keyData = {
        key: generatedKey,
        expiration: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
        ip: userip
    };

    // You should use a more secure way to store this data, like sending it to a server.
    // For this example, we'll just log the data to the console.
    console.log('Key Data:', keyData);
}

updateGeneratedKey();
setInterval(updateGeneratedKey, 24 * 60 * 60 * 1000); // Update every 24 hours
