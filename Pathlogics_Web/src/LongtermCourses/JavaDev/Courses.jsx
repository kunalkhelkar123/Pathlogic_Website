

import React from "react";
import { Link } from "react-router-dom";

const aiTools = [
  {
    title: "MySQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
  },
  {
    title: "Spring Framework",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
  },
  {
    title: "Prompt Engineering",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_n8lUadnO7oBJ5WsBoBdhO_2h3fS3WhoIg&s",
  },
  {
    title: "MongoDB",
    icon: "https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png",
  },
  {
    title: "LangChain",
    icon: "https://pbs.twimg.com/profile_images/914842431748739072/66NFe2g3_400x400.jpg",
  },
  {
    title: "AI Deployment",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8h_vhS7oP14KNtuCDnLokW9mmcWXv6lC5A&s",
  },
];

export default function FullStackAICourseOverview() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-gray-900 to-teal-600 pt-8 pb-0 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Icon Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="bg-orange-500 hover:bg-orange-600 transition rounded-lg p-4 text-white text-center shadow-lg"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-12 h-12 object-contain rounded-full bg-white p-2"
                />
              </div>
              <div className="text-sm font-semibold">{tool.title}</div>
            </div>
          ))}
        </div>

        {/* Right: Overview Content */}
        <div className="text-white text-right">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Full Stack AI Development Course Overview
          </h3>
          <div className="text-center">
            <p className="text-lg mb-4">
              The Full Stack AI Development course is a comprehensive, industry-aligned program designed to equip learners with the complete skill set required to build intelligent, data-driven applications.
            </p>
            <p className="mb-4">
              Blending the power of Machine Learning, Deep Learning, and Data Science, this course takes you through the full AI development cycle—from data handling and model building to deployment and integration.
            </p>
            <p className="mb-4">
              Whether you're a beginner or a working professional, this course prepares you to tackle real-world challenges with AI-first solutions.
            </p>
          </div>
          <Link to="/contact">
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
