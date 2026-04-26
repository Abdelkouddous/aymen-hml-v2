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
              I am a <span className="orange">Systems & Software Engineer</span> dedicated to 
              building high-performance infrastructure and scalable digital solutions.
            </p>
            <p>
              I graduated as <span className="orange">1st Rank</span>  with a 
              <span className="orange"> Master's Degree in Computer Systems</span>, a foundation 
              that allows me to tackle complex architectural challenges with formal precision.
            </p>
            <p>
              Currently, I serve as a Systems Engineer at <span className="orange">Sonatrach</span>, 
              where I manage critical large-scale infrastructure while also operating as a 
              multidisciplinary developer across these core domains:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange">Advanced Systems Engineering (RHEL, Cloud, Virtualization)</span>
              </li>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange">Full-Stack Software Development (React, TypeScript, Node.js, Laravel and more ...)</span>
              </li>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange">AI & Machine Learning (Gemini API, Deep Learning, Data Analysis)</span>
              </li>
              <li className="about-activity">
                <ImArrowRight className="orange" style={{ marginRight: "10px" }} />
                <span className="orange">Infrastructure Automation & CI/CD Pipelines</span>
              </li>
            </ul>
          </div>
          <p style={{ color: "var(--text-muted)", fontStyle: "italic", marginTop: "20px" }}>
            "The best solutions are built on resilient architecture."{" "}
          </p>
          <footer className="blockquote-footer">Aymen Abdelkouddous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
