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
        <h3 className="text-xl font-semibold">Text Detection from Natural Scenes</h3>
        <p className="text-gray-300 mt-2">
          Built an OCR pipeline using OpenCV, PyTesseract, and deep learning techniques to detect and extract
          text from natural images. Improved detection accuracy through preprocessing and custom font training.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Python #OpenCV #OCR #PyTesseract #DeepLearning</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold">Face Mask Detection</h3>
        <p className="text-gray-300 mt-2">
          Developed a real-time face mask detection system using TensorFlow and Keras, achieving high precision.
          Integrated the system with webcam feeds to monitor mask compliance in public spaces.
        </p>
        <p className="text-sm text-blue-400 mt-1">#TensorFlow #Keras #ComputerVision #FaceDetection</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold">Exam Portal Web Application</h3>
        <p className="text-gray-300 mt-2">
          Created a full-stack examination portal using Django, allowing admin to upload exams, view student scores,
          and export analytics. Students could register, take exams, and view results.
        </p>
        <p className="text-sm text-blue-400 mt-1">#Django #MySQL #HTML #CSS #FullStack</p>
      </div>
    </motion.section>
  );
}

export default Projects;
