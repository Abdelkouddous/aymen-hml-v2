import React from "react";
import myImg from "../../Assets/image.png";
// import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
import Home2 from "./Home2";
import About from "../About/About";
import TypeName from "./Type-name";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";
import Type from "./Type";

function Home() {
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
    <div id="home">
      <Container fluid className="home-section">
        <Row>
          <Col className="home-header" style={{ padding: "auto" }}>
            <div className="home-card-view">
              <img
                src={myImg}
                style={{ minHeight: "50%", maxWidth: "50%" }}
                alt="avatar"
              />
              {/*  */}
              <div>
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
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        <Container className="home-content-mid">
          <Row>
            <div>
              <h1 id="project-heading" style={{ margin: "auto" }}>
                <strong className="main-name" style={{ margin: "auto" }}>
                  <TypeName />
                </strong>
              </h1>
            </div>
            {/* IMAGE FOR CODING
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>

        <section id="about"></section>
        <Row>
          <About />
        </Row>
        <Row>
          <Resume></Resume>
        </Row>
        <Row>
          <Projects></Projects>
        </Row>
        <Row>
          <Home2 />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
