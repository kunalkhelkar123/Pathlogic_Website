import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-r from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
        onClick={onToggle}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white px-6 py-4 text-gray-700 leading-relaxed">{content}</div>
      </div>
    </div>
  );
};

export default function AiModule() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "AI Programming Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to AI & ML Concepts</li>
          <li>Python Programming Basics</li>
          <li>Core Data Structures for AI</li>
          <li>Mathematics for AI (Linear Algebra, Calculus)</li>
        </ul>
      )
    },
    {
      title: "Machine Learning with Python",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Supervised and Unsupervised Learning</li>
          <li>Working with Scikit-learn for ML</li>
          <li>Model Evaluation & Hyperparameter Tuning</li>
          <li>Building and Training ML Models</li>
        </ul>
      )
    },
    {
      title: "Deep Learning with Neural Networks",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Neural Networks</li>
          <li>Deep Learning Frameworks (TensorFlow, Keras)</li>
          <li>Training Neural Networks</li>
          <li>Convolutional Neural Networks (CNN)</li>
        </ul>
      )
    },
    {
      title: "Natural Language Processing (NLP)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Text Preprocessing Techniques</li>
          <li>Working with NLP Libraries (NLTK, spaCy)</li>
          <li>Text Classification & Sentiment Analysis</li>
          <li>Building NLP Models</li>
        </ul>
      )
    },
    {
      title: "AI Project & Portfolio Building",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Develop Real-World AI Projects</li>
          <li>Working with Datasets and APIs</li>
          <li>Showcasing Your Projects on GitHub</li>
          <li>Creating a Professional AI Portfolio</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-12">AI Development Program</h1>
        <div className="space-y-6">
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              title={module.title}
              content={module.content}
              isOpen={openSection === index}
              onToggle={() => setOpenSection(openSection === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
