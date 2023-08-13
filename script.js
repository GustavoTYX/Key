const keyElement = document.getElementById("generatedKey");
const timerElement = document.getElementById("timer");

let key = "";
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

function updateKeyAndTimer() {
    key = generateRandomKey();
    keyElement.textContent = key;
    timeLeft = 24 * 60 * 60;
    updateTimer();
}

function checkIPAndGenerateKey() {
    // Aqui você pode adicionar a lógica para verificar o IP se necessário
    // No exemplo abaixo, estamos apenas gerando uma nova chave a cada 24 horas
    updateKeyAndTimer();
}

updateKeyAndTimer(); // Gere uma chave e configure o timer ao carregar a página

setInterval(checkIPAndGenerateKey, 1000); // Verifique o IP e gere nova chave a cada segundo
