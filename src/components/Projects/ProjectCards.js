import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import homeMain from "../../Assets/home-main.svg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view ">
      <Card.Img
        variant="top"
        src={props.imgPath || homeMain}
        alt={props.title || "Project"}
        onError={(e) => {
          e.currentTarget.src = homeMain;
        }}
        style={{ margin: "auto", maxWidth: "55%", maxHeight: "50%" }}
      />
      <Card.Body className="hero-appear align-items-center">
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
