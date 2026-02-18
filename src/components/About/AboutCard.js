import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";
import "./about.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ fontSize: "1.1em" }}>
          <div className="home-about-body-me" style={{ textAlign: "justify" }}>
            <p>
              Currently a software engineer. Completed a
              <span className="orange"> Master's Degree</span> in{" "}
              <span className="orange">Computer Systems and Multimedia</span> at
              the University of Tebessa, studied various courseworks such as:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange"> Software Engineering</span>
              </li>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange"> Systems & Artificial Intelligence Engineering</span>
              </li>

              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange"> Data Science</span>
              </li>

              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange"> Networks & Cyber Security</span>
              </li>
            </ul>
          </div>
          <p style={{ color: "var(--text-muted)", fontStyle: "italic", marginTop: "20px" }}>
            "The best way to find solutions is to find problems"{" "}
          </p>
          <footer className="blockquote-footer">Aymen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
