import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";

import TypeProfession from "../Home/TypeProfession";
import Stats from "./Stats/Stats";

const Hero = () => {
  // this section is the first secion in the portofolio
  // ?it contains the welcome message and the image
  return (
    <Container fluid className="hero-section ">
      <Row md={12}>
        <Col md={6}>
          <img src={myImg} alt="hero" className="hero-image" />
          <div className="hero-buttons ">
            <a href="#about" className="btn btn-primary-2 ">
              Know More
            </a>
            <a href="#projects" className="btn btn-secondary-2">
              Projects
            </a>
          </div>
        </Col>
        <Col md={6}>
          <Col className="col">
            <h1 className="project-heading ">
              <strong className="orange">HAMEL </strong>
              AYMENE ABDELKOUDDOUS
            </h1>
            <h4 className="hero-text">
              Hello visitor{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              , I'am Passionate software engineer with a knack for creating
              dynamic and responsive full stack applications.
            </h4>
          </Col>
          <Col className="col">
            <strong className="orange">
              <TypeProfession></TypeProfession>
            </strong>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-12">
          <Stats></Stats>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
