import React from "react";
import { Container } from "react-bootstrap";

import SlideShow from "./SlideShow";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <h1 className="project-heading">
        My Recent <strong className="orange">Projects </strong>
      </h1>
      <SlideShow></SlideShow>
    </Container>
  );
}

export default Projects;
