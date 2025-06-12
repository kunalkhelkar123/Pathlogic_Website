import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const NodeJsCourseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Pathlogics Node.js Course: From Concepts to Career Clarity
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Node.js?</h3>
            <p>
              Node.js is a powerful, open-source runtime environment that lets you run JavaScript on the server side.
              Built on Google Chrome's V8 engine, it helps developers build high-speed, scalable web apps with ease.
              With Node.js, you can use JavaScript to write both frontend and backend code, making it a favorite among full-stack developers.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Node.js?</h3>
            <p className="mb-2">
              Node.js is one of the most in-demand technologies in today’s job market.
              It’s used by top companies like Netflix, LinkedIn, PayPal, and Uber to power high-performance applications.
              Whether you’re a fresher or looking to upskill, Node.js opens doors to exciting opportunities in web development.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Core Features of Node.js</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Fast & Scalable:</strong> Built on the high-speed V8 engine with non-blocking I/O operations.</li>
              <li><strong>Event-Driven Architecture:</strong> Perfect for building real-time applications like chat apps and live streaming.</li>
              <li><strong>Full Stack JavaScript:</strong> Frontend + Backend = All in JavaScript. No need to switch languages.</li>
              <li><strong>Huge Ecosystem:</strong> Access thousands of libraries through npm (Node Package Manager).</li>
              <li><strong>Active Community:</strong> Node.js has a massive, active open-source community with tons of tutorials, tools, and forums.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/fullstack")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default NodeJsCourseInfo;
