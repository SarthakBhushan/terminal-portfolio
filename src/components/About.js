import React from "react";

export default function About(){
      const linkStyle = { color: "white", textDecoration: "none" };
    return(
        <div>
            <span className='underline'>Hey, I'm Sarthak! </span>,
            <br/>
            <li>> Currently a student passionate to learn about new techonologies and build meaningful projects.</li>
            <li>> Use the <span>projects</span> command to check out what I've built!</li>
            <li>> Contact: <a href="mailto: sarthakbhushan7s@gmail.com" style={linkStyle}>sarthakbhushan7s@gmail.com</a></li>
            <br/>
        </div>
    );
}