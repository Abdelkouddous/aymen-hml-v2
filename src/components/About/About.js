import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div>
      <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
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
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* <h1 id="project-heading" style={{ padding: "40px" }}></h1> */}
        <h1 className="project-heading">
          Professional <strong className="orange">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </div>
  );
}

export default About;
