import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Form } from "./Form";

function Home2() {
  return (
    <div id="introduce">
      <section id="introduce-self">
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={16} className="home-about-social">
                <h1> CONTACT ME </h1>

                {/*  */}
                <Form></Form>

                {/*  */}
                <ul className="home-about-social-links">
                  <p>
                    Feel free to <span className="orange">connect </span>with me
                  </p>
                  <li className="social-icons">
                    <a
                      href="https://github.com/Abdelkouddous"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://Facebook.com/lakrin12"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineFacebook />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/aymene-abdelkouddous-hamel-0b0b90198/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/aymen___hml"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}
export default Home2;
