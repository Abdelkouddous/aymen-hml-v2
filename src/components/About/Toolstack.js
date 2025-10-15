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
  const scrollContainerRef = useRef(null);

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

  // Auto-scroll the tools container vertically, with gentle bounce and pause on interaction
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let rafId;
    let direction = 1; // 1 => down, -1 => up
    let speed = 0.4; // pixels per frame; ~24px/sec at 60fps
    let paused = false;

    const step = () => {
      if (paused) {
        rafId = requestAnimationFrame(step);
        return;
      }
      el.scrollTop += speed * direction;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const atTop = el.scrollTop <= 0;
      if (atBottom) direction = -1;
      if (atTop) direction = 1;
      rafId = requestAnimationFrame(step);
    };

    // Pause on hover and during user scroll/touch
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    const pauseThenResume = () => {
      paused = true;
      // resume after short delay to allow manual navigation
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => (paused = false), 1500);
    };
    let resumeTimer = 0;

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("wheel", pauseThenResume, { passive: true });
    el.addEventListener("touchstart", pauseThenResume, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });

    rafId = requestAnimationFrame(step);

    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("wheel", pauseThenResume);
      el.removeEventListener("touchstart", pauseThenResume);
      el.removeEventListener("touchend", resume);
      window.clearTimeout(resumeTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="tool-stack-container">
      <div
        className="tools-scroll-container"
        aria-label="Tools I use"
        ref={scrollContainerRef}
      >
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
