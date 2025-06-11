import React, { useState } from 'react';
import curriculam from "../../assets/curriculam.jpg";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
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
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="bg-white px-6 py-4 text-gray-700 leading-relaxed">{content}</div>
    </div>
  </div>
);

export default function DotNetAccordion() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to .NET Core",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding the .NET Ecosystem</li>
          <li>.NET Framework vs .NET Core vs .NET 5/6</li>
          <li>Installing SDK & CLI</li>
          <li>Creating Your First Console Application</li>
        </ul>
      )
    },
    {
      title: "C# Programming Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Data Types, Variables, and Operators</li>
          <li>Control Structures & Loops</li>
          <li>Object-Oriented Concepts</li>
          <li>Exception Handling</li>
        </ul>
      )
    },
    {
      title: "Working with ASP.NET Core",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding MVC Architecture</li>
          <li>Controllers, Views, and Models</li>
          <li>Routing and Middleware</li>
          <li>Dependency Injection</li>
        </ul>
      )
    },
    {
      title: "Entity Framework Core",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Code-First vs Database-First</li>
          <li>CRUD Operations with EF Core</li>
          <li>LINQ Queries</li>
          <li>Data Migrations</li>
        </ul>
      )
    },
    {
      title: "RESTful APIs with ASP.NET Core",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Creating Web APIs</li>
          <li>Routing and API Endpoints</li>
          <li>JWT Authentication & Authorization</li>
          <li>Postman Testing & Swagger</li>
        </ul>
      )
    },
    {
      title: "Frontend Integration & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Calling APIs from React/Angular</li>
          <li>Consuming JSON Data</li>
          <li>Deploying to IIS, Azure, or Linux Server</li>
          <li>Dockerizing .NET Core Apps</li>
        </ul>
      )
    },
    {
      title: "Advanced Topics & Best Practices",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Logging & Error Handling</li>
          <li>Unit Testing with xUnit</li>
          <li>Clean Architecture Principles</li>
          <li>Performance Tuning</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img src={curriculam} alt="Dot Net Core Curriculum" className="rounded-xl shadow-lg w-full object-cover pt-14" />
        </div>

        {/* Accordion */}
        <div>
          <h1 className="text-3xl font-extrabold text-orange-600 mb-8 text-center md:text-left">
            Pathlogics .NET Core Syllabus
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
    </div>
  );
}
