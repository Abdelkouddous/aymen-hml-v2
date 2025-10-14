// src/components/Projects/projectsData.js
// import foodappPath from "../../Assets/Projects/foodapp.gif";
import pulsePath from "../../Assets/Projects/Pulse.png";
import medcareerPath from "../../Assets/Projects/medCareer.png";
import prosafePath from "../../Assets/Projects/prosafe.png";
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
  // Commented projects can be added here with isActive: false
  {
    id: 2,
    title: "MedCareer Recruitement App",
    imgPath: medcareerPath,
    description:
      "A project similiar to LinkedIn for medical professionals recruitement",
    ghLink: "https://github.com/Abdelkouddous/MedCareer",
    demoLink: "https://medcareer.onrender.com/",
    isActive: true,
  },
  {
    id: 3,
    title: " Prosafe ",
    imgPath: prosafePath,
    description:
      "PROSAFE is a comprehensive enterprise-grade safety and security management platform designed for modern workplaces. ",
    ghLink: "https://github.com/Abdelkouddous/prosafe",
    demoLink: "https://prosafe-admin-psi.vercel.app/",
    isActive: true,
  },
  {
    id: 4,
    title: "Esoug an E-Commerce online store",
    imgPath: "", // temporary placeholder image
    description: `Modern e-commerce web app focused on a seamless shopping experience.
      Coming soon ... `,
    ghLink: "#",
    demoLink: "#",
    isActive: true,
  },
  // ... existing code ...
  {
    //   id :4,
    // title: "Soog"
    // imgPath:soogPath,
    // description:"A e-commerce project featuring a modern and user-friendly interface, with a focus on providing a seamless shopping experience for customers.",
    // ghLink:"https://github.com/Abdelkouddous/soog",
    // demoLink:"https://soog.vercel.app/",
    // isActive: true,
  },
];
