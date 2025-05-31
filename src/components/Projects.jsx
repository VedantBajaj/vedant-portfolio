import React from 'react';

function Projects() {
  return (
    <section className="px-6 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Face Mask Detection</h3>
          <p className="mt-2 text-gray-300">Built a real-time monitoring system using MobileNetV2 & Haar Cascades with 96% accuracy.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Smart Glasses for Safety</h3>
          <p className="mt-2 text-gray-300">Integrated GSM, GPS & OLED on Arduino Uno to provide real-time driving alerts.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded shadow">
          <h3 className="text-xl font-semibold">ETL Data Pipeline</h3>
          <p className="mt-2 text-gray-300">Developed large-scale data pipelines using Pandas and NumPy for business analytics.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;