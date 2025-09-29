import React from "react";
import "./sections/Navbar";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Background />
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
