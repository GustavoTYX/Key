const keyElement = document.getElementById("generatedKey");

let key = generateRandomKey();

function generateRandomKey() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function updateKey() {
    key = generateRandomKey();
    keyElement.textContent = key;
    sendKeyToServer(key);
}

function sendKeyToServer(key) {
    // Send the key to the PHP server using AJAX or fetch
    fetch("save_key.php", {
        method: "POST",
        body: JSON.stringify({ key: key })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error sending key:", error));
}

// Atualize a chave ao carregar a página
updateKey();
