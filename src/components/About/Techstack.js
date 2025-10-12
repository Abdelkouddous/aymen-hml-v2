import React, { useEffect, useMemo, useState } from "react";
import "./techstack.css";
import { Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiPhp } from "react-icons/di";
import {
  SiFlutter,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";

const skills = [
  { icon: DiGit, label: "Git" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: DiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNestjs, label: "Nest.js" },
  { icon: DiPhp, label: "PHP" },
  { icon: FaLaravel, label: "Laravel" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: CgCPlusPlus, label: "C++" },
  { icon: SiFlutter, label: "Flutter" },
];

function Techstack() {
  const [angle, setAngle] = useState(0);
  // Continuous slow rotation speed (degrees per second)
  const ROTATION_SPEED_DEG_PER_SEC = 6;
  const step = useMemo(() => 360 / skills.length, []);

  useEffect(() => {
    let rafId = null;
    let lastTs = null;
    const tick = (ts) => {
      if (lastTs == null) {
        lastTs = ts;
        rafId = requestAnimationFrame(tick);
        return;
      }
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      setAngle((a) => a + ROTATION_SPEED_DEG_PER_SEC * dt);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Automatic rotation only; no mouse/touch handlers

  return (
    <Container fluid className="about-section" id="project-heading">
      <h1>
        Professional <strong className="orange">Skillset</strong>
      </h1>
      <div className="tech-3d-container">
        <div
          className="tech-3d-scene"
          role="region"
          aria-label="3D rotating tech stack carousel"
        >
          <div
            className="tech-3d-ring"
            style={{
              transform: `translate(-50%, -50%) translateZ(calc(-1 * var(--carousel-radius))) rotateY(${angle}deg)`,
            }}
          >
            {skills.map((Item, i) => {
              const Icon = Item.icon;
              const itemAngle = i * step;
              return (
                <div
                  key={`${Item.label}-${i}`}
                  className="tech-3d-item"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(var(--carousel-radius))`,
                  }}
                >
                  <div className="tech-item-card">
                    <div className="tech-item-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <div className="tech-item-label">{Item.label}</div>
                    {/* <div className="tech-item-value">{Item.value}%</div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Techstack;
