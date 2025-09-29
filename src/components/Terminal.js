import React, { useState } from "react";
import Header from "./Header";
import CommandPrompt from "./CommandPrompt";
import Output from "./Output";

export default function Terminal() {
  const linkStyle = { color: "white", textDecoration: "none" };
  const [outputLines, setOutputLines] = useState([]);


  const handleCommand = (command) => {
    setOutputLines(prev => [...prev, { type: "command", text: command }]);

    switch(command.toLowerCase()) {
      case "help":
        setOutputLines(prev => [
          ...prev,
          { type: "text", text: "Available commands:" },
          { type: "text", text: <> - about    : <span style={linkStyle}>Learn more about me</span></> },
          { type: "text", text: <> - projects : <span style={linkStyle}> View my projects</span></>},
          { type: "text", text: <> - skills   : <span style={linkStyle}>See my skills</span></> },
          { type: "text", text: <> - contact  : <span style={linkStyle}>Get my contact info</span></> },
          { type: "text", text: <> - clear    : <span style={linkStyle}>Clear the terminal</span></> },
          { type: "text", text: <> - help     : <span style={linkStyle}>Show this help menu</span></> }

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
    <div className="portfolio-container">
      <div style={{ background: "black", height: "100vh", padding: "10px", fontFamily: "monospace" }}>
        <Header />
        <div style={{ lineHeight: "1.6" }}>
          <Output outputLines={outputLines} />
          <CommandPrompt onCommand={handleCommand} />
        </div>
      </div>
    </div>
  
);

}
