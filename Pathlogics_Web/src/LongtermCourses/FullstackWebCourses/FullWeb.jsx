import React from 'react';
import { motion } from 'framer-motion';

export default function FullWeb() {
  const details = [
    {
      title: 'Comprehensive Curriculum',
      description:
        'HTML,CSS,Javascript and front-end technologies like React with hands-on projects.',
      hoverAnimation: { scale: 1.05, y: -8, transition: { duration: 0.1, ease: 'easeInOut' } },
    },
    {
      title: '100% Placement Guarantee',
      description:
        'We ensure placement for eligible candidates with dedicated career support and mock interviews.',
      hoverAnimation: { scale: 1.05, y: -8, transition: { duration: 0.1, ease: 'easeInOut' } },
    },
    {
      title: 'Eligibility Criteria',
      description:
        'Suitable for B.E/B.Tech/M.Tech / MCA / BCA (ECE, EEE, CSE/IT). graduates and professionals with an interest in Java development.',
      hoverAnimation: { scale: 1.05, y: -8, transition: { duration: 0.1, ease: 'easeInOut' } },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 to-teal-900 text-white flex flex-col items-center py-10 px-4">
      <motion.div
        className="max-w-4xl text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          Full Stack <span className="text-orange-500 font-bold">Web</span> Development Program.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-orange-500 font-bold mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Transform your career with expert-led training and guaranteed placements.
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <motion.div
          className="grid   gap-8 flex-grow sticky top-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800  rounded-lg shadow-lg p-6 transform transition duration-100 hover:shadow-xl"
              variants={itemVariants}
              whileHover={detail.hoverAnimation}
            >
              <h2 className="text-xl font-bold mb-4 text-orange-500">
                {detail.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{detail.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Enquiry Form</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                Interest
              </label>
              <select
                id="interest"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-500"
              >
                <option value="">Select your interest</option>
                <option value="java">Java Development</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="data">Data Science</option>
                <option value="blockchain">Blockchain Development</option>
                <option value="testing">Software Testing</option>
                <option value="salesforce">Salesforce Development</option>
              </select>
            </div>

            {/* <button
              type="submit"
              className="bg-teal-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-800 transition duration-300"
            >
              Submit
            </button> */}
          </form>

          <div className="mt-6 text-center">
            <button
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}