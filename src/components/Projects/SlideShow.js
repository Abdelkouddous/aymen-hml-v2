// File: SlideShow.js
// src/components/Projects/SlideShow.js
import React from "react";
import { Slide } from "react-slideshow-image";
import ProjectCard from "./ProjectCards";
import "react-slideshow-image/dist/styles.css";
import { projectsData } from "./projectsData";
import { NavigationArrow } from "./NavigationArrow";
import { styles } from "./styles";

// Custom hook for slide functionality
const useSlideShow = () => {
  const properties = {
    prevArrow: <NavigationArrow direction="prev" />,
    nextArrow: <NavigationArrow direction="next" />,
    duration: 1000,
  };

  return { properties };
};

// Presentational component for slide content
const SlideContent = ({ project }) => (
  <div style={styles.divStyle}>
    <span style={styles.spanStyle}>
      <ProjectCard {...project} />
    </span>
  </div>
);

// Main SlideShow component
const SlideShow = () => {
  const { properties } = useSlideShow();
  const activeProjects = projectsData.filter((project) => project.isActive);

  return (
    <div className="slide-container fade-bottom">
      <Slide {...properties}>
        {activeProjects.map((project, index) => (
          <div key={`slide-${index}`}>
            <SlideContent project={project} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
