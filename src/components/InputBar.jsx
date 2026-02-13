import { useState } from "react";

function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  };

  return (
    <div style={{ padding: "15px", background: "#40414f" }}>
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={handleSubmit} style={{ padding: "10px" }}>
        Enviar
      </button>
    </div>
  );
}

export default InputBar;
