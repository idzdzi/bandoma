const apiUrl = "YOUR_CHATGPT_API_ENDPOINT";  // Replace with your ChatGPT API endpoint

function appendMessage(role, message) {
  const chatBox = document.getElementById("chat-box");
  const chat = document.createElement("div");
  chat.className = "chat";
  const chatMessage = document.createElement("div");
  chatMessage.className = "chat-message";
  chatMessage.innerText = message;
  chat.appendChild(chatMessage);
  chatBox.appendChild(chat);

  if (role === "user") {
    document.getElementById("user-input").value = "";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return;

  appendMessage("user", userInput);

  try {
    const response = await axios.post(apiUrl, {
      message: userInput
    });

    const botMessage = response.data.choices[0].text.trim();
    appendMessage("bot", botMessage);
  } catch (error) {
    console.error("Error fetching ChatGPT response:", error);
  }
}