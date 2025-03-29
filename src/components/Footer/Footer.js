// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineFacebook,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <div id="footer">
//       <Container className="footer">
//         <Row>
//           <Col md="4" className="footer-copywright">
//             <h3>Copyright © {year} HML Tech.</h3>
//           </Col>
//           <Col md="4" className="footer-copywright">
//             <h3> All rights reserved.</h3>
//           </Col>

//           {/*   Copyright © 2024 HML Tech. <br></br>
//           All rights reserved */}

//           {/* HERE U CANT MODIFY
//         FOOTER COLOR */}
//           <Col md="4" className="footer-body">
//             <ul className="footer-icons">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/Abdelkouddous"
//                   style={{ color: "#ffffff" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://Facebook.com/lakrin12"
//                   style={{ color: "#ffffff" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiOutlineFacebook />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/aymene-abdelkouddous-hamel-0b0b90198/"
//                   style={{ color: "#ffffff" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/aymen___hml"
//                   style={{ color: "#ffffff" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Footer;
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

  return (
    <footer className="footer-section">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-info">
            <h3 className="footer-brand">HML Tech</h3>
            <p className="footer-description">
              Creating innovative solutions with modern web technologies.
            </p>
          </Col>

          <Col lg={4} md={6} className="footer-links">
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

          <Col lg={6} md={6} className="footer-social">
            <span>Connect With Me</span>
          </Col>
          <Col lg={6} md={6} className="footer-social">
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
            <p>&copy; {year} HML Soft. All rights reserved.</p>
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
