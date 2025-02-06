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

export default function AdvModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to React.js",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>What is React?</li>
          <li>JSX Syntax</li>
          <li>Components & Props</li>
          <li>State & Lifecycle Methods</li>
        </ul>
      )
    },
    {
      title: "React Hooks",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding useState</li>
          <li>useEffect for Side Effects</li>
          <li>useContext for Global State</li>
          <li>Custom Hooks</li>
        </ul>
      )
    },
    {
      title: "React Router",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up React Router</li>
          <li>Dynamic Routing</li>
          <li>Protected Routes</li>
          <li>Nested Routes</li>
        </ul>
      )
    },
    {
      title: "State Management",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Using Redux Toolkit</li>
          <li>React Context API</li>
          <li>Managing Global State</li>
          <li>Asynchronous State with Redux Thunk</li>
        </ul>
      )
    },
    {
      title: "Performance Optimization",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>React.memo for Component Memoization</li>
          <li>useCallback & useMemo</li>
          <li>Lazy Loading & Code Splitting</li>
          <li>Optimizing Renders</li>
        </ul>
      )
    },
    {
      title: "Testing & Debugging",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Unit Testing with Jest</li>
          <li>React Testing Library</li>
          <li>Debugging in Chrome DevTools</li>
          <li>Performance Profiling</li>
        </ul>
      )
    },
    {
      title: "Final React Project",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building a Full-Stack React App</li>
          <li>Integrating REST APIs</li>
          <li>Deploying with Vercel & Netlify</li>
          <li>Implementing Authentication</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Advanced React.js Developer Program</h1>
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
