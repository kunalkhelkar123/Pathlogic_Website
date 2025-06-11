import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: 'Selenium',
    description:
      'Selenium is one of the most popular tools for automating web applications. It lets you test websites across different browsers without doing everything manually. If you\'re aiming for a career in automation testing, learning Selenium is a must.',
    points: [
      'Automates browser-based tasks',
      'Supports multiple programming languages',
      'Open-source and widely used in the industry',
      'Great for testing web apps efficiently',
    ],
  },
  {
    title: 'Appium',
    description:
      'Appium is like Selenium for mobile apps. It helps testers automate testing for Android and iOS apps without needing to change the app itself. If you’re interested in mobile testing, Appium makes your job much easier.',
    points: [
      'Automates both Android & iOS apps',
      'Works for native, hybrid, and web apps',
      'No need to modify the app code',
      'Open-source and easy to integrate',
    ],
  },
  {
    title: 'TestComplete',
    description:
      'TestComplete is a powerful tool that lets you automate desktop, mobile, and web app testing, no coding required! It’s great for beginners and teams that want to build quick and reliable test cases with less effort.',
    points: [
      'User-friendly interface with record-and-playback',
      'Supports multiple platforms (web, mobile, desktop)',
      'Works with scripting languages like Python, VBScript',
      'Ideal for teams who prefer low-code automation',
    ],
  },
  {
    title: 'Jenkins',
    description:
      'Jenkins is like your testing assistant. It runs your tests automatically every time you make a code change. It’s widely used in DevOps to speed up testing and catch bugs early. If you\'re into continuous testing, Jenkins is your best friend.',
    points: [
      'Automates testing and deployment tasks',
      'Supports plugins for integration with other tools',
      'Great for Continuous Integration (CI) pipelines',
      'Saves time and reduces human error',
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
          Essential Tools You’ll Master in Our Software Testing Course
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Master the art of software testing tools to enhance the speed and accuracy of your testing process.
          Gain the skills to efficiently automate complex test scenarios and ensure consistent software performance.
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
