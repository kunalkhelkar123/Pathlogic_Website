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

export default function ModulesNode() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Node.js",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>What is Node.js?</li>
          <li>Node.js Architecture</li>
          <li>Event Loop & Non-blocking I/O</li>
          <li>Building Basic Applications</li>
        </ul>
      )
    },
    {
      title: "Express.js Framework",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up Express</li>
          <li>Creating Routes & Middleware</li>
          <li>Handling Requests & Responses</li>
          <li>Building REST APIs with Express</li>
        </ul>
      )
    },
    {
      title: "Asynchronous Programming in Node.js",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Callbacks</li>
          <li>Promises & Async/Await</li>
          <li>Handling Errors in Asynchronous Code</li>
          <li>Working with Event Emitters</li>
        </ul>
      )
    },
    {
      title: "Database Integration (MongoDB & MySQL)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up MongoDB with Mongoose</li>
          <li>CRUD Operations with MongoDB</li>
          <li>Connecting MySQL with Node.js</li>
          <li>Building SQL Queries with Node.js</li>
        </ul>
      )
    },
    {
      title: "Authentication & Security",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>JWT Authentication</li>
          <li>Passport.js Authentication</li>
          <li>Securing REST APIs</li>
          <li>Protecting Routes and User Sessions</li>
        </ul>
      )
    },
    {
      title: "Error Handling & Debugging",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Handling Errors in Node.js</li>
          <li>Debugging Node.js Applications</li>
          <li>Using Logging Libraries</li>
          <li>Node.js DevTools for Debugging</li>
        </ul>
      )
    },
    {
      title: "Testing Node.js Applications",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Unit Testing with Mocha & Chai</li>
          <li>Integration Testing with Supertest</li>
          <li>Mocking Dependencies</li>
          <li>Test-Driven Development in Node.js</li>
        </ul>
      )
    },
    {
      title: "Deployment & Best Practices",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Deploying Node.js Applications to Heroku</li>
          <li>Using Docker for Containerization</li>
          <li>Performance Optimization in Node.js</li>
          <li>CI/CD Pipelines for Node.js Projects</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12"> Node.JS Developer Program</h1>
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
