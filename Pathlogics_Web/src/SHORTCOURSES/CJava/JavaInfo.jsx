import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: 'Eclipse IDE',
    description:
      'Eclipse is a simple, beginner-friendly IDE that makes writing and debugging Java code easy. Its intuitive interface and powerful features make it ideal for new developers.',
    points: [
      'Beginner-friendly interface for writing Java code',
      'Highlights errors instantly for quick fixes',
      'Built-in debugger for easy testing and improvement',
      'Drag-and-drop tools for faster development',
      'Supports a wide range of plugins for customization',
    ],
  },
  {
    title: 'Git & GitHub',
    description:
      'Version control is essential in real-world projects. Git lets you track changes and collaborate, while GitHub is the go-to platform for sharing your code with the world.',
    points: [
      'Track changes and maintain code history',
      'Host and showcase projects online',
      'Collaborate easily with teammates',
      'Learn branching, merging, and pull requests',
      'Build a standout GitHub profile for job readiness',
    ],
  },
  {
    title: 'IntelliJ IDEA',
    description:
      'IntelliJ is a powerful Java IDE that boosts productivity with intelligent coding assistance, error detection, and seamless integration with build tools.',
    points: [
      'Smart auto-complete and refactoring tools',
      'Built-in support for popular frameworks',
      'Simplified debugging with clear hints',
      'Optimized workspace for efficient development',
    ],
  },
  {
    title: 'Java Development Kit (JDK)',
    description:
      'The JDK is the foundation of Java development. It includes everything you need to compile, run, and develop robust Java applications.',
    points: [
      'Includes Java Compiler and Runtime Environment (JRE)',
      'Supports end-to-end Java program execution',
      'Packed with essential libraries and tools',
      'Fundamental for all Java development activities',
    ],
  },
  {
    title: 'Apache Maven',
    description:
      'Maven automates project builds and dependency management. It standardizes your workflow and helps you focus on writing code instead of setup tasks.',
    points: [
      'Automates build processes and setup',
      'Manages libraries and dependencies efficiently',
      'Uses standard project structures',
      'Downloads necessary tools and files automatically',
      'Widely adopted in the professional Java ecosystem',
    ],
  },
  {
    title: 'Command Line Interface (CLI)',
    description:
      'The CLI gives you more control and insight into Java development processes. Learning to use the terminal builds essential backend and troubleshooting skills.',
    points: [
      'Compile and run Java programs via terminal',
      'Understand Java compilation step-by-step',
      'Work confidently in non-GUI environments',
      'Improve troubleshooting skills with hands-on CLI use',
      'Gain real-world backend development experience',
    ],
  },
];

const JavaTools = () => {
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
          Core Java Tools You’ll <span className="text-teal-600">Master</span>
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Learn industry-standard tools that every Java developer relies on—from writing and debugging code to collaborating and building scalable applications.
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

export default JavaTools;
