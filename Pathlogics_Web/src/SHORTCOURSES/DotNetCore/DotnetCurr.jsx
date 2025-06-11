import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: 'Visual Studio',
    description:
      'Visual Studio is the primary IDE used in Dot Net Core development. It offers a robust, user-friendly environment for writing, debugging, and testing code efficiently.',
    points: [
      'Feature-rich code editor',
      'Integrated debugger and diagnostics',
      'Built-in support for .NET Core projects',
    ],
  },
  {
    title: 'Entity Framework Core',
    description:
      'Entity Framework Core is an ORM (Object-Relational Mapper) that simplifies database interactions. It allows developers to work with data using C# objects instead of SQL queries.',
    points: [
      'Simplifies data access',
      'Reduces boilerplate code',
      'Supports code-first and database-first approaches',
    ],
  },
  {
    title: 'ASP.NET Core',
    description:
      'ASP.NET Core is the backbone of modern web development using .NET. It’s a fast, modular, and cross-platform framework for building dynamic websites, REST APIs, and services.',
    points: [
      'Lightweight and high-performance',
      'Cross-platform support',
      'Ideal for scalable web applications',
    ],
  },
  {
    title: 'LINQ (Language Integrated Query)',
    description:
      'LINQ allows you to write structured queries directly in C# for managing collections and interacting with databases. It improves code readability and reduces the need for raw SQL.',
    points: [
      'Simplified data manipulation',
      'Query collections with minimal code',
      'Works with in-memory and database data',
    ],
  },
  {
    title: 'Dependency Injection',
    description:
      'Dependency Injection (DI) is a key feature in ASP.NET Core that helps manage object dependencies, making your code more modular, testable, and maintainable.',
    points: [
      'Promotes clean architecture',
      'Improves code reusability and testing',
      'Built-in support in ASP.NET Core',
    ],
  },
];

const DotNetTools = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleTools = showMore ? toolsData : toolsData.slice(0, 2);

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Essential Tools Covered in the DotNet Core Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Building powerful web applications with Dot Net Core isn’t just about writing C# code or understanding MVC architecture.
          It’s about learning how to turn real ideas into functional, scalable applications using the right tools and industry practices.
          At Pathlogics, by the end of the course, you’ll be confident in developing and deploying professional-grade applications from scratch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {visibleTools.map((tool, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 text-2xl font-semibold mb-2">{tool.title}</h4>
              <p className="text-black mb-3">{tool.description}</p>
              <ul className="list-disc list-inside text-black space-y-1">
                {tool.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition"
          >
            {showMore ? 'View Less' : 'View More Tools'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DotNetTools;
