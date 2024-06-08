const socket = io();

const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

socket.on('message', message => {
    appendMessage(message);
});

socket.on('userCount', userCount => {
    appendMessage(`Total users in the chat: ${userCount}`);
});
