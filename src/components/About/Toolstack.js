import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPostman,
  SiAnaconda,
  SiApple,
} from "react-icons/si";

import { DiDocker } from "react-icons/di";

function Toolstack() {
  // return (
  //   <Row
  //     style={{ justifyContent: "center", paddingBottom: "50px" }}
  //     className="text-white "
  //   >
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiMacos />
  //       {/* <span className="tech-text">Since 2022</span> */}
  //     </Col>

  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiVisualstudiocode />
  //       {/* <p className="tech-text">Since 2020</p> */}
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiAndroidstudio />
  //       {/* <span className="tech-text">Since 2018</span> */}
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiAnaconda></SiAnaconda>
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiSlack />
  //       {/* <span className="tech-text">Since 2024</span> */}
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiVercel />
  //       {/* <span className="tech-text">Since 2024</span> */}
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <DiDocker />
  //       {/* <span className="tech-text">Since 2023</span> */}
  //     </Col>
  //     <Col xs={4} md={2} className="tech-icons">
  //       <SiPostman />
  //       {/* <span className="tech-text">Since 2023</span> */}
  //     </Col>
  //     {/* added to my techstack later on ... */}
  //     {/* <SiVercel></SiVercel>
  //      */}
  //   </Row>
  // );
  const tools = [
    { name: "macOS", icon: <SiApple /> },
    { name: "Visual Studio Code", icon: <SiVisualstudiocode /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Anaconda", icon: <SiAnaconda /> },
    { name: "Slack", icon: <SiSlack /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Postman", icon: <SiPostman /> },
  ];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = itemRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible card as active
        let bestIdx = activeIndex;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIdx = idx;
          }
        });
        if (bestIdx !== activeIndex) {
          setActiveIndex(bestIdx);
        }
      },
      {
        root: containerRef.current,
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <div
      className="tools-scroll-container"
      ref={containerRef}
      aria-label="Tools I use"
    >
      {tools.map((t, idx) => (
        <div
          key={t.name}
          data-index={idx}
          ref={(el) => (itemRefs.current[idx] = el)}
          className={`tool-card ${activeIndex === idx ? "in-view" : ""}`}
          role="group"
          aria-roledescription="tool-card"
          aria-label={`${t.name}`}
        >
          <div className="tool-card-content">
            <div className="tool-icon" aria-hidden="true">
              {t.icon}
            </div>
            <h3 className="tool-title">{t.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
