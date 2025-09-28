import React, { useState, useEffect, useRef } from "react";

export default function CommandPrompt({ onCommand }) {
  const [input, setInput] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = useRef(null);

  // Blink cursor every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Focus hidden input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Keep focus if user clicks anywhere on terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onCommand(input);
      setInput("");
    }
  };

  return (
    <div 
      style={{ display: "flex", cursor: "text" }}
      onClick={focusInput}   // 👈 click anywhere to re-focus
    >
      <span>&gt;&nbsp;</span>

      {/* Hidden real input */}
      <input
        ref={inputRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none"
        }}
      />

      {/* Fake terminal text + blinking cursor */}
      <span style={{ fontFamily: "monospace", color: "#00ffff" }}>
        {input}
        <span
          style={{
            backgroundColor: "#00ffff",
            color: "black",
            display: cursorVisible ? "inline-block" : "none",
            width: "10px",
            marginLeft: "2px"
          }}
        >
          &nbsp;
        </span>
      </span>
    </div>
  );
}
