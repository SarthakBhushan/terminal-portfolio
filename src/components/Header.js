import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header style={{ textAlign: "left", marginBottom: "20px" }}>
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
        {"> Welcome to my Portfolio! - Type help to see list of supported commands."}
      </div>

      <nav style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
        <a
          href="https://github.com/SarthakBhushan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00ffff" }}
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/sarthakbhushan/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00ffff" }}
        >
          <FaLinkedin size={28} />
        </a>
      </nav>
    </header>
  );
}
