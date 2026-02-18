import React from "react";
import "./techstack.css";
import { Container } from "react-bootstrap";
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
  {icon : DiPython  , label : "Python"},
  {icon : SiScikitlearn  , label : "Scikit-learn"},
  {icon : SiPytorch  , label : "PyTorch"},
];

function Techstack() {
  /*
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
  */

  /*
  const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  */

  return (
    <Container fluid className="about-section" id="project-heading">
      <h1>
        Professional <strong className="orange">Skillset</strong>
      </h1>
      
      {/* 
      <div className="tech-3d-container">
       ... (old 3d code)
      </div>
      */}

      <div className="tech-slider-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* Duplicate the skills list to create seamless infinite scrolling */}
            {[...skills, ...skills].map((Item, index) => {
               const Icon = Item.icon;
               return (
                  <div key={index} className="tech-item-card">
                    <div className="tech-item-icon">
                      <Icon />
                    </div>
                    <div className="tech-item-label">{Item.label}</div>
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
