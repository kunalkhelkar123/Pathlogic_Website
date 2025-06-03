import React, { useState } from 'react';
import curriculam from "../../assets/curriculam.jpg";

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

export default function Accordian() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Python Basics & Object-Oriented Programming",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Python</li>
          <li>Data Types, Variables, and Operators</li>
          <li>Control Flow & Loops</li>
          <li>Functions and Modules</li>
          <li>Object-Oriented Concepts in Python</li>
        </ul>
      )
    },
    {
      title: "Frontend Development (HTML, CSS, JavaScript)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML5 Structure & Semantic Tags</li>
          <li>CSS Styling, Flexbox & Grid</li>
          <li>JavaScript Basics & DOM Manipulation</li>
          <li>Responsive Web Design</li>
        </ul>
      )
    },
    {
      title: "React.js for Frontend Applications",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>JSX & Component Structure</li>
          <li>Props, State & Lifecycle</li>
          <li>React Hooks & Routing</li>
          <li>Working with APIs in React</li>
        </ul>
      )
    },
    {
      title: "Backend Development with Django",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Django Framework</li>
          <li>Models, Views, and Templates</li>
          <li>Django REST Framework</li>
          <li>Authentication & Permissions</li>
        </ul>
      )
    },
    {
      title: "Databases, API Integration & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Working with SQL and MongoDB</li>
          <li>Building & Testing REST APIs</li>
          <li>Version Control with Git & GitHub</li>
          <li>Deployment on Heroku/Vercel & AWS Basics</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20 py-10 px-4 sm:px-6 lg:px-8">
      {/* image section */}
      <div>
        <img className="rounded-md" src={curriculam} alt="Course Curriculum" />
      </div>

      {/* Course Curriculum section */}
      <div className="max-w-5xl mx-auto sm:mt-[0px] mt-[-50px] md:mt-[0px] lg:mt-[0px]">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12">
          Full Stack Python Development Curriculum
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
