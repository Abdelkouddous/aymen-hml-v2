import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AiProjectCard from "./AiProjectCard";
import { aiProjectsData } from "./aiProjectsData";

const AiProjects = () => {
  return (
    <Container fluid className="" id="ai-projects">
      <h1 className="project-heading" style={{ marginBottom: "40px" }}>
        AI / ML <strong className="orange">Projects</strong>
      </h1>
      <Row className="justify-content-center">
        {aiProjectsData.map((project) => (
          <Col key={project.id} md={10} lg={8} className="mb-4">
            <AiProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AiProjects;
