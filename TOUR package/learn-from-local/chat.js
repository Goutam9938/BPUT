// Get references to DOM elements
const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

// Function to append a new message to the chat window
function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerText = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to generate a response based on the user's message
function generateResponse(userMessage) {
    // Predefined responses based on keywords or phrases
    if (userMessage.includes('hello')) {
        return "Hi! How can I help you today?";
    } else if (userMessage.includes('bye')) {
        return "Goodbye! Have a nice day!";
    } else if (userMessage.includes('help')) {
        return "How can I assist you? Please provide more details.";
    } else if (userMessage.includes('what are you doing')) {
        return "I'm fine what abou you.";
    } else {
        return "I'm sorry, I didn't quite understand that. Could you please clarify?";
    }
}

// Function to send a message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        appendMessage(message, 'sent'); // Append sent message to chat
        messageInput.value = ''; // Clear the input field
        
        // Simulate receiving a response after a delay
        setTimeout(() => {
            const response = generateResponse(message);
            appendMessage(response, 'received'); // Append the generated response
        }, 1000); // Simulated response delay
    }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Optional: Allow pressing Enter to send the message
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});