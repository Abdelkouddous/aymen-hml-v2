// this is a testimonials template file
// it is a functional component
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function RatingStars({ value, outOf = 5 }) {
  const stars = [];
  for (let i = 0; i < outOf; i++) {
    const diff = value - i;
    if (diff >= 1) {
      stars.push(<FaStar key={i} aria-hidden="true" />);
    } else if (diff > 0) {
      stars.push(<FaStar key={i} aria-hidden="true" />);
    } else {
      stars.push(
        <FaStar key={i} aria-hidden="true" style={{ color: "#FFD700" }} />
      );
    }
  }
  return (
    <span
      className="testimonial-stars"
      arialabel={`Rating : ${value} out of ${outOf}`}
    >
      {stars}
    </span>
  );
}
function Testimonials() {
  const testimonials = [
    {
      name: "C.Aymen",
      project: "E-commerce application",
      rating: 3.5,
      comment:
        "Aymen delivered a solid e-commerce MVP quickly. Great collaboration and problem-solving throughout the project!",
    },
    {
      name: "L.Bourouh",
      project: "Enterprise Incidents Declaration app",
      rating: 4,
      comment:
        "Professional and proactive. The incidents app streamlined our internal process and improved response time.",
    },
    {
      name: "Lilas Clinic",
      project: "Book Appointment app",
      rating: 4,
      comment:
        "Reliable and efficient. The appointment booking app is intuitive and has helped our patients tremendously.",
    },
  ];

  return (
    <Container fluid className="testimonials-section" id="testimonials">
      <h1 className="project-heading">
        Client <strong className="orange">Testimonials</strong>
      </h1>
      <Row className="justify-content-center">
        {testimonials.map((t, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="testimonial-card project-card-view flex-fill">
              <Card.Body>
                <Card.Title className="testimonial-author">{t.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {t.project}
                </Card.Subtitle>
                <div className="d-flex align-items-center gap-2 my-2">
                  <RatingStars value={t.rating} />
                  <span className="testimonial-rating-text">
                    {t.rating} / 5
                  </span>
                </div>
                <Card.Text className="testimonial-quote">
                  “{t.comment}”
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
