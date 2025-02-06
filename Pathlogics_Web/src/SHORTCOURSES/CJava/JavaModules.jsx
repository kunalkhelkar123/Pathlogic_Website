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

export default function Java6() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Introduction to Java",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Java Overview & History</li>
          <li>JVM, JRE, and JDK</li>
          <li>Setting Up Java Development Environment</li>
          <li>Basic Syntax and Data Types</li>
        </ul>
      )
    },
    {
      title: "Object-Oriented Programming in Java",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Classes & Objects</li>
          <li>Inheritance & Polymorphism</li>
          <li>Encapsulation & Abstraction</li>
          <li>Interfaces and Abstract Classes</li>
        </ul>
      )
    },
    {
      title: "Exception Handling & Multithreading",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Try-Catch Blocks & Throwing Exceptions</li>
          <li>Custom Exceptions</li>
          <li>Multithreading Basics</li>
          <li>Thread Synchronization</li>
        </ul>
      )
    },
    {
      title: "Collections Framework & Data Structures",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>List, Set, and Map Interfaces</li>
          <li>ArrayList vs LinkedList</li>
          <li>HashMap & HashSet</li>
          <li>Sorting and Searching Algorithms</li>
        </ul>
      )
    },
    {
      title: "File Handling & Java I/O",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Reading and Writing Files</li>
          <li>Serialization & Deserialization</li>
          <li>Buffered Reader & Writer</li>
          <li>Working with Streams</li>
        </ul>
      )
    },
    {
      title: "JDBC & Database Connectivity",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to JDBC</li>
          <li>Connecting Java with MySQL</li>
          <li>Executing Queries & Transactions</li>
          <li>Connection Pooling</li>
        </ul>
      )
    },
    {
      title: "Java Project Implementation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>End-to-End Application Development</li>
          <li>Agile & Scrum Methodologies</li>
          <li>Debugging & Code Optimization</li>
          <li>Real-World Use Cases & Case Studies</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Core Java Developer Program</h1>
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
