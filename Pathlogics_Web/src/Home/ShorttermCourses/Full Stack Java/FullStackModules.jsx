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

export default function FullStackModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Full Stack Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Overview of Full Stack Development</li>
          <li>Roles & Responsibilities of a Full Stack Developer</li>
          <li>Technology Stack Overview</li>
          <li>Project Workflow & Best Practices</li>
        </ul>
      )
    },
    {
      title: "Frontend Development with React",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML, CSS, and JavaScript Basics</li>
          <li>React.js Components & State Management</li>
          <li>Routing & Forms in React</li>
          <li>REST API Integration & Hooks</li>
        </ul>
      )
    },
    {
      title: "Backend Development with Java & Spring Boot",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Core Java & Object-Oriented Programming</li>
          <li>Spring Boot Basics & MVC Architecture</li>
          <li>Building RESTful APIs with Spring Boot</li>
          <li>Database Integration with Hibernate & JPA</li>
        </ul>
      )
    },
    {
      title: "Database & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>SQL & NoSQL Databases (MySQL, MongoDB)</li>
          <li>Database Design & Optimization</li>
          <li>Version Control with Git & GitHub</li>
          <li>Cloud Deployment with AWS & Docker</li>
        </ul>
      )
    },
    {
      title: "Career Support & Placements",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Live Projects & Hands-on Training</li>
          <li>Soft Skills & Resume Building</li>
          <li>Mock Interviews & Portfolio Development</li>
          <li>100% Job Assistance & Placement Support</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">Full Stack Java Development Program</h1>
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
