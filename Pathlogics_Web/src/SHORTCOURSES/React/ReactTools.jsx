import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Node.js & npm",
    description: `Think of Node.js as the engine that lets you run JavaScript outside the browser—perfect for setting up and running your React projects on your own system. Along with it, npm (Node Package Manager) works like an app store for developers, helping you quickly install and manage the tools and libraries your project needs.`,
    points: [
      "Run JavaScript on your machine",
      "Easily manage project dependencies",
      "Quick access to thousands of helpful packages",
    ],
  },
  {
    title: "Create React App",
    description: `Starting a new React project? Create React App makes it super easy. With just one command, you get a ready-to-use setup, no need to worry about tools like Babel or Webpack. It’s like getting a fully equipped workspace without having to build the desk yourself!`,
    points: [
      "Start coding in seconds with built-in tools",
      "No manual setup just create and go",
      "Comes with helpful features like live reloading, linting, and testing support",
    ],
  },
  {
    title: "React Router",
    description: `Ever wondered how websites feel like they have multiple pages without actually reloading? That’s the magic of React Router. It helps you add smooth, app-like navigation to your React project, making sure everything stays in sync as users move around your site.`,
    points: [
      "Gives your app a real multi-page experience",
      "Easily set up dynamic and nested routes",
      "Keeps your UI flowing smoothly with the URL",
    ],
  },
  {
    title: "React Developer Tools",
    description: `Think of React Developer Tools as your x-ray vision into React apps. This handy browser extension lets you peek into your component tree, track props and state, and figure out what’s going on behind the scenes making debugging way less stressful.`,
    points: [
      "See your component structure live in the browser",
      "Keep an eye on how props and states change",
      "Troubleshoot UI issues with confidence",
    ],
  },
  {
    title: "Visual Studio Code (VS Code)",
    description: `VS Code is like your all-in-one workspace for coding—lightweight, fast, and packed with smart features. It makes writing React code easier with helpful suggestions, built-in Git support, and tons of handy extensions that save time and boost productivity.`,
    points: [
      "Intelligent code hints that speed up your workflow",
      "Extensions made just for React (like ES7+ snippets)",
      "Built-in Git and terminal so you never have to leave the editor",
    ],
  },
  {
    title: "Redux",
    description: `Ever felt overwhelmed managing state across multiple components? That’s where Redux comes in. It acts like a central brain for your app, keeping all your data in one place so everything stays organized and predictable.`,
    points: [
      "Shares and manages state globally across your app",
      "Makes debugging easier with a clear data flow",
      "Works smoothly with React for larger, complex projects",
    ],
  },
];

const ReactTools = () => {
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
          Essential Tools Covered in the ReactJS Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          To build modern React applications efficiently, developers rely on a powerful set of tools. Our course equips you with hands-on experience using the most essential tools and libraries that are widely used in the industry today.
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
            className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReactTools;
