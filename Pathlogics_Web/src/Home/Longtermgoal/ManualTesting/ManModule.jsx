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

export default function ManModule() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Manual Testing Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Manual Testing</li>
          <li>Test Life Cycle</li>
          <li>Types of Testing: Functional, Non-Functional</li>
          <li>Test Planning & Reporting</li>
        </ul>
      )
    },
    {
      title: "Test Case Design",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Writing Effective Test Cases</li>
          <li>Boundary Value Analysis</li>
          <li>Equivalence Partitioning</li>
          <li>Test Case Management Tools</li>
        </ul>
      )
    },
    {
      title: "Bug Tracking & Reporting",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Identifying Bugs and Issues</li>
          <li>Using Bug Tracking Tools (Jira, Bugzilla)</li>
          <li>Bug Life Cycle</li>
          <li>Effective Reporting and Documentation</li>
        </ul>
      )
    },
    {
      title: "Test Automation Overview",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Test Automation</li>
          <li>Choosing Automation Tools</li>
          <li>Automation Scripts and Frameworks</li>
          <li>Continuous Integration & Deployment (CI/CD)</li>
        </ul>
      )
    },
    {
      title: "Performance & Security Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Load Testing & Stress Testing</li>
          <li>Security Testing Fundamentals</li>
          <li>Penetration Testing and Vulnerability Scanning</li>
          <li>Performance Testing Tools</li>
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
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Manual Testing Placement Program</h1>
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
