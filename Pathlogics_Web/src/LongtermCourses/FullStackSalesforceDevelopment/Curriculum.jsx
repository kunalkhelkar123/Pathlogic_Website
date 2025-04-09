import React, { useState } from 'react';
import curriculam from  "../../assets/curriculam.jpg"


const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-br from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
        onClick={onToggle}
      >
        <h3 className="text-sm  font-semibold">{title}</h3>
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
      title: "Salesforce Fundamentals & Apex Programming",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Salesforce Platform Basics</li>
          <li>Apex Syntax and Programming</li>
          <li>Triggers & Classes</li>
          <li>Data Types & Collections in Apex</li>
        </ul>
      )
    },
    {
      title: "Lightning Web Components (LWC)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to LWC</li>
          <li>Component Lifecycle</li>
          <li>Data Binding & Event Handling</li>
          <li>Building Custom Components</li>
        </ul>
      )
    },
    {
      title: "Salesforce Integration & API",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Salesforce Integration Basics</li>
          <li>REST API & SOAP API</li>
          <li>Working with External Services</li>
          <li>Integrating with Third-Party Applications</li>
        </ul>
      )
    },
    {
      title: "Salesforce Security & Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Salesforce Security Model</li>
          <li>Profile & Permission Set Configuration</li>
          <li>Testing & Debugging Apex Code</li>
          <li>Unit Testing & Code Coverage</li>
        </ul>
      )
    },
    {
      title: "Cloud Computing with Salesforce & AWS",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Cloud Concepts & Salesforce Integration</li>
          <li>Salesforce Cloud Products</li>
          <li>Working with AWS Services in Salesforce</li>
          <li>Infrastructure as Code with Salesforce</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20  py-10 px-4 sm:px-6 lg:px-8">
     {/* image section */}
        <div>
          <img className="rounded-md  " src={curriculam}></img>
        </div>
     
     
     {/* Course Curriculum section */}

      <div className="max-w-5xl mx-auto sm:mt-[0px] mt-[-50px] md:mt-[0px] lg:mt-[0px] ">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12"> Salesforce Developer Course Curriculum</h1>
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
