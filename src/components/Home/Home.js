import React from "react";
import myImg from "../../Assets/image.png";

import { Container, Row, Col } from "react-bootstrap";

import Home2 from "./Home2";
import Techstack from "../About/Techstack";
import About from "../About/About";
import TypeName from "./Type-name";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";
import Type from "./Type";
import { ThemeToggle } from "../theme-toggler";
import { useEffect, useRef } from "react";
import Toolstack from "../About/Toolstack";
import AboutCard from "../About/AboutCard";

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "2px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-left");
        } else {
          entry.target.classList.remove("fade-left");
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <div id="home ">
      <Container fluid className="home-section ">
        <Row>
          <Col className="home-header" style={{ padding: "auto" }}>
            <div className="home-card-view " style={{ height: "50vh" }}>
              <img
                src={myImg}
                style={{ minHeight: "50%", maxWidth: "50%" }}
                alt="avatar"
              />
              {/*  */}
              <div ref={(el) => (sectionsRef.current[0] = el)}>
                {" "}
                <h1 className="heading">
                  Hello There !
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                  <p> </p>
                  I'm <p style={{ textAlign: "center" }}> </p>
                  <strong className="main-name">
                    <Type></Type>
                  </strong>
                  <br></br>
                </h1>
                <p></p>
                <h1>
                  <strong className="main-name ">
                    <TypeName />
                  </strong>
                </h1>
              </div>
            </div>
          </Col>
        </Row>

        <section id="about" ref={(el) => (sectionsRef.current[1] = el)}>
          <Row>
            <About />
          </Row>
        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)}>
          <h1 className="project-heading" id="project-heading">
            Professional <strong className="orange">Skillset </strong>
          </h1>

          <Techstack />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)}>
          <h1 className="project-heading">
            <strong className="orange">Tools</strong> I use
          </h1>
          <Toolstack />
        </section>

        <section id="resume" ref={(el) => (sectionsRef.current[4] = el)}>
          <Row>
            <Resume></Resume>
          </Row>
        </section>
        <section id="projects" ref={(el) => (sectionsRef.current[5] = el)}>
          <Row>
            <Projects></Projects>
          </Row>
        </section>
        <section id="contact" ref={(el) => (sectionsRef.current[6] = el)}>
          <Row>
            <Home2 />
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Home;
