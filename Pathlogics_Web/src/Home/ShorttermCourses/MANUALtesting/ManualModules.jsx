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

export default function ManualModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Manual Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Basics of Manual Testing</li>
          <li>Software Testing Life Cycle (STLC)</li>
          <li>Roles & Responsibilities of a Tester</li>
          <li>Test Planning & Documentation</li>
        </ul>
      )
    },
    {
      title: "Test Case Design Techniques",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Equivalence Partitioning & Boundary Value Analysis</li>
          <li>Decision Table & State Transition Testing</li>
          <li>Use Case & Exploratory Testing</li>
          <li>Test Case Writing Best Practices</li>
        </ul>
      )
    },
    {
      title: "Defect Life Cycle & Bug Reporting",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Defect Life Cycle</li>
          <li>Bug Tracking Tools (JIRA, Bugzilla)</li>
          <li>Effective Bug Reporting</li>
          <li>Severity vs Priority in Defect Management</li>
        </ul>
      )
    },
    {
      title: "Types of Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Functional & Non-Functional Testing</li>
          <li>Regression & Retesting</li>
          <li>Smoke & Sanity Testing</li>
          <li>UAT & Alpha-Beta Testing</li>
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
