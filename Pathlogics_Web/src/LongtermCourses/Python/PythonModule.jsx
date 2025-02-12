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

export default function PythonModule() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Python Programming Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Core Python (Syntax, Data Types, Functions)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures & Algorithms in Python</li>
          <li>Asynchronous Programming with Python</li>
        </ul>
      )
    },
    {
      title: "Web Development with Django & Flask",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building Web Applications with Django</li>
          <li>Flask Framework Basics</li>
          <li>REST APIs with Django & Flask</li>
          <li>Authentication & Authorization in Web Apps</li>
        </ul>
      )
    },
    {
      title: "Database Management with Python",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Relational Databases (PostgreSQL, MySQL)</li>
          <li>SQLAlchemy ORM in Python</li>
          <li>Database Transactions & Optimization</li>
          <li>Data Modeling & Database Design</li>
        </ul>
      )
    },
    {
      title: "Back-End Development with Python (Django/Flask)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building RESTful APIs with Django & Flask</li>
          <li>Microservices Architecture with Python</li>
          <li>Service Layer & Repository Pattern</li>
          <li>Real-time Web Apps with Django Channels</li>
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
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-12">Full Stack Python Programming Placement Program</h2>
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
