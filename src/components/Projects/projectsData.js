// src/components/Projects/projectsData.js
import foodappPath from "../../Assets/Projects/foodapp.gif";
import pulsePath from "../../Assets/Projects/Pulse.png";
import medcareerPath from "../../Assets/Projects/medCareer.png";

export const projectsData = [
  {
    id: 1,
    imgPath: pulsePath,
    title: "Book Appointment Project",
    description:
      "Personal doctor book appointment project that shows my NextJS skills",
    ghLink: "https://github.com/Abdelkouddous/care-pulse-v1",
    demoLink: "https://pulse-hml.netlify.app/",
    isActive: true,
  },
  {
    id: 2,
    imgPath: foodappPath,
    title: "Food Recipe App",
    description:
      "A front-end application that shows recipes for food made with spoonacular API and ReactJS combined with TailWind CSS",
    ghLink: "https://github.com/Abdelkouddous/food-recipe-app",
    demoLink: "food-recipe.vercel.app",
    isActive: true,
  },
  // Commented projects can be added here with isActive: false
  {
    id: 3,
    title: "MedCareer Recruitement App",
    imgPath: medcareerPath,
    description:
      "A project similiar to LinkedIn for medical professionals recruitement",
    ghLink: "https://github.com/Abdelkouddous/00-MERN-STACK-TUT",
    demoLink: "medcareer-hml.vercel.app",
    isActive: true,
  },
];
