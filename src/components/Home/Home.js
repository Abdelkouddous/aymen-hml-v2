//Home page
import { useEffect, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import About from "../About/About";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";

import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  const sectionsRef = useRef([]);
  const observerRef = useRef(null);

  // Create the observer callback as a memoized function
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-left-visible");
      } else {
        // Delay the removal to create a smoother transition
        setTimeout(() => {
          // Check if the element still exists before removing the class
          if (entry.target.isConnected) {
            entry.target.classList.remove("fade-left-visible");
          }
        }, 500);
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-60px",
      threshold: 0.0,
    };

    // Create a new observer instance
    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Get current sections
    const currentSections = sectionsRef.current.filter(Boolean);

    // Observe all sections
    currentSections.forEach((section) => {
      if (section) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup function
    return () => {
      if (observerRef.current) {
        currentSections.forEach((section) => {
          if (section) {
            observerRef.current.unobserve(section);
          }
        });
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]); // Only re-run if handleIntersection changes

  // Function to set refs
  const setRef = (index) => (element) => {
    sectionsRef.current[index] = element;
  };

  return (
    <div id="home">
      <Container fluid className="home-section p-0">
        {/* Hero Section */}
        <section className="text-center h-screen flex flex-col justify-center">
          <Row className="justify-content-center m-0">
            <Col md={12} className="p-0">
              <Hero />
            </Col>
          </Row>
        </section>

        <div className="section-content-wrapper">
          {/* About Section */}
          <section id="about" className="text-center py-5 section-divider">
            <Row className="fade-left justify-content-center" ref={setRef(0)}>
              <Col md={12}>
                <About />
              </Col>
            </Row>
          </section>

          {/* Testimonials section */}
          <section
            id="testimonials"
            className="fade-right text-center py-5 section-divider"
            ref={setRef(1)}
          >
            <Testimonials />
          </section>

          {/* Skillset Section */}
          <section className="fade-left text-center py-5 section-divider" ref={setRef(2)}>
            <Techstack />
          </section>


          {/* Projects Section */}
          <section
            id="projects"
            className="fade-left text-center py-5 section-divider"
            ref={setRef(4)}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Projects />
              </Col>
            </Row>
          </section>

          {/* Resume Section */}
          <section
            id="resume"
            className="fade-left text-center py-5 section-divider"
            ref={setRef(5)}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Resume />
              </Col>
            </Row>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="fade-left text-center py-5 section-divider"
            ref={setRef(6)}
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
// Compare this snippet from src/components/Navbar.js:
