import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "Hamel Aymen",
        autoStart: true,
        delay: 0.7,
        loop: false,
        deleteSpeed: false,
        // cursor: "⎰",
      }}
    />
  );
}

export default Type;
