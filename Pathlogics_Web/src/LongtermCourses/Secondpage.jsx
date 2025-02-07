

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Secondpage() {
  return (
    <div
      className="flex flex-wrap items-center justify-center min-h-screen gap-6 p-6 bg-cover bg-center "
      style={{
        // backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,code')",
      }}
    >
      {/* Internship Program Section */}
      <motion.section
        className="w-full md:w-1/3 bg-teal-800 bg-opacity-80 p-6 rounded-xl shadow-lg "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
          Internship Program
        </h1>
        <p className="text-gray-700 mb-4 text-white">Gain experience that makes you job-ready.</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-white">
          <li>Mentorship</li>
          <li>Real-World Projects</li>
          <li>100% Placement Guarantee</li>
        </ul>
        <Link to="/QuickEnquiry">
          <motion.button
            className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700"
            whileHover={{ scale: 1.1 }}
          >
            Start Internship Today!
          </motion.button>
        </Link>
      </motion.section>

      {/* IT Certification Program Section */}
      <motion.section
        className="w-full md:w-1/3 bg-teal-800 bg-opacity-80 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
          Get Certified, Get Ahead
        </h1>
        <p className="text-white mb-4 ">Join Our Globally Recognized IT Certification Program!</p>
        <ul className="list-disc pl-6 text-white space-y-2">
          <li>Advanced Learning</li>
          <li>Expert Trainers</li>
          <li>In-Demand Skills</li>
        </ul>
        <Link to="/QuickEnquiry">
          <motion.button
            className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700"
            whileHover={{ scale: 1.1 }}
          >
            Join IT Certification!
          </motion.button>
        </Link>
      </motion.section>

      {/* Paid Internship Section */}
      <motion.section
        className="w-full md:w-1/3 bg-teal-800 bg-opacity-80 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
          Learn, Earn, and Grow
        </h1>
        <p className="text-white mb-4">Join Our Paid Internship Program and Start Your IT Career!</p>
        <ul className="list-disc pl-6 text-white space-y-2">
          <li>Paid Internship</li>
          <li>Industry Exposure</li>
          <li>Practical Learning</li>
        </ul>
        <Link to="/QuickEnquiry">
          <motion.button
            className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-700"
            whileHover={{ scale: 1.1 }}
          >
            Join Paid Internship!
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
}

export default Secondpage;
