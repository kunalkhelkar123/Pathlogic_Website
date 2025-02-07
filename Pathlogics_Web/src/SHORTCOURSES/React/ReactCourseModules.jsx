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

export default function ReactCourseModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to React.JS",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding React.js Ecosystem</li>
          <li>Setting Up Development Environment</li>
          <li>JSX and Virtual DOM</li>
          <li>Building Your First React App</li>
        </ul>
      )
    },
    {
      title: "React Components & Props",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Functional vs Class Components</li>
          <li>Passing and Using Props</li>
          <li>Reusable Component Patterns</li>
          <li>Conditional Rendering</li>
        </ul>
      )
    },
    {
      title: "State Management in React",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Using useState and useEffect</li>
          <li>Context API & Redux</li>
          <li>Managing Global State</li>
          <li>Performance Optimizations</li>
        </ul>
      )
    },
    {
      title: "React Router & Navigation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>React Router Basics</li>
          <li>Route Parameters and Navigation</li>
          <li>Protected Routes & Authentication</li>
          <li>Dynamic Routing & Lazy Loading</li>
        </ul>
      )
    },
    {
      title: "Networking & APIs",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Fetching Data with Fetch & Axios</li>
          <li>Handling Authentication & Authorization</li>
          <li>Working with GraphQL</li>
          <li>WebSockets & Real-Time Data</li>
        </ul>
      )
    },
    {
      title: "Debugging & Performance Optimization",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Using React DevTools</li>
          <li>Profiling & Performance Tuning</li>
          <li>Memory Management</li>
          <li>Code Splitting & Lazy Loading</li>
        </ul>
      )
    },
    {
      title: "Deploying React Apps",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building for Production</li>
          <li>Hosting on Vercel, Netlify, and Firebase</li>
          <li>CI/CD for React Applications</li>
          <li>Handling Environment Variables</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">React.JS Developer Program</h1>
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
