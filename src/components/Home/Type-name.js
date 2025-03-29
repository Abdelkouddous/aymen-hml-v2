import React from "react";
import Typewriter from "typewriter-effect";

function TypeName() {
  return (
    <div className="flex m-6 align-items-center justify-center">
      <Typewriter
        options={{
          strings: [
            " Software Engineer  ",
            " Full Stack Developer ",
            // " Graphics Desginer ",
            // "Database Administrator",
            // 'Cyber Security Analyst',
            // "Data Analyst",
            // "Big Data Engineer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 80,
          delay: 100,
          stopAfter: 5,
          // cursor: "⎰",
        }}
      />
    </div>
  );
}

export default TypeName;
