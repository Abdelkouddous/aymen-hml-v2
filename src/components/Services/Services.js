import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Layout, Smartphone, Code2, BrainCircuit, TerminalSquare } from "lucide-react";

function Services() {
  const servicesData = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, user-centric interfaces using Figma.",
      icon: <Layout size={44} strokeWidth={1.5} style={{ marginBottom: "20px", color: "var(--accent-color)" }} />
    },
    {
      title: "Cross Platform Apps",
      description: "Performant mobile solutions with React Native & Flutter.",
      icon: <Smartphone size={44} strokeWidth={1.5} style={{ marginBottom: "20px", color: "var(--accent-color)" }} />
    },
    {
      title: "Web App Development",
      description: "Robust scalable apps using the MERN Stack and Laravel.",
      icon: <Code2 size={44} strokeWidth={1.5} style={{ marginBottom: "20px", color: "var(--accent-color)" }} />
    },
    {
      title: "AI & ML Engineering",
      description: "Intelligent systems with PyTorch, TensorFlow, and scikit-learn.",
      icon: <BrainCircuit size={44} strokeWidth={1.5} style={{ marginBottom: "20px", color: "var(--accent-color)" }} />
    },
    {
      title: "Systems Engineering",
      description: "Linux administration, architecture, and bash scripting.",
      icon: <TerminalSquare size={44} strokeWidth={1.5} style={{ marginBottom: "20px", color: "var(--accent-color)" }} />
    }
  ];

  return (
    <Container fluid className="services-section" id="services">
      <Container>
        <h1 className="project-heading text-center" style={{ marginBottom: "50px" }}>
          My <strong className="orange">Services</strong>
        </h1>
        <Row className="justify-content-center">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} className="project-card" key={index}>
              <Card className="project-card-view text-center flex-fill h-100 p-4">
                <Card.Body>
                  {service.icon}
                  <Card.Title style={{ fontWeight: "700", letterSpacing: "0.5px", fontSize: "1.3em", marginBottom: "15px", color: "var(--text-color)" }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ color: "var(--text-muted)", fontSize: "1.1em" }}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
