import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Coding</strong> Calendar
      </h1>
      <GitHubCalendar
        username="Abdelkouddous"
        blockSize={15}
        blockMargin={10}
        // color="#c084f5"
        color="#ffd37b"
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
