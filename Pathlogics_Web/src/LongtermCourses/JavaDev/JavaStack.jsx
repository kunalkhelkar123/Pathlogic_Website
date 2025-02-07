import React from "react";
import { motion } from "framer-motion";

const TechCard = ({ logo, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-4"
  >
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      {logo}
    </div>
    <motion.span
      whileHover={{ color: "#4A90E2" }}
      className="text-2xl md:text-3xl font-bold text-gray-800"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function JavaStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn Modern
            <span className="block text-indigo-600">Java Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Master backend and web development with industry-leading tools.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12  item-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
  logo={
    <img
      src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
      alt="Java Logo"
      className="w-16 h-16"
    />
  }
  label="Java"
  color="bg-gradient-to-br from-red-800 to-black"
/>
<TechCard
  logo={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
      alt="Spring Logo"
      className="w-32 h-32 text-white"
    />
  }
  label="Spring"
  color="bg-gradient-to-br from-green-700 to-black"
/>
<TechCard
  logo={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hibernate_logo.svg/1920px-Hibernate_logo.svg.png"
      alt="Hibernate Logo"
      className="w-25 h-25 object-fit"
    />
  }
  label="Hibernate"
  color="bg-gradient-to-br from-yellow-900 to-black"
/>
<TechCard
  logo={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
      alt="MySQL Logo"
      className="w-20 h-20"
    />
  }
  label="MySQL"
  color="bg-gradient-to-br from-blue-900 to-black"
/>

        </motion.div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Build robust applications with a powerful tech stack.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-800"
          >
            Start Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
