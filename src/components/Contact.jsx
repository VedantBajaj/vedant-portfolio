import React from 'react';

function Contact() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-4 text-gray-300">Let’s connect! Feel free to reach out for collaboration or opportunities.</p>
      <div className="space-x-4">
        <a href="mailto:Vedant.Bajaj@UTDallas.edu" className="underline">Vedant.Bajaj@UTDallas.edu</a>
        <a href="https://www.linkedin.com/in/vedant-bajaj99" target="_blank" className="underline">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
