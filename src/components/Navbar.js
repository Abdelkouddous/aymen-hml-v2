import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import hmlLogo from "../Assets/hml-logomark.svg";
import Button from "react-bootstrap/Button";
import { RxCaretDown } from "react-icons/rx";
import { CgGitFork } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { Layout } from "lucide-react";
import {
  AiFillStar,
  AiOutlineHome,
  AiFillProject,
  AiFillMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ThemeContext } from "../App";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const scrollHandler = useCallback(() => {
    updateNavbar(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  // Shared theme icon
  const ThemeIcon = theme === "light" ? <HiMoon /> : <CgSun />;

  return (
    <Navbar
      expanded={expand}
      sticky="top"
      expand="xl"
      className={navColour ? "sticky" : "navbar"}
      style={{ zIndex: 1100 }}
    >
      <Container>
        {/* ── Brand ── */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={hmlLogo}
            className="navbar-logo-svg"
            alt="HML Systems"
          />
        </Navbar.Brand>

        {/* ── Mobile-only: theme toggle + hamburger (always visible) ── */}
        <div className="d-flex align-items-center gap-2 ms-auto d-xl-none">
          <Button
            onClick={toggleTheme}
            className="theme-btn"
            variant="link"
            aria-label="Toggle theme"
          >
            {ThemeIcon}
          </Button>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span className="orange">
              <RxCaretDown />
            </span>
          </Navbar.Toggle>
        </div>

        {/* ── Desktop + mobile-expanded nav links ── */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-xl-center" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#services" onClick={() => updateExpanded(false)}>
                <Layout size={18} style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#testimonials" onClick={() => updateExpanded(false)}>
                <AiFillMessage style={{ marginBottom: "2px" }} /> Testimonials
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#project-heading" onClick={() => updateExpanded(false)}>
                <GiSkills style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" onClick={() => updateExpanded(false)}>
                <AiFillProject style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#CV" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> MyCV
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#introduce" onClick={() => updateExpanded(false)}>
                <AiFillMessage style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

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

            {/* Desktop-only theme toggle (hidden on mobile — handled above) */}
            <Nav.Item className="d-none d-xl-flex align-items-center">
              <Button
                onClick={toggleTheme}
                className="theme-btn"
                variant="link"
                aria-label="Toggle theme"
              >
                {ThemeIcon}
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
