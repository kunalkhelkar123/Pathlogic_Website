import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: 'Selenium WebDriver (2.0)',
    description:
      'Selenium WebDriver is the most popular component of the Selenium suite, widely used for browser automation. Unlike Selenium Core, WebDriver talks directly to the browser, allowing smoother control and better handling of real user interactions.',
    points: [
      'Directly interacts with browsers for real-time control',
      'Supports Java, Python, C#, and other languages',
      'Compatible with Chrome, Firefox, Safari, and IE',
      'Efficiently handles dynamic elements and modern web apps',
      'Delivers faster performance and greater flexibility than older tools',
    ],
  },
  {
    title: 'Selenium Grid',
    description:
      'Selenium Grid lets you run tests on multiple machines or browsers at the same time, helping you save time and speed up your testing process. It\'s ideal for executing parallel tests across different environments, making cross-browser testing easier and more efficient.',
    points: [
      'Run tests in parallel across multiple machines',
      'Supports cross-browser testing (Chrome, Firefox, Safari, etc.)',
      'Scales up testing by distributing it over various devices',
      'Significantly cuts down overall test execution time',
      'Allows testing on different operating systems simultaneously',
    ],
  },
  {
    title: 'Selenium IDE',
    description:
      'Selenium IDE (Integrated Development Environment) is a browser plugin that lets you easily record and replay tests for web applications. It’s the most beginner-friendly Selenium tool, perfect for those new to automation. With its simple interface, you can create test scripts without writing any code and even tweak commands as needed.',
    points: [
      'Browser extension for Firefox and Chrome',
      'Records and replays web interactions',
      'No coding skills required',
      'Allows command editing and basic debugging',
      'Great for quick test demos and prototypes',
    ],
  },
  {
    title: 'TestNG',
    description:
      'TestNG (Test Next Generation) is a popular testing framework for Java that\'s widely used alongside Selenium. It helps you organize tests better, control how they run, and automatically generate clean, detailed reports. With features like test grouping, prioritization, and running tests in parallel, it brings more structure and flexibility to your automation efforts.',
    points: [
      'Group and prioritize test cases easily',
      'Run multiple tests in parallel to save time',
      'Get clear, detailed HTML test reports',
      'Integrates smoothly with Selenium WebDriver',
      'Works well with tools like Maven and Jenkins',
    ],
  },
  {
    title: 'Cucumber',
    description:
      'Cucumber is a tool used for Behavior Driven Development (BDD) that makes test automation more readable and collaborative. It lets you write test scenarios in plain English using the Gherkin language, so even non-technical team members can understand and contribute. When used with Selenium and Java, it bridges the gap between developers, testers, and business stakeholders.',
    points: [
      'Supports BDD with easy-to-read syntax (Gherkin)',
      'Encourages collaboration between teams',
      'Automates functional scenarios in plain language',
      'Integrates well with Selenium and Java',
      'Helps create living documentation for your project',
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
          Essential Tools Covered in Selenium with Java Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          In our Selenium with Java course, you'll not only learn the core principles of automation testing but also gain hands-on experience with some of the most powerful and industry-standard tools used in the field. These tools are essential for building efficient, scalable, and effective test automation frameworks.

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
