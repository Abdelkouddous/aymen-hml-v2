import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <span className="home-about-body-me">
            Hello visitor, I'am{" "}
            <span className="orange">HAMEL Aymen Abdelkouddous </span>
            from <span className="orange"> Algeria.</span>
            <br></br>
            I'am currently a junior software engineer. I have completed{" "}
            <span className="orange">Master's Degree</span> in{" "}
            <span className="orange">Computer Systems and Multimedia</span> at
            the University of Tebessa, where I studied various fields such as :
            <ul>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Programming</span>
              </li>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Data Science</span>
              </li>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Artificial Intelligence</span>
              </li>
              <li className="about-activity">
                <ImArrowRight></ImArrowRight>
                <span className="orange"> Networks Security</span>
              </li>
            </ul>
            Apart from coding, some other activities that I love to do!
          </span>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "whitesmoke" }}>
            "The best way to learn to code is to code"{" "}
          </p>
          <footer className="blockquote-footer">Aymen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
