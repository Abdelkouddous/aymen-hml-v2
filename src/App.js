import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Testimonials from "./components/Testimonials/Testimonials";

// import { ToggleButton } from "react-bootstrap";
//dark mode provider

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/ai-projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
