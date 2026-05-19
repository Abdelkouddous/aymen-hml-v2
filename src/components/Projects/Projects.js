import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

import SlideShow from "./SlideShow";
import AiProjects from "./Ai/AiProjects";

const headingVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Projects() {
  return (
    <Container fluid id="projects">
      <motion.h1
        className="project-heading"
        style={{ marginBottom: "20px" }}
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <strong className="orange">Full Stack </strong> Projects
      </motion.h1>

      <SlideShow />
      <AiProjects />
    </Container>
  );
}

export default Projects;
