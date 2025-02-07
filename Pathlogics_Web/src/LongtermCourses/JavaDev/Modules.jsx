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

export default function modules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Java Programming Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Core Java (JDK, Java SE)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures & Algorithms in Java</li>
          <li>Multithreading & Concurrency</li>
        </ul>
      )
    },
    {
      title: "Spring Framework & Spring Boot",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Spring Boot Application Development</li>
          <li>REST APIs with Spring MVC</li>
          <li>Spring Security & OAuth</li>
          <li>Database Integration (JPA, Hibernate)</li>
        </ul>
      )
    },
    {
      title: "Database Management with Java",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Relational Databases (MySQL, PostgreSQL)</li>
          <li>Database Design & Schema Modeling</li>
          <li>ORM with Hibernate & JPA</li>
          <li>Database Transactions & Optimization</li>
        </ul>
      )
    },
    {
      title: "Back-End Development with Java & Spring Boot",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building RESTful APIs with Spring Boot</li>
          <li>Service Layer & Repository Pattern</li>
          <li>Authentication & Authorization (JWT, OAuth)</li>
          <li>Microservices Architecture</li>
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
