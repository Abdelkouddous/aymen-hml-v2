import React from "react";
import { Card, Button, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  } = project;

  return (
    <Container fluid>
      <Card>
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
