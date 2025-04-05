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
      title: "Introduction to Software Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Fundamentals of Software Testing</li>
          <li>Software Development Life Cycle (SDLC)</li>
          <li>Role of Testing in SDLC</li>
          <li>Types of Software Testing</li>
        </ul>
      )
    },
    {
      title: "Manual Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Test Planning, Design, and Execution</li>
          <li>Defect Life Cycle and Reporting</li>
          <li>Test Case Development and Management</li>
          <li>Exploratory and Ad-hoc Testing</li>
        </ul>
      )
    },
    {
      title: "Automation Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Automation Tools</li>
          <li>Selenium WebDriver Basics</li>
          <li>Automation Framework Design</li>
          <li>Continuous Integration with Jenkins</li>
        </ul>
      )
    },
    {
      title: "Performance Testing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Performance Testing Concepts</li>
          <li>Using JMeter for Load Testing</li>
          <li>Analyzing Performance Metrics</li>
          <li>Optimizing System Performance</li>
        </ul>
      )
    },
    {
      title: "Career Support & Placements",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Live Projects & Hands-on Experience</li>
          <li>Resume Building & Interview Preparation</li>
          <li>Mock Interviews & Technical Assessments</li>
          <li>Job Placement Assistance</li>
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
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12"> Software Testing Course Curriculum</h1>
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
