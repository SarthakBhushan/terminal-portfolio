import React from "react";

export default function Projects() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    maxWidth: "50ch",
    wordWrap: "break-word",
    display: "block",
    marginBottom: "0px",
    lineHeight: "1.5",
  };

  const descStyle = {
    color: "#00ffff", // cyan
    fontSize: "14px",
    maxWidth: "50ch",
    wordWrap: "break-word",
    display: "block",
    marginBottom: "15px", // spacing between projects
    lineHeight: "1.5",
  };

  return (
    <div>
      <a
        href="https://github.com/SarthakBhushan/terminal-portfolio"
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        1. Terminal Portfolio (React)<br/>
      </a>
        <span style={descStyle}>
          A retro terminal-style portfolio built with React, featuring ASCII art
          and interactive commands.
        </span>
        

      <a
        href="https://github.com/SarthakBhushan/PacMan"
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        2. Pac-Man Clone (Java)<br/>
      </a>
        <span style={descStyle}>
          A classic Pac-Man clone in Java with all standard ghosts and playable as an executable
        </span>

      <a
        href="https://github.com/SarthakBhushan/Space-Station-Inventory-Management"
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        3. Space Station Inventory Management (Java/Spring Boot)<br/>
      </a>
        <span style={descStyle}>
          A Java/Spring Boot system to manage and optimize stock, track items, and handle space station inventory efficiently.
        </span>
    </div>
  );
}
