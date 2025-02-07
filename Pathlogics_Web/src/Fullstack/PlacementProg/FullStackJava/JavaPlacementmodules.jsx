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

export default function JavaPlacementModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Core Java & Object-Oriented Programming",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Java Basics & OOP Concepts</li>
          <li>Exception Handling & Multi-threading</li>
          <li>Collections & Data Structures</li>
          <li>Lambda Expressions & Streams API</li>
        </ul>
      )
    },
    {
      title: "Front-End Development with React",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML, CSS, and JavaScript (ES6+)</li>
          <li>React.js & Component-Based Architecture</li>
          <li>State Management & Hooks</li>
          <li>API Integration & Performance Optimization</li>
        </ul>
      )
    },
    {
      title: "Database Management",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>SQL & Relational Databases (MySQL, PostgreSQL)</li>
          <li>MongoDB & NoSQL Databases</li>
          <li>Database Design & Normalization</li>
          <li>ORM Tools (Hibernate, JPA)</li>
        </ul>
      )
    },
    {
      title: "Back-End Development with Spring Boot",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Spring Framework & Dependency Injection</li>
          <li>Spring Boot & RESTful APIs</li>
          <li>Microservices Architecture</li>
          <li>Authentication & Security (JWT, OAuth)</li>
        </ul>
      )
    },
    {
      title: "Placement & Career Support",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Live Industry Projects & Internships</li>
          <li>Soft Skills & Interview Preparation</li>
          <li>Resume Building & Mock Interviews</li>
          <li>100% Job Assistance & Placement Guarantee</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack Java Placement Program</h1>
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
