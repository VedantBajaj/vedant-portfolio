import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">Hi, I'm Vedant Bajaj</h1>
      <p className="mt-4 text-xl text-gray-300">Software Engineer | AI & ML Enthusiast</p>
      <div className="mt-6 space-x-4">
        <a
          href="https://www.linkedin.com/in/vedant-bajaj99"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded shadow"
        >
          LinkedIn
        </a>
        <a
          href="/Vedant_Bajaj_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;