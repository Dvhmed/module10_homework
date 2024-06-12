document.addEventListener('DOMContentLoaded', () => {
    const ws = new WebSocket('wss://echo-ws-service.herokuapp.com');
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const geoButton = document.getElementById('geo-button');

    ws.onmessage = (event) => {
        const message = event.data;
        if (!message.startsWith('geo:')) {
            displayMessage(`Server: ${message}`, 'server-message');
        }
    };

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            displayMessage(`You: ${message}`, 'user-message');
            ws.send(message);
            messageInput.value = '';
        }
    });

    geoButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                const geoMessage = `geo:${latitude},${longitude}`;
                displayMessage(`<a href="https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}" target="_blank">Геолокация</a>`, 'geo-message');
                ws.send(geoMessage);
            });
        } else {
            alert('Геолокация не поддерживается вашим браузером.');
        }
    });

    function displayMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.className = className;
        messageElement.innerHTML = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
