
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import InputBar from "../components/InputBar";

function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // 1️⃣ Agregamos mensaje del usuario
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch(
        "https://chatbot-ia-backend-o5bu.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: text, // ⚠️ confirmar en /docs si se llama "message"
          }),
        }
      );

      const data = await response.json();

      // 2️⃣ Agregamos respuesta del bot
      const botMessage = {
        sender: "bot",
        text: data.response, // ⚠️ confirmar cómo viene la respuesta
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chat-container">
      <Sidebar />
      <div className="chat-main">
        <ChatWindow messages={messages} />
        <InputBar onSend={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;