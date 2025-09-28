import React, { useState } from "react";
import Header from "./Header";
import CommandPrompt from "./CommandPrompt";
import Output from "./Output";

export default function Terminal() {
  const [outputLines, setOutputLines] = useState([]);

  const handleCommand = (command) => {
    setOutputLines(prev => [...prev, { type: "command", text: command }]);

    switch(command.toLowerCase()) {
      case "help":
        setOutputLines(prev => [
          ...prev,
          { type: "text", text: "Available commands:" },
          { type: "text", text: " - about    : Learn more about me" },
          { type: "text", text: " - projects : View my projects" },
          { type: "text", text: " - skills   : See my skills" },
          { type: "text", text: " - contact  : Get my contact info" },
          { type: "text", text: " - clear    : Clear the terminal" },
          { type: "text", text: " - help     : Show this help menu" }
        ]);
        break;

      case "clear":
        // reset terminal output (but keep the header visible)
        setOutputLines([]);
        break;

      case "about":
        setOutputLines(prev => [...prev, { type: "component", component: "About" }]);
        break;

      case "projects":
        setOutputLines(prev => [...prev, { type: "component", component: "Projects" }]);
        break;

      case "skills":
        setOutputLines(prev => [...prev, { type: "component", component: "Skills" }]);
        break;

      case "contact":
        setOutputLines(prev => [...prev, { type: "component", component: "Contact" }]);
        break;

      default:
        setOutputLines(prev => [...prev, { type: "text", text: `Command not found: ${command}` }]);
    }
  };

  return (
    <div style={{ background: "black", height: "100vh", padding: "10px", fontFamily: "monospace" }}>
      <Header />
      <Output outputLines={outputLines} />
      <CommandPrompt onCommand={handleCommand} />
    </div>
  );
}
