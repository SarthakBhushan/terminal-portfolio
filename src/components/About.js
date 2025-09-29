import React from "react";

export default function About(){
    const linkStyle = { color: "white", textDecoration: "none" };
    const descStyle = {
        color: "#00ffff", // cyan
        fontSize: "14px",
        maxWidth: "80ch",
        wordWrap: "break-word",
        display: "block",
        marginBottom: "15px", // spacing between projects
        lineHeight: "1.5",
    };
    return(
        <div>
            <span className='underline'>Hey, I'm Sarthak! </span>,
            <br/>
            <li><span style={descStyle}>> Hi, I’m Sarthak Bhushan, a B.Tech student with a strong interest in software development and emerging technologies. 
                I enjoy exploring new tools, frameworks, and programming concepts to continuously expand my skills. 
                Currently, I’m learning full-stack development and diving deeper into data structures, algorithms, and backend frameworks.<br/>
                My goal is to build impactful projects that combine creativity with technical problem-solving, while steadily growing as a developer.</span></li>
            <li>> Use the <span style={linkStyle}>projects</span> command to check out what I've built!</li>
            <li>> Contact: <a href="mailto: sarthakbhushan7s@gmail.com" style={linkStyle}>sarthakbhushan7s@gmail.com</a></li>
            <br/>
        </div>
    );
}