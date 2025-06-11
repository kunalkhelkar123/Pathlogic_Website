import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: ' React Navigation',
    description:
      'React Navigation makes it easy to manage screens and transitions. It’s key for building smooth, multi-page app experiences.',
    points: [
      'Stack, Tab, and Drawer navigators',
      'Smooth and intuitive screen transitions errors instantly for quick fixes',
      'Built-in debuger for easy testing and improvement',
    ],
  },
  {
    title: ' Redux',
    description:
      'Redux helps you handle complex app states with ease. Perfect for apps with lots of interactions and shared data Version control is essential in real-world projects.',
    points: [
      'Track Centralized state management changes and maintain code history',
      'HMiddleware like Redux Thunk for async logicost and showcase projects online',
      
    ],
  },
  {
    title: 'Firebase',
    description:
      'InFirebase gives your app real-time data, user login, and cloud storage—no custom backend needed.',
    points: [
      'Real-time database & Firestore ',
      'Simple user authentication',
      'Push notifications and built-in analytics',
     
    ],
  },
  {
    title: 'Expo',
    description:
      'Expo simplifies app development and speeds up your workflow—great for both beginners and pros.',
    points: [
      'Quick setup and rapid development',
      'Easy access to native features',
      'OTA (Over The Air) updates without re-publishing',
    ],
  },
  {
    title: ' Axios or Fetch API',
    description:
      'These tools help your app talk to servers and APIs—essential for sending or receiving data.',
    points: [
      'Smooth REST API integration',
      'Supports GET, POST, PUT, DELETE requests',
      'Clean code with async/await',
    ],
  },
  {
    title: 'React Native Debugger',
    description:
      'TThis all-in-one tool makes debugging easier by combining Redux and Chrome DevTools he CLI gives you more control and insight into Java development processes. Learning to use the terminal builds essential backend and troubleshooting skills.',
    points: [
      'View app state and actions clearly .',
      'Add breakpoints and track performance',
      'Works with React DevTools seamlessly',
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
         Essential Tools Covered in the React Native Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Building amazing mobile apps with React Native isn’t just about learning components or writing JavaScript. It’s about understanding how to bring ideas to life using the right tools and best practices. At Pathlogics, we go beyond theory, you’ll actually build real apps using tools like React Navigation, Redux, Firebase, and more.By the end, you’ll be ready to launch real-world mobile apps with confidence.

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
