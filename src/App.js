import React, { useState, useEffect, Suspense, lazy } from "react";
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

// Lazy-load the heavy Three.js canvas so it never blocks initial render
const Scene = lazy(() => import("./components/three/Scene"));

export const ThemeContext = React.createContext(null);

function App() {
  const [load, updateLoad] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 2000);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} data-theme={theme} style={{ position: "relative", minHeight: "100vh" }}>

        {/* ── Three.js background — fixed behind all content ── */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>

        {/* ── App shell ── */}
        <Router>
          <Preloader load={load} />
          <Navbar />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Routes>
              <Route path="/"                  element={<Home />} />
              <Route path="/project"           element={<Projects />} />
              <Route path="/projects/:id"      element={<ProjectDetails />} />
              <Route path="/ai-projects/:id"   element={<ProjectDetails />} />
              <Route path="/about"             element={<About />} />
              <Route path="/resume"            element={<Resume />} />
              <Route path="/testimonials"      element={<Testimonials />} />
              <Route path="*"                  element={<Navigate to="/" />} />
            </Routes>
          </div>
          <ScrollToTop />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
