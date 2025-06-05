import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NodeIntro = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-900">
      <div className="w-[90%] mx-auto space-y-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Pathlogics Node.js Course: From Concepts to Career Clarity
        </motion.h2>

        {/* What is Node.js */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is Node.js?</h3>
          <p className="text-lg leading-relaxed">
            Node.js is a powerful, open-source runtime environment that lets you run JavaScript on the server side. Built on Google Chrome's V8 engine, it helps developers build high-speed, scalable web apps with ease. With Node.js, you can use JavaScript to write both frontend and backend code, making it a favorite among full-stack developers.
          </p>
        </div>

        {/* Why Learn Node.js */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Learn Node.js?</h3>
          <p className="text-lg leading-relaxed">
            Node.js is one of the most in-demand technologies in today’s job market. It’s used by top companies like Netflix, LinkedIn, PayPal, and Uber to power high-performance applications. Whether you’re a fresher or looking to upskill, Node.js opens doors to exciting opportunities in web development.
          </p>
        </div>

        {/* Core Features of Node.js */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Core Features of Node.js.</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Fast &amp; Scalable: Built on the high-speed V8 engine with non-blocking I/O operations.</li>
            <li>Event-Driven Architecture: Perfect for building real-time applications like chat apps and live streaming.</li>
            <li>Full Stack JavaScript: Frontend + Backend = All in JavaScript. No need to switch languages.</li>
            <li>Huge Ecosystem: Access thousands of libraries through npm (Node Package Manager).</li>
            <li>Active Community: Node.js has a massive, active open-source community with tons of tutorials, tools, and forums.</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/full-stack-web-development" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-700 transition">
              know more
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NodeIntro;
