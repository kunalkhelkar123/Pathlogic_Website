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

export default function Power() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Power BI",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Overview of Power BI and its components</li>
          <li>Installing and setting up Power BI Desktop</li>
          <li>Understanding the Power BI service</li>
          <li>Exploring the Power BI interface</li>
        </ul>
      )
    },
    {
      title: "Data Import and Transformation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Connecting to various data sources</li>
          <li>Data transformation using Power Query</li>
          <li>Cleaning and shaping data</li>
          <li>Creating data models</li>
        </ul>
      )
    },
    {
      title: "Data Visualization and Reporting",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building interactive reports</li>
          <li>Using different types of visualizations</li>
          <li>Customizing dashboards</li>
          <li>Applying filters and slicers</li>
        </ul>
      )
    },
    {
      title: "DAX (Data Analysis Expressions)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to DAX formulas</li>
          <li>Creating calculated columns and measures</li>
          <li>Using aggregation functions</li>
          <li>Time intelligence functions</li>
        </ul>
      )
    },
    {
      title: "Power BI Deployment and Sharing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Publishing reports to the Power BI Service</li>
          <li>Sharing dashboards with stakeholders</li>
          <li>Setting up Power BI gateways</li>
          <li>Security and permissions management</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Power BI Placement Program</h1>
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
