import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiFlutter,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiNestjs,
} from "react-icons/si";
// import { GiJasmine } from "react-icons/gi";
import { FaLaravel } from "react-icons/fa6";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
function Techstack() {
  // my skills : HTML CSS JS PHP Python C++ C# JAVA
  // React Next Firebase Git & Github Node Bootstrap
  // Postgre MySQL
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="text-white tool-stack-container"
    >
      <h1 className="project-heading" id="project-heading">
        Professional <strong className="orange">Skillset </strong>
      </h1>
      {/* Highest percentages first */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={90} />
          <h4 className="tech-text">90%</h4>
        </Box>
      </Col>

      {/* JavaScript and its ecosystem */}
      <h3 className="project-heading" id="project-heading">
        JavaScript
      </h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs></SiNestjs>
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress
            className="strong"
            color="secondary"
            variant="determinate"
            value={80}
          />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>

      {/* Python */}
      <h3 className="project-heading" id="project-heading">
        Python
      </h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>

      {/* PHP and Laravel */}
      <h3 className="project-heading" id="project-heading">
        PHP
      </h3>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>

      {/* Databases */}
      <h3 className="project-heading" id="project-heading">
        Databases
      </h3>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb></SiMongodb>
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col> */}

      {/* Other technologies */}
      <h3 className="project-heading" id="project-heading">
        Other technologies
      </h3>
      {/* Frontend technologies */}

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={65} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="secondary" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <GiJasmine />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={55} />
          <h4 className="tech-text">55%</h4>
        </Box>
      </Col> */}
    </Row>
  );
}

export default Techstack;
