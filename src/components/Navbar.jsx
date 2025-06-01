import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-90 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Vedant</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;