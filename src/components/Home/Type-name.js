import React from "react";
import Typewriter from "typewriter-effect";

function TypeName() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hamel Aymen Abdelkouddous",
          "a Software Engineer ",
          "a Graphics Desginer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default TypeName;
