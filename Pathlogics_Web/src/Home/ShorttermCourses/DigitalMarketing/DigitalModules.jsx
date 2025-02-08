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

export default function DigitalModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Digital Marketing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Fundamentals of Digital Marketing</li>
          <li>Understanding Online Consumer Behavior</li>
          <li>Key Digital Marketing Channels</li>
          <li>Importance of Digital Marketing in Business</li>
        </ul>
      )
    },
    {
      title: "Search Engine Optimization (SEO)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>On-page & Off-page SEO Techniques</li>
          <li>Keyword Research & Competitor Analysis</li>
          <li>SEO Tools & Metrics</li>
          <li>Content Optimization Strategies</li>
        </ul>
      )
    },
    {
      title: "Social Media Marketing (SMM)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Social Media Platforms & Strategies</li>
          <li>Paid Advertising & Organic Growth</li>
          <li>Content Creation for Social Media</li>
          <li>Analytics & Performance Measurement</li>
        </ul>
      )
    },
    {
      title: "Email Marketing & Automation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Email Campaign Design & Best Practices</li>
          <li>List Building & Segmentation</li>
          <li>Marketing Automation Tools</li>
          <li>Analytics & Conversion Tracking</li>
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
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Digital Marketing Placement Program</h1>
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