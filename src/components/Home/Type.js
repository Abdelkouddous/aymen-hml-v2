import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "Hamel Aymene Abdelkouddous",
        autoStart: true,
        delay: 1,
        loop: false,
        deleteSpeed: false,
        // cursor: "⎰",
      }}
    />
  );
}

export default Type;
