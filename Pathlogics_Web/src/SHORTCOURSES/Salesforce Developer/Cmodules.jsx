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

export default function SalesforceModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Salesforce",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Salesforce Ecosystem</li>
          <li>Salesforce Editions & Licensing</li>
          <li>Cloud Computing & Multi-Tenancy</li>
          <li>Setting Up Salesforce Development Environment</li>
        </ul>
      )
    },
    {
      title: "Salesforce Administration",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>User Management & Security</li>
          <li>Profiles, Roles, and Permission Sets</li>
          <li>Workflow Rules & Process Automation</li>
          <li>Data Management & Reporting</li>
        </ul>
      )
    },
    {
      title: "Apex Programming",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Apex & SOQL</li>
          <li>Triggers & Governor Limits</li>
          <li>Asynchronous Apex & Batch Processing</li>
          <li>Unit Testing & Debugging Apex</li>
        </ul>
      )
    },
    {
      title: "Lightning Components & LWC",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Lightning Web Components (LWC) Basics</li>
          <li>Data Binding & Event Handling</li>
          <li>Lightning App Builder</li>
          <li>Component Communication & Deployment</li>
        </ul>
      )
    },
    {
      title: "Salesforce Integration",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>REST & SOAP APIs</li>
          <li>OAuth & Authentication Mechanisms</li>
          <li>Integration with Third-Party Applications</li>
          <li>Middleware & ETL Tools</li>
        </ul>
      )
    },
    {
      title: "Advanced Analytics & Reporting",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Creating Custom Reports & Dashboards</li>
          <li>Einstein Analytics Overview</li>
          <li>Data Security & Sharing</li>
          <li>Using SOQL & SOSL for Data Queries</li>
        </ul>
      )
    },
    {
      title: "Salesforce Project Implementation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>End-to-End Project Development</li>
          <li>Agile & Scrum Methodologies</li>
          <li>Deployment & Change Management</li>
          <li>Real-World Use Cases & Case Studies</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Salesforce Developer Program</h1>
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
