import React from "react";
import { Card, Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeMain from "../../../Assets/home-main.svg";

const AiProjectCard = ({ project }) => {
  const {
    id,
    title,
    summary,
    dataset,
    technologies,
    methods,
    libraries,
    result,
    imgPath,
  } = project;

  return (
    <Container fluid>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={imgPath || homeMain}
          alt={title || "AI Project"}
          onError={(e) => {
            e.currentTarget.src = homeMain;
          }}
          style={{ margin: "auto", maxWidth: "55%", maxHeight: "50%" }}
        />
        <Card.Body>
          
          <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{summary}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Dataset:</strong> {dataset}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Technologies:</strong> {technologies.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Methods:</strong> {methods.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Libraries:</strong> {libraries.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Result:</strong> {result}
            </ListGroup.Item>
          </ListGroup>
          <Button
            as={Link}
            to={`/ai-projects/${id}`}
            variant="primary"
            style={{ marginTop: "10px" }}
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AiProjectCard;
