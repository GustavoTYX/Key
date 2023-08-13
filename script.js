const keyElement = document.getElementById("generatedKey");
const resetButton = document.getElementById("resetButton");
const timerElement = document.getElementById("timer");

let key = generateRandomKey();
let timeLeft = 24 * 60 * 60; // 24 hours in seconds

function generateRandomKey() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

resetButton.addEventListener("click", () => {
    key = generateRandomKey();
    keyElement.textContent = key;
    sendKeyToOtherSite(key);
});

function update() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
    } else {
        key = generateRandomKey();
        updateTimer();
        timeLeft = 24 * 60 * 60;
    }
}

function sendKeyToOtherSite(key) {
    // Fazer uma requisição para enviar a chave para o site vazio
    // Aqui você usaria uma abordagem como XMLHttpRequest, fetch ou outras bibliotecas de requisição
    // No exemplo abaixo, usaremos o método fetch

    const url = "URL_DO_SEU_SITE_VAZIO/key_receiver.php";
    fetch(url, {
        method: "POST",
        body: JSON.stringify({ key: key }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Key sent to the other site:", data);
    })
    .catch(error => {
        console.error("Error sending key:", error);
    });
}

setInterval(update, 1000);
