import React from "react";
import Typewriter from "typewriter-effect";

function TypeName() {
  return (
    <Typewriter
      options={{
        strings: [
          " Software Developer  ",
          " Graphics Desginer ",
          "Database Administrator",
          // 'Cyber Security Analyst',
          "Data Analyst",

          // "Big Data Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
        delay: 100,
        // cursor: "⎰",
      }}
    />
  );
}

export default TypeName;
