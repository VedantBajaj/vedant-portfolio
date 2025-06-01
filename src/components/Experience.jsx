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
        <h3 className="text-xl font-semibold">Software Developer Intern – Bizol IT Services</h3>
        <p className="text-gray-300 mt-2">
            Engineered a SQL Server-based data integration and reconciliation system that reduced manual workload by 60%. Tuned complex queries and indexing strategies to boost database performance. Developed business intelligence dashboards for internal stakeholders, enhancing decision-making through real-time insights.
        </p>
        <p className="text-sm text-blue-400 mt-1">#SQLServer #DataIntegration #Dashboarding #PerformanceTuning #BusinessIntelligence</p>
      </div>
    </motion.section>
  );
}

export default Experience;
