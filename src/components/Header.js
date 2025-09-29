import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const linkStyle = { color: "white", textDecoration: "none" };
  const [fontSize, setFontSize] = useState(16);

  // Adjust font size based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setFontSize(8);
      else if (width < 768) setFontSize(12);
      else if (width < 1024) setFontSize(14);
      else setFontSize(16);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial call
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={{ position: "relative", textAlign: "left", marginBottom: "20px" }}>
      <pre
        style={{
          fontFamily: "monospace",
          color: "#00ffff",
          fontSize: `${fontSize}px`,
          width: "100%",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          textAlign: "left"
        }}
      >
        {String.raw`
  █████████                       █████    █████                █████     
 ███▒▒▒▒▒███                     ▒▒███    ▒▒███                ▒▒███      
▒███    ▒▒▒   ██████   ████████  ███████   ▒███████    ██████   ▒███ █████
▒▒█████████  ▒▒▒▒▒███ ▒▒███▒▒███▒▒▒███▒    ▒███▒▒███  ▒▒▒▒▒███  ▒███▒▒███ 
 ▒▒▒▒▒▒▒▒███  ███████  ▒███ ▒▒▒   ▒███     ▒███ ▒███   ███████  ▒██████▒  
 ███    ▒███ ███▒▒███  ▒███       ▒███ ███ ▒███ ▒███  ███▒▒███  ▒███▒▒███ 
▒▒█████████ ▒▒████████ █████      ▒▒█████  ████ █████▒▒████████ ████ █████
 ▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒ ▒▒▒▒▒        ▒▒▒▒▒  ▒▒▒▒ ▒▒▒▒▒  ▒▒▒▒▒▒▒▒ ▒▒▒▒ ▒▒▒▒▒ 
                                                                          
                                                                          
                                                                          
        `}
      </pre>

      <div style={{ fontFamily: "monospace", color: "#00ffff", margin: "10px 0" }}>
        &gt; Welcome to my Portfolio! - Type{" "}
        <span style={linkStyle}>help</span> to see list of supported commands.
      </div>

      <div className="social-icons" style={{ marginTop: "10px" }}>
        <a href="https://github.com/SarthakBhushan" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/sarthakbhushan/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={28} />
        </a>
        <a href="https://www.instagram.com/sarthak_bhushan/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram size={28} />
        </a>
      </div>
    </header>
  );
}
