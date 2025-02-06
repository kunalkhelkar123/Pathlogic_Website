

import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-br from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
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

export default function WebAccording() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "HTML, CSS & JavaScript",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML5 & CSS3 Fundamentals</li>
          <li>Responsive Design & Flexbox/Grid</li>
          <li>JavaScript ES6+ & DOM Manipulation</li>
          <li>Asynchronous JavaScript & APIs</li>
        </ul>
      )
    },
    {
      title: "Front-End Development with React",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Component-Based Architecture</li>
          <li>State Management & Hooks</li>
          <li>Routing with React Router</li>
          <li>Performance Optimization & Testing</li>
        </ul>
      )
    },
    {
      title: "Back-End Development with Node.js & Express",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>RESTful APIs with Express.js</li>
          <li>Authentication & Authorization (JWT, OAuth)</li>
          <li>Database Integration (MongoDB, PostgreSQL)</li>
          <li>Deployment & Cloud Services</li>
        </ul>
      )
    },
    {
      title: "Database Management",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>SQL & NoSQL Databases</li>
          <li>Data Modeling & Schema Design</li>
          <li>ORM Tools (Mongoose, Sequelize)</li>
          <li>Database Optimization & Indexing</li>
        </ul>
      )
    },
    {
      title: "Career Support & Placements",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Live Projects & Hands-on Training</li>
          <li>Soft Skills & Resume Building</li>
          <li>Mock Interviews & Coding Challenges</li>
          <li>100% Job Assistance & Placement Support</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack Web Placement Program</h1>
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
