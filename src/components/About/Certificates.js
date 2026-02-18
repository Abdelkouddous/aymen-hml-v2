import React from "react";
import { Row, Col, Card, Modal } from "react-bootstrap";
import sml from "../../Assets/certificates/SML.png";
import nodejs from "../../Assets/certificates/nodejs.png";
import pytorch from "../../Assets/certificates/pytorch.png";
function Certificates() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCert, setSelectedCert] = React.useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const customCertificates = [
    {
      id: 1,
      title: "DeepLearning.AI",
      subtitle: "Applied Machine Learning by Andrew Ng",
      desc: "Mastered fundamental concepts of machine learning and deep learning applications.",
      img: sml,
    },
    {
      id: 2,
      title: "Linux Foundation",
      subtitle: "Introduction to Node.js",
      desc: "Gained proficiency in building scalable network applications using Node.js.",
      img: nodejs,
    },
    {
      id: 3,
      title: "Linux Foundation",
      subtitle: "DeepLearning with PyTorch",
      desc: "Developed deep learning models and neural networks using the PyTorch framework.",
      img: pytorch,
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", marginTop: "50px" }}>
      <Col md={12} className="text-center">
        <h1 className="project-heading" style={{ marginBottom: "40px" }}>
          Professional <strong className="orange">Certificates</strong>
        </h1>
        <Row style={{ justifyContent: "center", gap: "20px" }}>
          {customCertificates.map((cert) => (
            <Col md={3} className="certificate-card" key={cert.id} style={{ marginBottom: "20px" }}>
              <Card className="project-card-view h-100">
                <div
                  style={{
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => openModal(cert)}
                >
                  <Card.Img
                    variant="top"
                    src={cert.img}
                    alt="card-img"
                    style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Subtitle style={{ margin: "10px 0", fontSize: "1rem" }} className="orange">
                    {cert.subtitle}
                  </Card.Subtitle>
                  <Card.Text style={{ textAlign: "center", fontSize: "0.9em" }}>
                    {cert.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>

      {/* Modal for viewing certificate */}
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "var(--bg-color)", borderBottom: "1px solid var(--card-border)" }}>
          <Modal.Title style={{ color: "var(--text-color)" }}>
            {selectedCert?.title} - <span className="orange">{selectedCert?.subtitle}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "var(--bg-color)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {selectedCert && (
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
            />
          )}
        </Modal.Body>
      </Modal>
    </Row>
  );
}

export default Certificates;
