import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Express.js",
    description: `Express.js is a lightweight and flexible Node.js framework that simplifies building web servers and APIs. It's known for its speed and ease of use, making it ideal for both beginners and advanced developers.`,
    points: [
      "Makes it easy to set up server routes without the headache",
      "Perfect for building clean, organized APIs and web apps",
      "Lets you plug in extra features with simple middleware",
      "Trusted by full-stack developers for real-world projects",
    ],
  },
  {
    title: "MongoDB",
    description: `MongoDB is a modern, NoSQL database that stores data in a format that looks a lot like JSON, so it’s easy to read and work with. It pairs perfectly with Node.js and is used in apps that need to handle lots of data fast.`,
    points: [
      "No strict rules — flexible, schema-less structure",
      "Stores data in clean, easy-to-understand documents",
      "Great for apps that grow and scale over time",
      "Works smoothly with Mongoose to simplify database tasks in Node.js",
    ],
  },
  {
    title: "Socket.IO",
    description: `Socket.IO is a powerful library for real-time, event-based communication between the client and server. It’s perfect for chat apps, live notifications, and collaborative tools.`,
    points: [
      "Enables real-time, event-driven communication",
      "Ideal for chat applications, live notifications, and collaboration",
      "Simplifies building interactive, real-time web apps",
      "Works seamlessly with Node.js backend",
    ],
  },
  {
    title: "Mongoose",
    description: `Mongoose acts like a helpful assistant for MongoDB in your Node.js projects. It brings structure to your data and helps you organize and validate everything before it’s saved in the database.`,
    points: [
      "Adds clear structure and rules to your MongoDB data",
      "Makes queries cleaner and easier to write",
      "Built-in data validation keeps your database clean",
      "A perfect partner for handling complex app logic smoothly",
    ],
  },
  {
    title: "Nodemon",
    description: `Tired of stopping and restarting your server every time you make a change? Nodemon has your back. It watches your files and automatically refreshes your app as you work.`,
    points: [
      "Saves time by auto-restarting your server",
      "Speeds up development and debugging",
      "Super simple to set up and run",
      "A must-have tool for every Node.js project",
    ],
  },
  {
    title: "Postman",
    description: `Postman makes testing your APIs feel like a breeze. Instead of guessing if your code works, you can see every request and response in real time—with no command line required.`,
    points: [
      "Send, test, and tweak API requests with ease",
      "Visual interface that’s beginner-friendly",
      "Great for debugging and exploring endpoints",
      "Helps you understand how your backend behaves",
    ],
  },
];

const NodeTools = () => {
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
          Essential Tools Covered in the NodeJS Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Building great apps with Node.JS isn’t just about writing code. It’s about using the right tools that make your backend development journey smoother and smarter. At Pathlogics, we don’t just teach you theory — we help you get your hands on practice with real tools like Express.js, MongoDB, Socket.IO, Mongoose, Nodemon, and Postman. You’ll learn how to write cleaner code, solve real problems, and gain the confidence to take on real projects.
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
            className="bg-orange-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NodeTools;
