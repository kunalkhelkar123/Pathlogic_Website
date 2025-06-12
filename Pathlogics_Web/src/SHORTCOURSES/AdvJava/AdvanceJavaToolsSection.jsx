import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const tools = [
  {
    title: 'JDBC (Java Database Connectivity)',
    points: [
      'Connect Java apps to MySQL, Oracle, and more',
      'Execute and manage SQL queries through Java',
      'Handle transactions and error management',
    ],
  },
  {
    title: 'Servlets',
    points: [
      'Handle form inputs and user requests',
      'Manage sessions using cookies or URL rewriting',
      'Build reusable backend components for web apps',
    ],
  },
  {
    title: 'JSP (JavaServer Pages)',
    points: [
      'Build interactive and user-friendly pages',
      'Use simple tags and Java expressions',
      'Connect seamlessly with Servlets and databases',
    ],
  },
  {
    title: 'Spring Framework (Spring Core + Spring MVC)',
    points: [
      'Set up and manage Spring Beans effortlessly',
      'Build responsive web apps with Spring MVC',
      'Handle forms, validations, and errors smoothly',
    ],
  },
  {
    title: 'Hibernate (ORM Tool)',
    points: [
      'Work with databases using little to no SQL',
      'Map classes with annotations or XML',
      'Handle data relationships like OneToMany, ManyToOne, etc.',
    ],
  },
];

const AdvanceJavaToolsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white  py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900  mb-6 text-center">
          Essential Tools Covered in the Advanced Java Course in Pune
        </h2>
        <p className="text-gray-700 dark:text-gray-900 text-sm md:text-base mb-10 text-center">
          In our Advanced Java course, you'll dive deeper into real-world application development using powerful tools and frameworks like JDBC, Servlets, JSP, Spring, and Hibernate. This course equips you with the practical skills needed to develop enterprise-level solutions and prepares you for job-ready roles in software development.
        </p>

        <div className="grid gap-6">
          {(showAll ? tools : tools.slice(0, 2)).map((tool, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-blue-700 dark:text-orange-400 mb-3">
                {tool.title}
              </h3>
              <ul className="list-disc list-inside text-gray-800 dark:text-gray-100 text-sm space-y-1">
                {tool.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-5 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white text-sm font-medium rounded-full transition"
          >
            {showAll ? 'Show Less' : 'Know More'}
            {showAll ? <ChevronUp className="ml-2 w-4 h-4" /> : <ChevronDown className="ml-2 w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvanceJavaToolsSection;
