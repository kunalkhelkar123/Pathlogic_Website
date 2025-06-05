import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  // {
  //   title: "Karma",
  //   description:
  //     "Think of Karma as your testing buddy. It automatically runs your JavaScript tests in real browsers so you can catch bugs before they catch you.",
  //   points: [
  //     "Runs tests while you code",
  //     "Ensures your app works across browsers",
  //     "Works great with Jasmine test framework",
  //   ],
  // },
  {
    title: "AngularJS UI (UI-Router)",
    description:
      "UI-Router gives your app smooth, dynamic navigation. It’s way more powerful than the default routing and helps create complex, multi-view layouts.",
    points: [
      "Better control over routing",
      "Create nested and dynamic views",
      "Keeps your UI organized",
    ],
  },
  {
    title: "Restangular",
    description:
      "Working with APIs becomes a breeze with Restangular. It takes the pain out of making HTTP calls and keeps your code clean and simple.",
    points: [
      "Wraps around $http for easier API handling",
      "Makes backend communication smooth",
      "Perfect for CRUD-heavy apps",
    ],
  },
  {
    title: "Angular-gettext",
    description:
      "Want your app to speak multiple languages? Angular-gettext helps you build apps that can be easily translated, so your project is ready for a global audience.",
    points: [
      "Seamless translation integration",
      "Language switch support",
      "Easy to manage localization files",
    ],
  },
  {
    title: "Djangular",
    description:
      "If you’re into Django on the backend, Djangular is your bridge. It helps you structure your AngularJS code to work beautifully with Django projects.",
    points: [
      "Clean integration with Django",
      "Ideal for modular apps",
      "Keeps templates secure and efficient",
    ],
  },
  {
    title: "Angular Seed",
    description:
      "Angular Seed is your starter kit. It gives you a ready-made project setup so you can skip the boring setup stuff and jump straight into coding.",
    points: [
      "Pre-built structure and tools",
      "Speeds up app development",
      "Great for learning best practices",
    ],
  },
  {
    title: "AngularFire",
    description:
      "Build real-time apps like chat systems or dashboards with ease. AngularFire connects your app to Firebase and syncs data instantly.",
    points: [
      "Real-time updates without refresh",
      "Simple Firebase integration",
      "Ideal for live apps and analytics",
    ],
  },
];

const AngularTools = () => {
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
          Essential Tools Covered in the AngularJS Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Building great apps with AngularJS isn’t just about writing code—it’s about using the right approach and tools that make development faster and smarter. At Pathlogics, we go beyond the basics. You'll get hands-on with tools that real developers use to build and manage AngularJS apps—tools that streamline your workflow, improve code quality, and help you ship projects faster.
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

export default AngularTools;
