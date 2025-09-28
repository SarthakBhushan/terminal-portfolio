import React, { useEffect, useRef } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Output({ outputLines }) {
  const endRef = useRef(null);

  // Scroll to bottom instantly whenever outputLines change
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "auto" }); // instant scroll
  }, [outputLines]);

  const renderComponent = (name) => {
    switch (name) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div style={{ overflowY: "auto", maxHeight: "80vh" }}>
      {outputLines.map((line, index) => {
        if (line.type === "command") return <div key={index}>&gt; {line.text}</div>;
        if (line.type === "text") return <div key={index}>{line.text}</div>;
        if (line.type === "component") return <div key={index}>{renderComponent(line.component)}</div>;
        return null;
      })}
      <div ref={endRef} /> {/* Dummy div to scroll into view */}
    </div>
  );
}
