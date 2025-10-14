import React from "react";
import { Container } from "react-bootstrap";

import SlideShow from "./SlideShow";
import AiProjects from "./Ai/AiProjects";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <h1 className="project-heading">
        <strong className="orange">Full Stack </strong>Projects
      </h1>
      <SlideShow></SlideShow>
      <AiProjects></AiProjects>
    </Container>
  );
}

export default Projects;
