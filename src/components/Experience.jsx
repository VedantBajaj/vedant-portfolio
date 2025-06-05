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
        <h3 className="text-xl mb-4 font-semibold">Software Developer – Rabbit and Tortoise Technology Solutions</h3>
        <img
          src="/vedant-portfolio/ocr_pipeline.png"
          alt="OCR Pipeline"
          className="w-[800px] h-[400px] mb-4 rounded shadow"
        />
        <p className="text-gray-300 mt-2">
          Problem: Manual data entry from scanned documents was time-consuming and error-prone.
        </p>
        <p className="text-gray-300 mt-2">
          Solution: Developed end-to-end OCR applications including preprocessing, text detection, and recognition pipelines.
          Automated data extraction from scanned documents using PyTesseract and trained models, significantly reducing manual effort.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Python #OCR #PyTesseract #Automation #ComputerVision</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl mb-4 font-semibold">Software Developer Intern – Bizol IT Servies</h3>
        <img
          src="/vedant-portfolio/sql_dashboard.png"
          alt="SQL Dashboard"
          className="w-[800px] h-[400px] mb-4 rounded shadow"
        />
        <p className="text-gray-300 mt-2">
           Problem: Data reconciliation for business operations was inefficient.
        </p>
        <p className="text-gray-300 mt-2">
           Solution: Built SQL Server-based data reconciliation tools that significantly reduced manual workload. 
           Optimized complex queries, enhanced database performance, and designed business intelligence dashboards to support data-driven decision-making.
        </p>
        <p className="text-sm text-blue-400 mt-1">#SQL Server #Excel #Power BI #Python</p>
      </div>
    </motion.section>
  );
}

export default Experience;
