import React from "react";
import Typewriter from "typewriter-effect";

function TypeProfession() {
  // this is Actually not a TypeName but a type
  return (
    <div className="flex m-6 align-items-center justify-center">
      <Typewriter
        options={{
          strings: [
            " Systems Engineer  ",
            " Full Stack Engineer ",
            "AI Engineer",
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
          cursor: "⎰",
        }}
      />
    </div>
  );
}

export default TypeProfession;
