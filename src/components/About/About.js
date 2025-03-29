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
            <h1
              style={{
                textAlign: "center",
                fontSize: "2.1em",
                paddingBottom: "20px",
              }}
            >
              About <strong className="orange">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h1 id="project-heading" style={{ padding: "40px" }}></h1> */}

        <Github />
      </Container>
    </div>
  );
}

export default About;
