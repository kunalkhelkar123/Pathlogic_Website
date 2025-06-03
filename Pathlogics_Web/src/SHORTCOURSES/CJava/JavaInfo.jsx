import React, { useState } from 'react';
import { FaTools, FaCodeBranch, FaTerminal, FaJava, FaCogs, FaGithub } from 'react-icons/fa';

const tools = [
  {
    title: 'Eclipse IDE',
    icon: <FaCogs />,
    points: [
      'Simple, beginner-friendly interface for writing Java code',
      'Instantly highlights errors so you can fix issues on the go',
      'Built-in debugger helps you test and improve your code easily',
      'Drag-and-drop tools speed up the development process',
      'Supports tons of plugins to customize your workflow',
      'A perfect starting point for anyone new to Java development',
    ],
  },
  {
    title: 'Git & GitHub',
    icon: <FaGithub />,
    points: [
      'Track every change you make in your code, so nothing gets lost',
      'Share your projects online and show off your skills on GitHub',
      'Team up with others and build cool stuff together',
      'Learn how to create branches, merge code, and handle pull requests',
      'Build a GitHub profile that speaks for your skills and gets noticed by recruiters',
    ],
  },
  {
    title: 'IntelliJ IDEA',
    icon: <FaTools />,
    points: [
      'Helps you code faster with smart auto-complete',
      'Makes code cleanup easy with built-in refactoring tools',
      'Works smoothly with popular frameworks and build tools',
      'Makes debugging simpler with clear error hints',
      'Designed to give developers a clean and productive workspace',
    ],
  },
  {
    title: 'Java Development Kit (JDK)',
    icon: <FaJava />,
    points: [
      'Comes with the Java Compiler to turn your code into executable programs',
      'Includes the Java Runtime Environment (JRE) so your apps can run properly',
      'Lets you compile and run Java programs from start to finish',
      'Packed with essential tools and libraries used in everyday development',
      'It’s the foundation every Java developer builds on',
    ],
  },
  {
    title: 'Apache Maven',
    icon: <FaCodeBranch />,
    points: [
      'Automatically builds your project, saving you from repetitive setup tasks',
      'Keeps your project’s libraries and dependencies neatly organized',
      'Follows a standard project structure that’s easy to understand and maintain',
      'Downloads the tools and files you need, so you don’t have to search for them',
      'Trusted by developers everywhere—its a go-to tool in the professional world',
    ],
  },
  {
    title: 'Command Line Interface (CLI)',
    icon: <FaTerminal />,
    points: [
      'Learn how to easily compile and run Java programs directly from the terminal',
      'Get a clear, step-by-step understanding of the Java compilation process',
      'Become comfortable working in non-GUI environments, boosting your technical versatility',
      'Sharpen your troubleshooting and debugging skills through practical command-line experience',
      'Equip yourself with real-world skills for backend and server-side development',
    ],
  },
];

const CoreJavaTools = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTools = showAll ? tools : tools.slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Core Java Tools You’ll <span className="text-teal-600">Master</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Get hands-on experience with essential tools used in real-world Java development—from coding to collaboration and deployment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleTools.map((tool, index) => (
          <div key={index} className="transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-teal-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{tool.title}</h3>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-gray-100">
              {tool.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition duration-300 shadow-md hover:scale-105"
        >
          {showAll ? 'View Less' : 'View More Tools'}
        </button>
      </div>
    </div>
  );
};

export default CoreJavaTools;
