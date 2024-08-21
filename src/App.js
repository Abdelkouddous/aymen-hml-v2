import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToggleButton } from "react-bootstrap";

//dark mode provider

function App() {
  const [load, upadateLoad] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  //

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === "") {
      setTheme("light");
    } else {
      setTheme("");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <Router>
      <Preloader load={load} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
