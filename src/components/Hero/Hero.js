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
    <Container fluid className="hero-section hero-split hero-appear">
      <Row md={12} className="hero-row-split">
        <Col md={6} className="hero-left hero-appear-left">
          <p className="hero-kicker">Hello, I'am</p>
          <h2 className="hero-heading">
            <Type></Type>
          </h2>
          <h4 className="hero-subtitle">
            <strong className="orange">
              <TypeProfession></TypeProfession>
            </strong>
          </h4>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary-2 ">
              Know More
            </a>
            <a href="#projects" className="btn btn-secondary-2">
              Projects
            </a>
          </div>
        </Col>
        <Col md={6} className="hero-right hero-appear-right">
          <img
            src={myImg}
            alt="hero"
            className="hero-portrait hero-portrait-circle"
          />
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
