import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";

const Hero = () => {
  return (
    <Container fluid className="hero-section">
      <Row>
        <Col md={6}>
          <div className="hero-content flex justify-center align-items-center ">
            <h1 className="project-heading">
              <strong className="orange">Welcome</strong>
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>{" "}
              to my Portfolio
            </h1>
            <p className="hero-text">
              Passionate software engineer with a knack for creating dynamic and
              responsive full stack web applications.
            </p>

            <div className=" flex justify-center align-items-center ">
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
        </Col>{" "}
      </Row>
    </Container>
  );
};

export default Hero;
