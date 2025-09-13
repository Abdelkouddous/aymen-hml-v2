import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
import TypeName from "../Home/Type-name";

const Hero = () => {
  // this section is the first secion in the portofolio
  // ?it contains the welcome message and the image
  return (
    <Container fluid className="hero-section">
      <Row>
        <Col md={6}>
          <div className="hero-content  ">
            <h1 className="project-heading">
              <strong className="orange">Welcome </strong>
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              to my Portfolio
            </h1>
            <p className="hero-text">
              Passionate software engineer with a knack for creating dynamic and
              responsive full stack applications.
            </p>

            <div className="hero-buttons ">
              <a href="#about" className="btn btn-primary-2 ">
                Know More
              </a>
              <a href="#projects" className="btn btn-secondary-2">
                Projects
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          {" "}
          <img src={myImg} alt="hero" className="hero-image" />
          <strong className="orange">
            <TypeName></TypeName>
          </strong>
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default Hero;
