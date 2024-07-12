import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="orange">Code</strong>
      </h1>
      <GitHubCalendar
        username="Abdelkouddous"
        blockSize={15}
        blockMargin={10}
        // color="#c084f5"
        color="#ffd37b"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;