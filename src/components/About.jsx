import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-300">
        I'm a Computer Engineering graduate student at the University of Texas at Dallas, passionate about
        building intelligent systems that automate tasks and enhance user experiences. With experience in
        machine learning, OCR, and full-stack development, I aim to develop practical AI-driven applications.
      </p>
    </motion.section>
  );
}

export default About;
