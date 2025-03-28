import React from "react";
import myImg from "../../Assets/image.png";

import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import About from "../About/About";
import TypeName from "./Type-name";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";
import Type from "./Type";
import { ThemeToggle } from "../theme-toggler";
import { useEffect, useRef, useState } from "react";
import Toolstack from "../About/Toolstack";
import AboutCard from "../About/AboutCard";

function Home() {
  const sectionsRef = useRef([]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-60px", // Trigger slightly outside the viewport
      threshold: 0.0, // Lower threshold for smoother transitions
    };

    let isVisible = new Set(); // Track visible sections to avoid redundant re-renders

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible.has(entry.target)) {
            entry.target.classList.add("fade-left-visible");
            isVisible.add(entry.target); // Add the section to visible set
          }
        } else {
          // Delay the removal to create a smoother transition
          setTimeout(() => {
            entry.target.classList.remove("fade-left-visible");
            isVisible.delete(entry.target); // Remove section from visible set
          }, 1000); // Adjust delay as needed
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div id="home">
      <Container fluid className="home-section">
        {/* Hero Section */}
        <Row className="justify-content-center align-items-center">
          <Col
            md={10}
            lg={8}
            className="text-center"
            style={{ marginTop: "2rem" }}
          >
            <div
              className="home-card-view"
              style={{
                minHeight: "60vh",
                display: "flex",
                flexDirection: "row", // Changed from column to row
                alignItems: "center",
                justifyContent: "space-between", // Adjust spacing
                gap: "2rem",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Text Content */}
              <div
                style={{
                  flex: 1, // Takes available space
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "600px", // Adjusted for better proportion
                  textAlign: "left", // Align text to left for horizontal layout
                }}
              >
                <h1 className="heading">
                  Hello There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                  I'm{" "}
                  <strong className="main-name">
                    <Type />
                  </strong>
                </h1>

                <div style={{ marginTop: "1.5rem" }}>
                  <strong className="main-name ">
                    <span>A</span> <TypeName />
                  </strong>
                </div>
              </div>

              {/* Image Container */}
              <div
                style={{
                  flexShrink: 0, // Prevent image from shrinking
                  width: "250px",
                  height: "250px",
                  borderRadius: "15px",
                  overflow: "hidden", // Ensure borderRadius works with image
                }}
              >
                <img
                  src={myImg}
                  alt="home pic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Theme Toggle */}
              <div
                className="home-about-social"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                }}
              >
                {/* <ThemeToggle toggleTheme={toggleTheme} /> */}
              </div>
            </div>
          </Col>
        </Row>
        {/* Other Sections */}
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          {/* About Section */}
          <section id="about" className="text-center my-5">
            <Row
              className="fade-left justify-content-center"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              <Col md={12}>
                <About />
              </Col>
            </Row>
          </section>

          {/* Skillset Section */}
          <section
            className="fade-left text-center my-5"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h1 className="project-heading" id="project-heading">
              Professional <strong className="orange">Skillset </strong>
            </h1>
            <Techstack />
          </section>

          {/* Tools Section */}
          <section
            className="fade-left text-center my-5"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h1 className="project-heading">
              <strong className="orange">Tools</strong> I use
            </h1>
            <Toolstack />
          </section>

          {/* Resume Section */}
          <section
            id="resume"
            className="fade-left text-center my-5"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Resume />
              </Col>
            </Row>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="fade-left text-center my-5"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Projects />
              </Col>
            </Row>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="fade-left text-center my-5"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Home2 />
              </Col>
            </Row>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default Home;
