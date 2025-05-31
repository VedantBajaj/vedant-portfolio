import React from 'react';

function Skills() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Programming</h3>
          <p>Python, Java, C++</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">ML & AI</h3>
          <p>TensorFlow, Scikit-learn, NLP, OpenCV, PyTesseract</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Web & Tools</h3>
          <p>Django, REST APIs, Git, SQL Server, MySQL, Pandas</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;