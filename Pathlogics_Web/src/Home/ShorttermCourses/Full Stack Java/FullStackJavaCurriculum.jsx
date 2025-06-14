import React, { useState } from 'react';
import curriculam from "../../../assets/javacurriculam.jpg"

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
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
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white px-6 py-4 text-gray-700 leading-relaxed">{content}</div>
      </div>
    </div>
  );
};

export default function FullStackJavaCurriculum() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Core Java & OOPs",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Object-Oriented Programming Concepts</li>
          <li>Exception Handling & File I/O</li>
          <li>Collections Framework</li>
          <li>Multithreading & Memory Management</li>
        </ul>
      )
    },
    {
      title: "Frontend Technologies (HTML, CSS, JavaScript, React)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML5 & Semantic Web Design</li>
          <li>Responsive CSS & Flexbox/Grid</li>
          <li>JavaScript DOM, ES6+ Features</li>
          <li>React Basics, Components, Props, Hooks</li>
        </ul>
      )
    },
    {
      title: "Backend Development with Servlets & Spring Boot",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Servlets Lifecycle, HTTP Methods</li>
          <li>Spring Boot Annotations & REST APIs</li>
          <li>Form Handling, Validations, Exception Handling</li>
          <li>Security & Dependency Injection</li>
        </ul>
      )
    },
    {
      title: "Database & Hibernate ORM",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>MySQL Database Design & SQL Queries</li>
          <li>JDBC for Database Interaction</li>
          <li>Hibernate ORM - Entity Mapping</li>
          <li>Relationships: OneToMany, ManyToOne, Transactions</li>
        </ul>
      )
    },
    {
      title: "Project Work & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Full Stack Project: React + Spring Boot + MySQL</li>
          <li>Resume Building & GitHub Portfolio</li>
          <li>Mock Interviews & Placement Guidance</li>
          <li>Deploying Apps on Cloud or Server</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20 py-10 px-4 sm:px-6 lg:px-8">
      {/* Image section */}
      <div>
        <img className="rounded-md" src={curriculam} alt="Full Stack Java Curriculum" />
      </div>

      {/* Full Stack Java Course Section */}
      <div className="max-w-5xl mx-auto mt-[-50px] sm:mt-[0px]">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12">
          Full Stack Java Development Course in Pune Curriculum
        </h1>
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
