import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";

// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import About from "../About/About";
import TypeName from "./Type-name";
import Resume from "../Resume/ResumeNew";
import Projects from "../Projects/Projects";

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
      <section></section>

      <Container fluid className="home-section">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={20} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hello There !
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  <TypeName />
                </strong>
              </h1>
            </Col>

            {/* IMAGE FOR CODING
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}

            <section id="about"></section>
            <Col></Col>
          </Row>
          <Row>
            <About />
          </Row>
          <Row>
            <Resume></Resume>
          </Row>
          <Row>
            <Projects></Projects>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </div>
  );
}

export default Home;
