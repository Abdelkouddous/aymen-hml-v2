import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import About from "../About/About";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";

// ─── Reusable section animation variants ────────────────────────────────────
const slideUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden:  { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const viewportConfig = { once: false, amount: 0.12 };

// ─── Home page component ─────────────────────────────────────────────────────
function Home() {
  return (
    <div id="home">
      <Container fluid className="home-section p-0">

        {/* ── Hero ── */}
        <section>
          <Row className="justify-content-center m-0">
            <Col md={12} className="p-0">
              <Hero />
            </Col>
          </Row>
        </section>

        <div className="section-content-wrapper">

          {/* ── About ── */}
          <motion.section
            id="about"
            className="text-center py-5 section-divider"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <About />
              </Col>
            </Row>
          </motion.section>

          {/* ── Services ── */}
          <motion.section
            id="services"
            className="text-center py-5 section-divider"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Services />
          </motion.section>

          {/* ── Testimonials ── */}
          <motion.section
            id="testimonials"
            className="text-center py-5 section-divider"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Testimonials />
          </motion.section>

          {/* ── Skillset ── */}
          <motion.section
            className="text-center py-5 section-divider"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Techstack />
          </motion.section>

          {/* ── Projects ── */}
          <motion.section
            id="projects"
            className="text-center py-5 section-divider"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Projects />
              </Col>
            </Row>
          </motion.section>

          {/* ── Resume / CV ── */}
          <motion.section
            id="resume"
            className="text-center py-5 section-divider"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Resume />
              </Col>
            </Row>
          </motion.section>

          {/* ── Contact ── */}
          <motion.section
            id="contact"
            className="text-center py-5 section-divider"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Row className="justify-content-center">
              <Col md={12}>
                <Home2 />
              </Col>
            </Row>
          </motion.section>

        </div>
      </Container>
    </div>
  );
}

export default Home;
