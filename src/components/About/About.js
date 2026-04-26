import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import Certificates from "./Certificates";
import laptopImg from "../../Assets/about2.png";
import "./about.css";

const fromLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function About() {
  return (
    <div>
      <Container fluid className="about-section">
        <Row className="d-flex justify-content-center align-items-center">

          {/* ── Text / Card ── */}
          <Col md={6}>
            <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
              <h1>
                About <strong className="orange">ME</strong>
              </h1>
              <Aboutcard />
            </motion.div>
          </Col>

          {/* ── Illustration ── */}
          <Col md={6} className="d-flex justify-content-center">
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxWidth: "75%", maxHeight: "75%" }}
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            />
          </Col>
        </Row>

        <Github />
        <Certificates />
      </Container>
    </div>
  );
}

export default About;
