import React from 'react';

function Experience() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Rabbit and Tortoise Technology (Software Engineer)</h3>
          <p className="text-sm text-gray-400">Nov 2022 – Sep 2023 | India</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
            <li>Built an OCR pipeline with 95% accuracy using Python, OpenCV, and PyTesseract.</li>
            <li>Engineered a speech-to-text grocery system with 98% transcription accuracy.</li>
            <li>Developed regex-based extraction for structured list generation.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Bizsol IT Services (Software Intern)</h3>
          <p className="text-sm text-gray-400">Aug 2021 – Dec 2021 | India</p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
            <li>Optimized SQL Server queries and indexing, improving performance by 40%.</li>
            <li>Created interactive dashboards for business insights.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
