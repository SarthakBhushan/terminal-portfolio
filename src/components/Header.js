import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const linkStyle = { color: "white", textDecoration: "none" };
  return (
    <header style={{ position:"relative",textAlign: "left", marginBottom: "20px" }}>
      <pre style={{ fontFamily: "monospace", color: "#00ffff", fontSize: "14px" }}>
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
        > Welcome to my Portfolio! - Type{" "} <span style={linkStyle}> help </span> to see list of supported commands."
      </div>
      <div className="social-icons">    
        <a
          href="https://github.com/SarthakBhushan"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/sarthakbhushan/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin size={28} />
        </a> 
        <a href="https://www.instagram.com/sarthak_bhushan/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaInstagram size={28}/>
        </a>
        </div>
    </header>
  );
}
