const adminChatBox = document.getElementById("admin-chat-box");
const adminLangSelect = document.getElementById("admin-lang");

// Populate language dropdown
Object.keys(countries).forEach((code) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = countries[code];
  adminLangSelect.appendChild(option);
});

// Translate message using a translation API (simulated here)
function translateMessage(message, userLang, adminLang) {
  const apiUrl = `https://api.mymemory.translated.net/get?q=${message}&langpair=${userLang}|${adminLang}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const translatedMessage = data.responseData.translatedText;

      // Display the translated message in admin's chat box
      const adminMessageElement = document.createElement("div");
      adminMessageElement.className = "message admin-message";
      adminMessageElement.textContent = translatedMessage;
      adminChatBox.appendChild(adminMessageElement);
      adminChatBox.scrollTop = adminChatBox.scrollHeight; // Auto-scroll to the bottom
    })
    .catch((err) => {
      console.error("Translation failed:", err);
    });
}

// Retrieve messages from localStorage
function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const adminLang = adminLangSelect.value;

  messages.forEach(({ message, lang }) => {
    // Only process new messages that have not been translated yet
    if (!document.querySelector(`#msg-${message}`)) {
      translateMessage(message, lang, adminLang);
    }
  });
}

// Simulate receiving new messages every 3 seconds
setInterval(loadMessages, 3000);

// Listen for language change to update the messages instantly
adminLangSelect.addEventListener("change", () => {
  adminChatBox.innerHTML = ''; // Clear current chat to refresh with new translations
  loadMessages(); // Load and translate messages with the new language
});

// Initialize and load the first batch of messages
loadMessages();
