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
    summary: "A comprehensive patient management system that streamlines the appointment booking process. It allows patients to register, book appointments with specific doctors, and manage their health records securely.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Appwrite", "Twilio"],
    features: ["Patient Registration", "Appointment Booking", "Admin Dashboard", "SMS Notifications"],
    result: "Successfully deployed and capable of handling real-time appointment scheduling."
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
    summary: "A professional networking platform tailored for the medical industry. It connects healthcare professionals with job opportunities and allows recruiters to find qualified candidates efficiently.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    features: ["User Profiles", "Job Posting", "Application Tracking", "Real-time Chat"],
    result: "Created a functional MVP that demonstrates the core features of a niche professional network."
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
  {
    id: 4,
    title: "Esoug an E-Commerce online store",
    imgPath: "", // temporary placeholder image
    description: `Modern e-commerce web app focused on a seamless shopping experience.
      Coming soon ... `,
    ghLink: "#",
    demoLink: "#",
    isActive: true,
    summary: "A modern e-commerce platform designed to provide a seamless shopping experience. It features a clean UI, fast performance, and secure checkout.",
    technologies: ["React", "Next.js", "Stripe", "Sanity.io"],
    features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Order Tracking"],
    result: "In development, aiming for a high-performance e-commerce solution."
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
