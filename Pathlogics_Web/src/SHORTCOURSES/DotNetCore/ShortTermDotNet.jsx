import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/Bannerrr.jpeg";

export default function ShortTermDotNet() {
  const details = [
    {
      title: "DotNet Core Fundamentals",
      description:
        "Learn the basics of DotNet Core, including framework architecture and project setup.",
    },
    {
      title: "Entity Framework Core & Data Handling",
      description:
        "Understand how to manage databases using Entity Framework Core and LINQ queries.",
    },
    {
      title: "Building REST APIs with .NET Core",
      description:
        "Explore API development with ASP.NET Core, middleware, and authentication.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-900 flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl text-white font-bold mb-6 text-center">
          Short-Term <span className="text-orange-600">DotNet Core</span> Course
        </h1>
        <p className="text-lg text-white mb-12">
          Master essential DotNet Core programming skills in a short duration with expert guidance.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Course Details */}
        <div className="grid gap-8 flex-grow">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-teal-800 bg-opacity-60 text-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:bg-opacity-80"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4 text-orange-600">
                {detail.title}
              </h2>
              <p className="text-white">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enquiry Form */}
        <motion.div
          className="bg-gray-800 bg-opacity-60 text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md transition duration-300 transform hover:scale-105 hover:bg-opacity-80"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Enquiry Form
          </h2>
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-white mb-1"
              >
                Interest
              </label>
              <select
                id="interest"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select your interest</option>
                <option value="dotnet-fundamentals">.NET Core Fundamentals</option>
                <option value="entity-framework">Entity Framework Core</option>
                <option value="dotnet-api">Building REST APIs</option>
              </select>
            </div>

            <div className="mt-6 text-center flex justify-center gap-10">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-orange-600 text-white font-bold py-2 px-4  rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Submit 
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </form>
        </motion.div>
        
      </div>
      
    </div>
  )
}