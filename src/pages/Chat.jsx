import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import InputBar from "../components/InputBar";


function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = { text, sender: "user" };

    setMessages((prev) => [...prev, newMessage]);

    // Simulación de respuesta automática
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Respuesta automática 🤖", sender: "bot" },
      ]);
    }, 1000);
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
