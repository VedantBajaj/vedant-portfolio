import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold">Software Developer – Rabbit and Tortoise Technology Solutions</h3>
        <p className="text-gray-300 mt-2">
          Developed end-to-end OCR applications including preprocessing, text detection, and recognition pipelines.
          Automated data extraction from scanned documents using PyTesseract and trained models, significantly reducing manual effort.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Python #OCR #PyTesseract #Automation #ComputerVision</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold">Software Developer Intern – Bizol</h3>
        <p className="text-gray-300 mt-2">
          Contributed to scalable backend solutions for an internal logistics platform. Implemented REST APIs, optimized database queries, and supported deployment pipelines.
        </p>
        <p className="text-sm text-blue-400 mt-1">#NodeJS #Express #MongoDB #APIs #BackendDevelopment</p>
      </div>
    </motion.section>
  );
}

export default Experience;
