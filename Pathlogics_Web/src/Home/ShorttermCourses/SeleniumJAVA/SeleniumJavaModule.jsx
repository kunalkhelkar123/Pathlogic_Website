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

export default function SeleniumJavaModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Selenium with Java",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Overview of Selenium and its Components</li>
          <li>Setting Up Java Environment for Selenium</li>
          <li>Installing WebDriver and Configuration</li>
          <li>Basic Selenium Script Execution</li>
        </ul>
      )
    },
    {
      title: "WebDriver Basics",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Locating Web Elements (ID, Name, XPath, CSS)</li>
          <li>Working with WebDriver Methods</li>
          <li>Handling Forms, Alerts, and Dropdowns</li>
          <li>Browser Navigation and Management</li>
        </ul>
      )
    },
    {
      title: "Advanced Selenium Features",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Handling Dynamic Web Elements</li>
          <li>Working with Multiple Windows & Frames</li>
          <li>File Uploads & Downloads Automation</li>
          <li>JavaScript Executor and Scrolling Techniques</li>
        </ul>
      )
    },
    {
      title: "Test Automation Frameworks",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to TestNG Framework</li>
          <li>Data-Driven Testing with Excel</li>
          <li>Page Object Model Design Pattern</li>
          <li>Framework Development Best Practices</li>
        </ul>
      )
    },
    {
      title: "Continuous Integration & Deployment",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Integrating Selenium with Jenkins</li>
          <li>Version Control with Git & GitHub</li>
          <li>Automating Test Execution in CI/CD Pipelines</li>
          <li>Reporting and Test Result Analysis</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-12">Selenium with Java Training Program</h1>
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
