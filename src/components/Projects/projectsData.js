// src/components/Projects/projectsData.js
// import foodappPath from "../../Assets/Projects/foodapp.gif";
import pulsePath from "../../Assets/Projects/Pulse.png";
import vitalworkPath from "../../Assets/Projects/vitalwork-connect.png";
import vitalworkResponsive from "../../Assets/Projects/vitalwork-responsive.jpg";
import vitalworkFeatures from "../../Assets/Projects/vitalwork-features.jpg";
import vitalworkHero from "../../Assets/Projects/vitalwork-hero.jpg";
import vitalworkDarkLight from "../../Assets/Projects/vitalwork-darklight.jpg";
import vitalworkTechStack from "../../Assets/Projects/vitalwork-techstack.jpg";
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
    summary: "A comprehensive patient management system that streamlines the appointment booking process. It allows patients to register, book appointments with specific doctors, and manage their health records securely.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Appwrite", "Twilio"],
    features: ["Patient Registration", "Appointment Booking", "Admin Dashboard", "SMS Notifications"],
    result: "Successfully deployed and capable of handling real-time appointment scheduling."
  },
  // Commented projects can be added here with isActive: false
  {
    id: 2,
    title: "VitalWork Connect",
    imgPath: vitalworkPath,
    description:
      "Algeria's first healthcare recruitment platform — connecting hospitals, clinics, and medical professionals across all 58 wilayas.",
    ghLink: "https://github.com/Abdelkouddous/VitalWork",
    // demoLink: "https://vitalwork.com/",
    demoLink: "https://medcareer.onrender.com/",
    isActive: true,
    summary: "A full-stack MERN platform that revolutionizes medical recruitment in Algeria. VitalWork Connect enables hospitals and clinics to post job openings, while healthcare professionals can browse opportunities filtered by specialization, location, and job type. Features include a medical blog, smart job filters, adaptive dark/light design system, and coverage across all 58 wilayas.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Smart Job Filters by Specialization",
      "Medical Blog with Categories",
      "Adaptive Dark/Light Design System",
      "60+ Open Positions across 58 Wilayas",
      "Employer & Candidate Dashboards",
      "Browse by Medical Specialization",
    ],
    result: "Live platform serving healthcare recruitment needs across Algeria with 60+ active positions.",
    gallery: [
      { src: vitalworkResponsive, caption: "Fully Responsive — Desktop & Mobile" },
      { src: vitalworkFeatures, caption: "Smart Job Filters, Specialization Browse & Medical Blog" },
      { src: vitalworkHero, caption: "VitalWork Connect — Healthcare Recruitment Platform" },
      { src: vitalworkDarkLight, caption: "Adaptive Design System — Dark & Light Modes" },
      { src: vitalworkTechStack, caption: "Full Stack MERN Architecture" },
    ],
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
    summary: "An enterprise solution for managing workplace safety and security. It includes modules for incident reporting, visitor management, and emergency response.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: ["Incident Reporting", "Visitor Management", "Emergency Alerts", "Analytics Dashboard"],
    result: "Developed a scalable and secure platform suitable for enterprise deployment."
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
