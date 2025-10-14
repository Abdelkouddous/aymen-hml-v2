import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AiProjectCard from "./AiProjectCard";
import { aiProjectsData } from "./aiProjectsData";

const AiProjects = () => {
  return (
    <Container fluid className="project-section" id="ai-projects">
      <h2 className="project-heading">
        AI / ML <strong className="orange">Projects</strong>
      </h2>
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
