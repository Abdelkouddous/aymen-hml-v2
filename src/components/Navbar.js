import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { RxCaretDown } from "react-icons/rx";
// import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  // AiOutlineFundProjectionScreen,
  AiTwotoneContacts,
  AiFillMessage,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Particle from "./Particle";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
          <Particle></Particle>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span className="orange">
            <span className="orange">
              <span className="orange">
                <span className="orange">
                  <RxCaretDown />
                </span>
              </span>
            </span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => updateExpanded(false)}
                // as={Link} to="/"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                {/* as={Link}
                to=".about"
                 */}
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to=""
                href="#project-heading"
                onClick={() => updateExpanded(false)}
              >
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="#resumeCV"
                href="#CV"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> MyCV
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#avatar"
                // as={Link}
                // to="#contact"
                onClick={() => updateExpanded(false)}
              >
                <AiFillMessage style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            {}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Abdelkouddous"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
