import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";
import "./about.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <span className="home-about-body-me">
            <br></br>
            Currently a software engineer. Completed a
            <span className="orange"> Master's Degree</span> in{" "}
            <span className="orange">Computer Systems and Multimedia</span> at
            the University of Tebessa, studied various courseworks such as:
            <ul>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Software Engineering</span>
              </li>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange">
                  {" "}
                  Systems & Artificial Intelligence Engineering
                </span>
              </li>

              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Data Science</span>
              </li>

              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Networks & Cyber Security</span>
              </li>
            </ul>
          </span>
          <p style={{ color: "whitesmoke" }}>
            "The best way to find solutions is to find problems"{" "}
          </p>
          <footer className="blockquote-footer">Aymen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
