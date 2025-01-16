import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4">
      <button
        className="w-full bg-white rounded-lg shadow-md px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <svg
          className={`w-6 h-6 text-orange-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-6 py-4 rounded-b-lg shadow-md mt-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default function Accordian() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Programming for Problem-Solving",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-gray-700">Key Topics:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Algorithmic Thinking and Logic</li>
            <li>Data Structures Fundamentals</li>
            <li>Time and Space Complexity</li>
            <li>Problem-Solving Strategies</li>
            <li>Coding Best Practices</li>
          </ul>
        </div>
      )
    },
    {
      title: "Front End",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-gray-700">Technologies Covered:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Design</li>
            <li>Web Performance Optimization</li>
          </ul>
        </div>
      )
    },
    {
      title: "Database",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-gray-700">Database Systems:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>SQL Fundamentals</li>
            <li>MongoDB</li>
            <li>Database Design</li>
            <li>Data Modeling</li>
            <li>Query Optimization</li>
          </ul>
        </div>
      )
    },
    {
      title: "Back End",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-gray-700">Server-Side Development:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Node.js & Express.js</li>
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
            <li>Server Deployment</li>
            <li>Security Best Practices</li>
          </ul>
        </div>
      )
    },
    {
      title: "Low-code platform",
      content: (
        <div className="space-y-3 text-gray-600">
          <p className="font-semibold text-gray-700">Development Tools:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Visual Development Tools</li>
            <li>Rapid Prototyping</li>
            <li>Drag-and-Drop Interfaces</li>
            <li>Component Libraries</li>
            <li>Platform Integration</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Program Modules
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
  );
}