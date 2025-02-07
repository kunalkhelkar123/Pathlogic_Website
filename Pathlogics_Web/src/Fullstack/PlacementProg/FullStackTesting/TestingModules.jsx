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

export default function TestingModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Unit Testing with Jest & Mocha",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Unit Testing</li>
          <li>Writing Test Cases with Jest & Mocha</li>
          <li>Mocking & Spying in Tests</li>
          <li>Test Coverage & Best Practices</li>
        </ul>
      )
    },
    {
      title: "Integration Testing with Cypress",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up Cypress for End-to-End Testing</li>
          <li>Writing Integration Tests</li>
          <li>Handling Authentication in Tests</li>
          <li>UI Automation with Cypress</li>
        </ul>
      )
    },
    {
      title: "API Testing with Postman & Insomnia",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to API Testing</li>
          <li>Setting Up Postman & Insomnia</li>
          <li>Writing API Test Cases</li>
          <li>Testing RESTful APIs & GraphQL Endpoints</li>
        </ul>
      )
    },
    {
      title: "Test-Driven Development (TDD)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Principles of Test-Driven Development</li>
          <li>Writing Tests Before Code</li>
          <li>Refactoring & Red-Green-Refactor Cycle</li>
          <li>Tools for TDD in JavaScript</li>
        </ul>
      )
    },
    {
      title: "Performance Testing with JMeter",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Performance Testing</li>
          <li>Setting Up JMeter for Load Testing</li>
          <li>Writing Test Scenarios for Performance</li>
          <li>Analyzing Performance Results & Reports</li>
        </ul>
      )
    },
    {
      title: "Security Testing & Vulnerability Scanning",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>OWASP Top 10 Security Risks</li>
          <li>Using ZAP for Vulnerability Scanning</li>
          <li>Injection Attacks & Cross-Site Scripting (XSS)</li>
          <li>Security Best Practices for Web Apps</li>
        </ul>
      )
    },
    {
      title: "Continuous Integration & Delivery (CI/CD)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up CI/CD Pipelines for Testing</li>
          <li>Automating Unit & Integration Tests in CI</li>
          <li>Deploying to Staging & Production Environments</li>
          <li>Using GitHub Actions, Jenkins, and Travis CI</li>
        </ul>
      )
    },
    {
      title: "Mock Interviews & Placement Support",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Industry Simulation & Live Projects</li>
          <li>Mock Interviews for Testing Roles</li>
          <li>Resume Building for QA Engineers</li>
          <li>Job Assistance & Placement Guarantee</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack Testing Program</h1>
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
