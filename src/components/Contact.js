import React from "react";

export default function Contact() {
  const linkStyle = { color: "white", textDecoration: "none" }; // white color, no underline

  return (
    <div>
      Email: <a href="mailto:sarthak@example.com" style={linkStyle}>sarthak@example.com</a>
      <br />
      GitHub: <a href="https://github.com/sarthak" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        github.com/sarthak
      </a>
      <br />
      LinkedIn: <a href="https://linkedin.com/in/sarthak" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        linkedin.com/in/sarthak
      </a>
    </div>
  );
}
