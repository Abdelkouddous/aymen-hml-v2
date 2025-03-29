// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import myImg from "../../Assets/avatar.svg";
// // import Tilt from "react-parallax-tilt";

// import { Form } from "./Form";
// import Footer from "../Footer/Footer";

// function Home2() {
//   return (
//     <div id="introduce">
//       <section id="introduce-self">
//         <Container fluid className="home-about-section">
//           <Container>
//             <Row>
//               <Col md={6} className="home-about-social">
//                 {/*  */}
//                 <Form></Form>
//                 {/*  */}
//               </Col>
//             </Row>
//             <Row>
//               <Footer></Footer>
//             </Row>
//           </Container>
//         </Container>
//       </section>
//     </div>
//   );
// }
// export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "./Form";
import Footer from "../Footer/Footer";
import "./Home2.css"; // We'll create this file

function Home2() {
  return (
    <div id="introduce" className="contact-container">
      <section id="contact-section">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <Form />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Home2;
