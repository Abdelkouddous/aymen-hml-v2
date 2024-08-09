import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

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
            I'am currently a junior software engineer. I have completed Master's
            Degree in Computer Systems and Multimedia at the University of
            Tebessa, where I studied various fields such as : Programming, Data
            Engineering, Data Science, Artificial Intelligence and System
            Security...
            <br />
            <br />
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
