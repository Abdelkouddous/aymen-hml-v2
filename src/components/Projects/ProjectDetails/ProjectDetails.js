import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Badge,
} from "react-bootstrap";
import { aiProjectsData } from "../Ai/aiProjectsData";
import { projectsData } from "../projectsData";
import { SiPython, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";
import { FaBrain, FaRandom, FaCheckCircle } from "react-icons/fa";
import { RiFlowChart } from "react-icons/ri";

const findProjectById = (id) => {
  const ai = aiProjectsData.find((p) => p.id === id);
  if (ai) return { project: ai, type: "ai" };
  const fullstack = projectsData.find(
    (p) => String(p.id) === id || p.id === id
  );
  if (fullstack) return { project: fullstack, type: "fullstack" };
  return { project: null, type: null };
};

const ProjectDetails = () => {
  const { id } = useParams();
  const { project, type } = findProjectById(id);

  if (!project) {
    return (
      <Container className="project-section">
        <h2 className="project-heading">Project Not Found</h2>
        <p>The requested project does not exist.</p>
        <Button as={Link} to={"/"} variant="primary">
          Go Home
        </Button>
      </Container>
    );
  }

  const title = project.title || "Project";
  const backLink = type === "ai" ? "/#ai-projects" : "/#projects";

  const iconMap = {
    python: SiPython,
    numpy: SiNumpy,
    pandas: SiPandas,
    "scikit-learn": SiScikitlearn,
    adaboost: FaBrain,
    svm: RiFlowChart,
    "random forest": FaRandom,
  };

  const normalize = (s) => String(s).toLowerCase();
  const getIconFor = (name) => {
    const key = normalize(name)
      .replace(/\(.*?\)/g, "")
      .trim();
    const entries = Object.keys(iconMap);
    const match = entries.find((k) => key.includes(k));
    return match ? iconMap[match] : null;
  };

  return (
    <Container fluid className="project-section details-gradient">
      <Row className="justify-content-center">
        <Col md={11} lg={9}>
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
              {project.summary && (
                <Card.Text style={{ textAlign: "center", fontSize: "1.05rem" }}>
                  {project.summary}
                </Card.Text>
              )}

              {/* Overview */}
              <h5 className="mt-3" style={{ textAlign: "center" }}>
                Overview
              </h5>
              <Card.Text>
                {project.dataset && (
                  <>
                    This project leverages the{" "}
                    <Badge bg="warning" text="dark">
                      {project.dataset}
                    </Badge>{" "}
                    dataset to build handwriting-based models.
                  </>
                )}
                {project.methods && (
                  <>
                    {" "}
                    Evaluated multiple approaches including{" "}
                    {Array.isArray(project.methods)
                      ? project.methods.join(", ")
                      : project.methods}
                    . Methods were selected to balance accuracy and
                    generalization.
                  </>
                )}
                {project.result && (
                  <>
                    {" "}
                    Final results achieved:{" "}
                    <Badge bg="success">{project.result}</Badge>.
                  </>
                )}
              </Card.Text>

              <ListGroup variant="flush">
                {project.dataset && (
                  <ListGroup.Item>
                    <strong>Dataset:</strong> {project.dataset}
                  </ListGroup.Item>
                )}
                {project.technologies && (
                  <ListGroup.Item>
                    <strong>Technologies:</strong>{" "}
                    <div className="icon-pair-list">
                      {Array.isArray(project.technologies) ? (
                        project.technologies.map((t) => {
                          const Icon = getIconFor(t);
                          return (
                            <span key={t} className="icon-pair">
                              {Icon && <Icon size={18} />}
                              <span className="dash">—</span>
                              {t}
                            </span>
                          );
                        })
                      ) : (
                        <span className="icon-pair">
                          <span className="dash">—</span>
                          {project.technologies}
                        </span>
                      )}
                    </div>
                  </ListGroup.Item>
                )}
                {project.methods && (
                  <ListGroup.Item>
                    <strong>Methods:</strong>{" "}
                    <div className="icon-pair-list">
                      {Array.isArray(project.methods) ? (
                        project.methods.map((m) => {
                          const Icon = getIconFor(m);
                          return (
                            <span key={m} className="icon-pair">
                              {Icon && <Icon size={18} />}
                              <span className="dash">—</span>
                              {m}
                            </span>
                          );
                        })
                      ) : (
                        <span className="icon-pair">
                          <span className="dash">—</span>
                          {project.methods}
                        </span>
                      )}
                    </div>
                  </ListGroup.Item>
                )}
                {project.libraries && (
                  <ListGroup.Item>
                    <strong>Libraries:</strong>{" "}
                    <div className="icon-pair-list">
                      {Array.isArray(project.libraries) ? (
                        project.libraries.map((l) => {
                          const Icon = getIconFor(l);
                          return (
                            <span key={l} className="icon-pair">
                              {Icon && <Icon size={18} />}
                              <span className="dash">—</span>
                              {l}
                            </span>
                          );
                        })
                      ) : (
                        <span className="icon-pair">
                          <span className="dash">—</span>
                          {project.libraries}
                        </span>
                      )}
                    </div>
                  </ListGroup.Item>
                )}
                {project.result && (
                  <ListGroup.Item>
                    <strong>Result:</strong>{" "}
                    <div className="icon-pair-list">
                      <span className="icon-pair">
                        <FaCheckCircle size={18} />
                        <span className="dash">—</span>
                        {project.result}
                      </span>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>

              <Button
                as={Link}
                to={backLink}
                variant="secondary"
                className="btn-primary"
              >
                Back
              </Button>
              {project.ghLink && project.ghLink !== "#" && (
                <Button href={project.ghLink} target="_blank" variant="primary">
                  GitHub
                </Button>
              )}
              {project.demoLink && project.demoLink !== "#" && (
                <Button
                  href={project.demoLink}
                  target="_blank"
                  variant="primary"
                >
                  Demo
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
