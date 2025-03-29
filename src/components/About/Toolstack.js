import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPostman,
  SiAnaconda,
} from "react-icons/si";

import { DiDocker } from "react-icons/di";

function Toolstack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="text-white "
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        {/* <span className="tech-text">Since 2022</span> */}
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        {/* <p className="tech-text">Since 2020</p> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        {/* <span className="tech-text">Since 2018</span> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda></SiAnaconda>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        {/* <span className="tech-text">Since 2024</span> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        {/* <span className="tech-text">Since 2024</span> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker></DiDocker>
        {/* <span className="tech-text">Since 2023</span> */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman></SiPostman>
        {/* <span className="tech-text">Since 2023</span> */}
      </Col>
      {/* added to my techstack later on ... */}
      {/* <SiVercel></SiVercel>
       */}
    </Row>
  );
}

export default Toolstack;
