import React, { useState } from 'react';
import curriculam from "../../../assets/curriculam.jpg";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
    <button
      className="w-full bg-gradient-to-br from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
      onClick={onToggle}
    >
      <h3 className="text-sm font-semibold">{title}</h3>
      <svg
        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="bg-white px-6 py-4 text-gray-700 leading-relaxed">{content}</div>
    </div>
  </div>
);

export default function SoftwareTestingAccordion() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Data Science",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Data Science & Its Applications</li>
          <li>Role of Python in Data Science</li>
          <li>Data Science Workflow & Tools</li>
          <li>Real-World Use Cases</li>
        </ul>
      )
    },
    {
      title: "Python for Data Science",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Python Basics & Syntax</li>
          <li>Data Structures & Libraries (NumPy, Pandas)</li>
          <li>Data Manipulation & Cleaning</li>
          <li>Working with Jupyter Notebooks</li>
        </ul>
      )
    },
    {
      title: "Data Visualization & Analysis",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Matplotlib & Seaborn for Visualization</li>
          <li>Insights from Data</li>
          <li>Building Interactive Dashboards</li>
        </ul>
      )
    },
    {
      title: "Machine Learning Basics",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Supervised & Unsupervised Learning</li>
          <li>Regression & Classification Models</li>
          <li>Scikit-Learn for ML</li>
          <li>Model Evaluation & Performance Metrics</li>
        </ul>
      )
    },
    {
      title: "Capstone Project & Career Support",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Real-World Data Science Projects</li>
          <li>Resume & Portfolio Building</li>
          <li>Interview Preparation & Mock Sessions</li>
          <li>Job Placement Assistance</li>
        </ul>
      )
    }
  ];
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={curriculam}
            alt="Software Testing Curriculum"
            className="rounded-xl shadow-lg w-full object-cover pt-14"
          />
        </div>

        {/* Accordion */}
        <div>
          <h1 className="text-3xl font-extrabold text-orange-600 mb-8 text-center md:text-left">
            Pathlogics Software Testing Syllabus
          </h1>
          <div className="space-y-4">
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
    </div>
  );
}
