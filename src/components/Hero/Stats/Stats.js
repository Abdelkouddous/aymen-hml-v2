// import { FaClock, FaCode, FaSmile, FaTrophy } from "react-icons/fa";
import { Calendar, Code, Smile, Trophy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./stats.css";

function CountUp({ end, duration = 1200, suffix = "" }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTs = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - startTs) / duration, 1);
            const current = Math.floor(progress * end);
            setValue(current);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return (
    <span ref={ref} className="stats-number">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: 2, suffix: "+", icon: Calendar },
    { label: "Created Projects", value: 6, icon: Code },
    { label: "Satisfied Clients", value: 3, icon: Smile },
    { label: "Awards", value: 1, icon: Trophy },
  ];

  return (
    <Container fluid className="stats-section">
      <h1 className="project-heading">
        By the <strong className="orange">Numbers</strong>
      </h1>
      <Row className="justify-content-center">
        {stats.map((s, idx) => (
          <Col key={idx} md={3} sm={6} xs={12} className="mb-4 d-flex">
            <Card className="stats-card project-card-view flex-fill text-center">
              <Card.Body>
                <div>
                  <s.icon className="stats-icon " aria-hidden="true" />
                </div>
                <div className="mb-2">
                  <CountUp end={s.value} suffix={s.suffix || ""} />
                </div>
                <div className="stats-label">{s.label}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
