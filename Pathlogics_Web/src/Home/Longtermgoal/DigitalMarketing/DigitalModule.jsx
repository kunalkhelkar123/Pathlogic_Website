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

export default function DigitalModule() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Digital Marketing Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Digital Marketing</li>
          <li>Types of Digital Marketing</li>
          <li>Digital Marketing Strategy</li>
          <li>Content Creation and Planning</li>
        </ul>
      )
    },
    {
      title: "Search Engine Optimization (SEO)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>On-page SEO Techniques</li>
          <li>Off-page SEO Strategies</li>
          <li>SEO Tools & Techniques</li>
          <li>Keyword Research and Analysis</li>
        </ul>
      )
    },
    {
      title: "Social Media Marketing (SMM)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Platforms Overview: Facebook, Instagram, Twitter, etc.</li>
          <li>Building Social Media Strategies</li>
          <li>Paid Social Media Ads</li>
          <li>Engagement and Analytics</li>
        </ul>
      )
    },
    {
      title: "Email Marketing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Email Campaigns and Strategies</li>
          <li>List Building and Email Segmentation</li>
          <li>Email Copywriting and Design</li>
          <li>Email Analytics and Metrics</li>
        </ul>
      )
    },
    {
      title: "Google Ads & PPC Advertising",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Ads Setup and Management</li>
          <li>Understanding PPC Campaigns</li>
          <li>Ad Targeting and Budgeting</li>
          <li>Conversion Tracking and Analytics</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Digital Marketing Mastery Program</h1>
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
