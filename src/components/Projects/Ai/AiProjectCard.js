import React from "react";
import { Card, Button, Container, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { SiGoogle } from "react-icons/si";
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
    ghLink,
    demoLink,
    aiStudioLink,
    builtWith,
  } = project;

  return (
    <Container fluid>
      <Card className="project-card-view">
        {/* ── Hero image ── */}
        <Card.Img
          variant="top"
          src={imgPath || homeMain}
          alt={title || "AI Project"}
          onError={(e) => { e.currentTarget.src = homeMain; }}
          style={{ margin: "auto", maxWidth: "55%", maxHeight: "50%" }}
        />

        <Card.Body>
          {/* ── Title ── */}
          <Card.Title style={{ textAlign: "center", marginBottom: "8px" }}>
            {title}
          </Card.Title>

          {/* ── Google AI Studio badge ── */}
          {builtWith && (
            <div style={{ textAlign: "center", marginBottom: "14px" }}>
              <Badge
                style={{
                  background: "linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)",
                  color: "#fff",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 10px rgba(66, 133, 244, 0.3)",
                }}
              >
                <SiGoogle style={{ fontSize: "0.9rem" }} />
                Built with {builtWith}
              </Badge>
            </div>
          )}

          {/* ── Summary ── */}
          <Card.Text style={{ textAlign: "center", marginBottom: "16px" }}>
            {summary}
          </Card.Text>

          {/* ── Details list ── */}
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

          {/* ── Action buttons ── */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginTop: "18px",
            }}
          >
            {/* Details page */}
            <Button
              as={Link}
              to={`/ai-projects/${id}`}
              variant="primary"
            >
              Details
            </Button>

            {/* GitHub link */}
            {ghLink && (
              <Button
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-secondary"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <BsGithub /> GitHub
              </Button>
            )}

            {/* Demo link */}
            {demoLink && (
              <Button
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-success"
              >
                Live Demo
              </Button>
            )}

            {/* Google AI Studio live app */}
            {aiStudioLink && (
              <Button
                href={aiStudioLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(90deg, #4285F4, #34A853)",
                  border: "none",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                }}
              >
                <SiGoogle /> Try on AI Studio
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AiProjectCard;
