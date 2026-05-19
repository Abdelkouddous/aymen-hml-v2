import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import hmlSystemsLogo from "../../Assets/hml-systems-logo.svg";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const brand = "HML Systems";

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content justify-content-between align-items-center">
          <Col md={4} className="footer-info text-center text-md-start">
            <img
              src={hmlSystemsLogo}
              alt="HML Systems"
              className="footer-logo-svg"
            />
            <p className="footer-description">
              Creating innovative solutions with modern web technologies.
            </p>
          </Col>
          
          <Col md={4} className="footer-social text-center">
            <div className="social-links justify-content-center">
              <a
                href="https://github.com/Abdelkouddous"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aymene-abdelkouddous-hamel-0b0b90198/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          <Col md={4} className="footer-copyright text-center text-md-end">
             <p className="mb-0">Designed & Developed by</p>
             <p className="mb-0 fw-bold">Hamel Aymene Abdelkouddous</p>
             <p className="small text-muted mt-1">&copy; {year} {brand}.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
