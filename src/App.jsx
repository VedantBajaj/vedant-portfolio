import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-gray-800 text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <div className="bg-gradient-to-br from-slate-900 to-gray-800">
        <Projects />
        </div>
      </div>
      <div id="contact">
        <div className="bg-gradient-to-br from-cyan-900 to-gray-900">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;