import React from "react";
import Typewriter from "typewriter-effect";

function TypeName() {
  return (
    <Typewriter
      options={{
        strings: [" 1️⃣ Software Engineer ✅ ", "2️⃣ Graphics Desginer ✅"],
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
