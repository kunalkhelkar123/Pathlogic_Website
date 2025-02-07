import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-r from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-teal-600 hover:to-gray-800 transition-all duration-300"
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

export default function DigitalMModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Search Engine Optimization (SEO)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to SEO</li>
          <li>On-Page & Off-Page Optimization</li>
          <li>Keyword Research & Content Strategy</li>
          <li>Technical SEO & Website Performance</li>
        </ul>
      )
    },
    {
      title: "Social Media Marketing (SMM)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building a Social Media Strategy</li>
          <li>Facebook, Instagram, LinkedIn & Twitter Marketing</li>
          <li>Social Media Advertising & Retargeting</li>
          <li>Community Engagement & Growth</li>
        </ul>
      )
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Ads & Bing Ads Fundamentals</li>
          <li>Campaign Setup & Optimization</li>
          <li>Retargeting & Conversion Tracking</li>
          <li>ROI Analysis & Performance Metrics</li>
        </ul>
      )
    },
    {
      title: "Content Marketing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Creating High-Quality Content</li>
          <li>Blogging & Video Marketing Strategies</li>
          <li>Storytelling & Brand Voice Development</li>
          <li>Content Distribution & Promotion</li>
        </ul>
      )
    },
    {
      title: "Email Marketing Automation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building Email Lists & Lead Nurturing</li>
          <li>Creating High-Converting Email Campaigns</li>
          <li>Automation Tools (Mailchimp, HubSpot, ActiveCampaign)</li>
          <li>Email Analytics & Optimization</li>
        </ul>
      )
    },
    {
      title: "Affiliate & Influencer Marketing",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Affiliate Marketing</li>
          <li>Partnering with Influencers</li>
          <li>Affiliate Networks & Revenue Models</li>
          <li>Tracking Performance & Commissions</li>
        </ul>
      )
    },
    {
      title: "Web Analytics & Performance Tracking",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Google Analytics & Tag Manager</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Data-Driven Decision Making</li>
          <li>Heatmaps & User Behavior Analysis</li>
        </ul>
      )
    },
    {
      title: "Online Reputation Management (ORM)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Monitoring Brand Mentions & Reviews</li>
          <li>Handling Negative Feedback & Crises</li>
          <li>Building a Positive Online Presence</li>
          <li>Leveraging PR & Brand Awareness Strategies</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack Digital Marketing Program</h1>
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
