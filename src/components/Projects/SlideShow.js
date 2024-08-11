import React from "react";
import { Slide } from "react-slideshow-image";
import ProjectCard from "./ProjectCards";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "16px",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  padding: "16px",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const hello = (
  <ProjectCard
    imgPath="https://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png"
    title="E-Commerce Project"
    description="Personal E-Commerce project similiar to Amazon"
    ghLink="#"
    demoLink="#"
  />
);

const hello2 = (
  <ProjectCard
    imgPath="https://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png"
    title="Virtual Recruitement Project"
    description="58Jobz a project similiar to LinkedIn"
    ghLink="#"
    demoLink="#"
  />
);

const hello3 = (
  <ProjectCard
    imgPath="https://clipart-library.com/new_gallery/31-313080_coming-soon-hd-png.png"
    title="Arabic Manuscript Dating Project"
    description="This project was about creating a machine learning model
  for automatically dating ancient arabic manuscripts, it was my master's degree 
  end of studying project."
    ghLink="#"
    demoLink="#"
  />
);
const slideImages = [
  {
    url: "",
    caption: hello,
  },
  {
    url: "",
    caption: hello2,
  },
  {
    url: "",
    caption: hello3,
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide duration={2000}>
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
