import React from "react";
import { Slide } from "react-slideshow-image";
import ProjectCard from "./ProjectCards";
import "react-slideshow-image/dist/styles.css";
import Button from "react-bootstrap/Button";
import path from "../../Assets/Projects/foodapp.gif";
import pulsePath from "../../Assets/Projects/Pulse.png";
// import { VerticalAlignBottom } from "@mui/icons-material";

const spanStyle = {
  padding: "3px",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  padding: "12px",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  maxWidth: "75%",
  margin: "auto",
  // backgroundColor: "darkblue",
};
const project = (
  <ProjectCard
    imgPath={pulsePath}
    title="Book Appointment Project"
    description="Personal doctor book appointment project that shows my NextJS skills"
    ghLink="https://github.com/Abdelkouddous/care-pulse-v1"
    demoLink="https://pulse-hml.netlify.app/"
  />
);

// const project2 = (
//   <ProjectCard
//     imgPath="https://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png"
//     title="Virtual Recruitement Project"
//     description="58Jobz a project similiar to LinkedIn"
//     ghLink="#"
//     demoLink="#"
//   />
// );

// const project3 = (
//   <ProjectCard
//     imgPath="https://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png"
//     title="Arabic Manuscript Dating Project"
//     description="This project was about creating a machine learning model
//   for automatically dating ancient arabic manuscripts, it was my master's degree
//   end of studying project."
//     ghLink="#"
//     demoLink="#"
//   />
// );

const project4 = (
  <ProjectCard
    imgPath={path}
    title="Food recipe app"
    description="A front-end application that shows recipes for food
    made with spoonacular API and ReactJS combined with TailWind CSS"
    ghLink="https://github.com/Abdelkouddous/food-recipe-app"
    demoLink="#"
  />
);
const slideImages = [
  {
    url: "",
    caption: project,
  },
  // {
  //   url: "",
  //   caption: project2,
  // },
  // {
  //   url: "",
  //   caption: project3,
  // },
  {
    url: "",
    caption: project4,
  },
];
//custom arrow buttons
const buttonStyle = {
  width: "32px",
  height: "32px",
  background: "transparent",
  border: "0px",
};

const properties = {
  prevArrow: (
    <Button style={{ ...buttonStyle }} className="fork-btn2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffc">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </Button>
  ),
  nextArrow: (
    <Button style={{ ...buttonStyle }} className="fork-btn2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffc">
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </Button>
  ),
};
//
const SlideShow = () => {
  return (
    <div className="slide-container fade-bottom  ">
      <Slide {...properties} duration={2000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
