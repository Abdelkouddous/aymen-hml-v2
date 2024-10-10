import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import LoadingBar from "react-top-loading-bar";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  //DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
} from "react-icons/di";
import {
  SiFlutter,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiBootstrap,
} from "react-icons/si";
import { GiJasmine } from "react-icons/gi";
//import { TbBrandGolang } from "react-icons/tb";
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
      className="text-white"
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />

        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={75} />
          <h4 className="tech-text">75%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={90} />
          <h4 className="tech-text">90%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={60} />
          <h4 className="tech-text">60%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={80} />
          <h4 className="tech-text">80%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={70} />
          <h4 className="tech-text">70%</h4>
        </Box>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiJasmine />
        <Box
          height={50}
          sx={{ width: "100%", alignItems: "center", verticalAlign: "middle" }}
        >
          <LinearProgress color="success" variant="determinate" value={55} />
          <h4 className="tech-text">55%</h4>
        </Box>
      </Col>
    </Row>
  );
}

export default Techstack;
