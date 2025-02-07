import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-r from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-teal-600 hover:to-gray-800 transition-all duration-300"
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

export default function WebModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "HTML, CSS & JavaScript",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML5 & Semantic Markup</li>
          <li>CSS3, Flexbox & Grid</li>
          <li>JavaScript (ES6+), DOM Manipulation</li>
          <li>Responsive Design & Bootstrap/Tailwind</li>
        </ul>
      )
    },
    {
      title: "React.js & Front-End Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>React Components & Props</li>
          <li>State Management with Hooks</li>
          <li>Routing with React Router</li>
          <li>API Integration & Context API</li>
        </ul>
      )
    },
    {
      title: "Node.js & Express.js (Back-End)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Node.js Basics & Package Management (npm)</li>
          <li>Building RESTful APIs with Express.js</li>
          <li>Middleware & Authentication (JWT)</li>
          <li>Error Handling & Performance Optimization</li>
        </ul>
      )
    },
    {
      title: "Databases: MongoDB & SQL",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to NoSQL & SQL Databases</li>
          <li>MongoDB CRUD Operations & Mongoose</li>
          <li>SQL Database Design & Joins</li>
          <li>Database Security & Indexing</li>
        </ul>
      )
    },
    {
      title: "DevOps & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Version Control with Git & GitHub</li>
          <li>CI/CD Pipelines & Deployment</li>
          <li>Hosting on Vercel, Netlify, & AWS</li>
          <li>Docker & Containerization</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack Web Development Program</h1>
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
