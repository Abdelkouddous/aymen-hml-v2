import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about2.png";

function About() {
  return (
    <div className="">
      <Container fluid className="about-section">
        <Row className="flex justify-center align-items-center">
          <Col md={6}>
            <h1>
              About <strong className="orange">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6}>
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxWidth: "75%", maxHeight: "75%" }}
            />
            <p className="text-center">
              <small className="text-muted">
                Photo <span className="text-muted">Generated with gemini</span>
              </small>
            </p>
          </Col>
        </Row>
        {/* <h1 id="project-heading" style={{ padding: "40px" }}></h1> */}

        <Github />
      </Container>
    </div>
  );
}

export default About;
