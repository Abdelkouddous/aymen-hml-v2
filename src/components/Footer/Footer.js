import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; // We'll create this file

function Footer() {
  const year = new Date().getFullYear();
  const brand = "Hml Soft";

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="footer-info">
            <h3 className="footer-brand">{brand}</h3>
            <p className="footer-description">
              Creating innovative solutions with modern web technologies.
            </p>
          </Col>

          <Col md={6} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#introduce">Contact</a>
              </li>
            </ul>
          </Col>

          <Col md={6} className="footer-social">
            <span>Connect With Me</span>
          </Col>
          <Col md={6} className="footer-social">
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
                href="https://Facebook.com/lakrin12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <AiOutlineFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/aymene-abdelkouddous-hamel-0b0b90198/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/aymen___hml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6} className="copyright">
            <p>
              &copy; {year} {brand}. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="credits">
            <p>Designed & Developed by Hamel Aymene Abdelkouddous</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
