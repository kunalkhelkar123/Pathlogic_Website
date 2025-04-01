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
      title: "Front End Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js & Modern UI Frameworks</li>
          <li>Responsive Design & Web Performance</li>
        </ul>
      )
    },
    {
      title: "Back End Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Node.js & Express.js</li>
          <li>Building RESTful APIs</li>
          <li>Authentication & Authorization</li>
          <li>Server Deployment & Security</li>
        </ul>
      )
    },
    {
      title: "Problem Solving & Algorithms",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Algorithmic Thinking</li>
          <li>Data Structures Fundamentals</li>
          <li>Time & Space Complexity</li>
          <li>Problem-Solving Strategies</li>
        </ul>
      )
    },
    {
      title: "Database Management",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>SQL Fundamentals & NoSQL (MongoDB)</li>
          <li>Database Design & Schema Modeling</li>
          <li>Data Indexing & Query Optimization</li>
          <li>Transactions & Database Security</li>
        </ul>
      )
    },
    {
      title: "Low-Code Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Visual Development Tools</li>
          <li>Rapid Prototyping Techniques</li>
          <li>Drag-and-Drop UI Builders</li>
          <li>Platform Integration & Automation</li>
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
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12"> Full Stack Web Development Course Curriculum</h1>
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
