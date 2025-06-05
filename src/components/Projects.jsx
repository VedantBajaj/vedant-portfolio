import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="mb-10">
        <h3 className="text-xl mb-4 font-semibold">Data Analysis Pipeline</h3>
        <img
          src="/vedant-portfolio/data_pipeline.png"
          alt="Data Analysis Pipeline"
          className="w-[800px] h-[400px] mb-4 rounded shadow"
        />
        <p className="text-gray-300 mt-2">
          Problem: Handling raw and messy data slowed down the analysis process for large datasets.
        </p>
        <p className="text-gray-300 mt-2">
          Solution: Designed and implemented a robust data processing pipeline that automates data cleaning, transformation, and analysis using Python and Pandas. 
          Improved dataset readiness and enabled streamlined exploratory data analysis.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Python #Pandas #NumPy #Matplotlib #Seaborn</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl mb-4 font-semibold">Face Mask Detection</h3>
        <img
          src="/vedant-portfolio/face_mask_detection.png"
          alt="Face Mask Detection"
          className="w-[800px] h-[400px] mb-4 rounded shadow"
        />
        <p className="text-gray-300 mt-2">
          Problem: Manual monitoring of mask compliance in public spaces lacked scalability.
        </p>
        <p className="text-gray-300 mt-2">
          Solution: Developed a real-time face mask detection system using TensorFlow and Keras, achieving high precision.
          Integrated the system with webcam feeds to monitor mask compliance in public spaces.
        </p>
        <p className="text-sm text-blue-400 mt-1">#TensorFlow #Keras #ComputerVision #FaceDetection #OpenCV #CNN</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl mb-4 font-semibold">Smart Glasses</h3>
        <img
          src="/vedant-portfolio/smart_glasses.png"
          alt="Smart Glasses"
          className="w-[800px] h-[400px] mb-4 rounded shadow"
        />
        <p className="text-gray-300 mt-2">
          Problem: Drivers often lack real-time alerts and location-based communication tool.
        </p>
        <p className="text-gray-300 mt-2">
          Solution: Built smart glasses using Arduino Uno, GSM, GPS, and OLED displays to provide real-time location tracking and driving safety alerts. 
          Optimized communication modules to enhance responsiveness and achieved 98% message delivery accuracy.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Raspberry Pi #Aurdino Uno #Python #GSM Module #GPS Module</p>
      </div>
    </motion.section>
  );
}

export default Projects;
