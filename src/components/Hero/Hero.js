import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import myImg from "../../Assets/image.png";

import TypeProfession from "../Home/TypeProfession";
import Stats from "./Stats/Stats";
import Type from "../Home/Type";

// ─── Animation variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fromLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fromBottom = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Hero Component ──────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <Container
      fluid
      className="hero-section hero-split d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row className="hero-row-split align-items-center justify-content-center flex-grow-1">

          {/* ── Left: text ── */}
          <Col md={6} className="text-center">
            <motion.p className="hero-kicker" variants={fromLeft}>
              Hello, I'm
            </motion.p>

            <motion.h2 className="hero-heading" variants={fromLeft}>
              <Type />
            </motion.h2>

            <motion.h4 className="hero-subtitle mb-4" variants={fromLeft}>
              <strong className="orange">
                <TypeProfession />
              </strong>
            </motion.h4>

            <motion.div
              className="hero-buttons d-flex justify-content-center gap-3"
              variants={fromBottom}
            >
              <a
                href="#about"
                className="btn-primary-2"
                style={{ padding: "10px 30px", fontSize: "1.1em" }}
              >
                Know More
              </a>
              <a
                href="#projects"
                className="btn-secondary-2"
                style={{ padding: "10px 30px", fontSize: "1.1em" }}
              >
                Projects
              </a>
            </motion.div>
          </Col>

          {/* ── Right: portrait ── */}
          <Col md={6} className="hero-right text-center mt-5 mt-md-0">
            <motion.img
              src={myImg}
              alt="Aymen Hamel"
              className="hero-portrait hero-portrait-circle img-fluid"
              style={{
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid rgba(255, 211, 123, 0.3)",
                boxShadow: "0 0 60px rgba(255, 211, 123, 0.18), 0 20px 40px rgba(0,0,0,0.4)",
              }}
              variants={fromRight}
              whileHover={{ scale: 1.04, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </Col>
        </Row>

        {/* ── Stats strip ── */}
        <motion.div variants={fromBottom}>
          <Row className="justify-content-center pb-5">
            <Col md={12} className="p-0">
              <Stats />
            </Col>
          </Row>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Hero;
