import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";

import TypeProfession from "../Home/TypeProfession";
import Stats from "./Stats/Stats";
import Type from "../Home/Type";

const Hero = () => {
  // this section is the first secion in the portofolio
  // ?it contains the welcome message and the image
  return (
    <Container fluid className="hero-section hero-split hero-appear d-flex flex-column justify-content-center" style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <Row className="hero-row-split align-items-center justify-content-center flex-grow-1">
        <Col md={6} className="hero-left hero-appear-left text-center text-md-start">
          <p className="hero-kicker" style={{ fontSize: "1.5em", marginBottom: "0.5rem" }}>Hello, I'm</p>
          <h2 className="hero-heading" style={{ fontSize: "3.5em", fontWeight: "700", marginBottom: "1rem" }}>
            <Type />
          </h2>
          <h4 className="hero-subtitle" style={{ fontSize: "2em", marginBottom: "2rem" }}>
            <strong className="orange">
              <TypeProfession />
            </strong>
          </h4>
          <div className="hero-buttons justify-content-center justify-content-md-start">
            <a href="#about" className="btn-primary-2" style={{ padding: "10px 30px", fontSize: "1.1em" }}>
              Know More
            </a>
            <a href="#projects" className="btn-secondary-2" style={{ padding: "10px 30px", fontSize: "1.1em", color: "#fff", borderColor: "var(--imp-text-color)" }}>
              Projects
            </a>
          </div>
        </Col>
        <Col md={6} className="hero-right hero-appear-right text-center mt-5 mt-md-0">
          <img
            src={myImg}
            alt="Aymen Hamel"
            className="hero-portrait hero-portrait-circle img-fluid"
            style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "50%", border: "4px solid rgba(255, 211, 123, 0.3)" }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center pb-5">
        <Col md={12} className="p-0">
          <Stats />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
