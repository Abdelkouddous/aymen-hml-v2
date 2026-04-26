import React from "react";
import "./techstack.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiPhp, DiPython } from "react-icons/di";
import {
  SiFlutter,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiScikitlearn,
  SiPytorch,
} from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";

import "react-slideshow-image/dist/styles.css";

const skills = [
  { icon: DiGit,         label: "Git" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiNodejs,      label: "Node.js" },
  { icon: DiReact,       label: "React" },
  { icon: SiNextdotjs,   label: "Next.js" },
  { icon: SiNestjs,      label: "Nest.js" },
  { icon: DiPhp,         label: "PHP" },
  { icon: FaLaravel,     label: "Laravel" },
  { icon: SiMysql,       label: "MySQL" },
  { icon: SiMongodb,     label: "MongoDB" },
  { icon: SiPostgresql,  label: "PostgreSQL" },
  { icon: SiCss3,        label: "CSS" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: CgCPlusPlus,   label: "C++" },
  { icon: SiFlutter,     label: "Flutter" },
  { icon: DiPython,      label: "Python" },
  { icon: SiScikitlearn, label: "Scikit-learn" },
  { icon: SiPytorch,     label: "PyTorch" },
];

function Techstack() {
  return (
    <Container fluid className="about-section" id="project-heading">
      <h1>
        Professional <strong className="orange">Skillset</strong>
      </h1>

      <div className="tech-slider-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...skills, ...skills].map((Item, index) => {
              const Icon = Item.icon;
              return (
                <motion.div
                  key={index}
                  className="tech-item-card"
                  whileHover={{
                    scale: 1.12,
                    y: -6,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.28), 0 0 18px rgba(255,211,123,0.22)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  <div className="tech-item-icon">
                    <Icon />
                  </div>
                  <div className="tech-item-label">{Item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Techstack;
