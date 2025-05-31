import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: "url('/tech-bg.png')" }}
      />
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I'm Vedant Bajaj
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Software Engineer | AI & ML Enthusiast
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="https://www.linkedin.com/in/vedant-bajaj99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded shadow text-sm sm:text-base"
          >
            LinkedIn
          </a>
          <a
             href="/vedant-portfolio/Vedant_Bajaj_resume.pdf"
            download
            className="inline-block px-4 py-2 border border-white hover:bg-white hover:text-black rounded text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;