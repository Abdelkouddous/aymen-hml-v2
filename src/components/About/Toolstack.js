// Toolstack.js
import React, { useEffect, useRef } from "react";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiVercel,
  SiApple,
  SiPostman,
  SiAnaconda,
} from "react-icons/si";
import { DiDocker } from "react-icons/di";
import "./toolstack.css";

function Toolstack() {
  const tools = [
    { name: "macOS", icon: <SiApple /> },
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Anaconda", icon: <SiAnaconda /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Optional: stop observing after animation for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of card is visible
        rootMargin: "0px 0px -50px 0px", // Trigger a bit earlier
      }
    );

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Only run once

  return (
    <div className="tool-stack-container">
      <div className="tools-scroll-container" aria-label="Tools I use">
        {tools.map((tool, index) => (
          <div
            key={tool.name}
            ref={(el) => (cardRefs.current[index] = el)}
            className="tool-card"
            role="group"
            aria-label={tool.name}
          >
            <div className="tool-card-content">
              <div className="tool-icon" aria-hidden="true">
                {tool.icon}
              </div>
              <h3 className="tool-title">{tool.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolstack;
