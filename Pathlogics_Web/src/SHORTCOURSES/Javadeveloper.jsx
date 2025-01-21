import React, { useState } from "react";
import girlImage from "../assets/girl.png";

const Card = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
    <div className="text-4xl mb-4 text-indigo-600">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FullStackOverview = () => (
  <div className="relative bg-gray-800 rounded-full p-16 w-[500px] h-[500px] mx-auto">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold">Java</h2>
      </div>
    </div>

    {/* Segment 1 */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -rotate-30">
      <div className="bg-red-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Frontend Development</p>
      </div>
    </div>

    {/* Segment 2 */}
    <div className="absolute top-1/3 left-6 transform rotate-30">
      <div className="bg-orange-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Backend Development</p>
      </div>
    </div>

    {/* Segment 3 */}
    <div className="absolute bottom-4 left-1/3 transform rotate-90">
      <div className="bg-green-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Database Management</p>
      </div>
    </div>

    {/* Segment 4 */}
    <div className="absolute bottom-4 right-1/3 transform rotate-150">
      <div className="bg-blue-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Version Control</p>
      </div>
    </div>

    {/* Segment 5 */}
    <div className="absolute top-1/3 right-6 transform rotate-210">
      <div className="bg-indigo-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Deployment & DevOps</p>
      </div>
    </div>

    {/* Segment 6 */}
    <div className="absolute top-4 right-1/2 transform translate-x-1/2 rotate-270">
      <div className="bg-gray-500 w-40 h-40 rounded-full flex items-center justify-center">
        <p className="text-white text-center text-sm">Project Management</p>
      </div>
    </div>
  </div>
);

const ProgramModules = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const modules = [
    {
      title: "Core Java",
      topics: [
        "Java Basics",
        "OOP Concepts",
        "Multithreading",
        "Collections Framework",
        "Exception Handling",
      ],
    },
    {
      title: "Advanced Java",
      topics: [
        "Servlets",
        "JSP",
        "JavaBeans",
        "MVC Architecture",
        "Web Services",
      ],
    },
    {
      title: "Oracle (MySQL)",
      topics: [
        "Database Fundamentals",
        "SQL Queries",
        "Joins and Indexing",
        "Stored Procedures",
        "Database Connectivity",
      ],
    },
    {
      title: "Live Project",
      topics: [
        "Real-world Application",
        "Full Stack Integration",
        "Team Collaboration",
        "Agile Methodology",
        "Testing and Deployment",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Program Modules
        </h2>
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {module.title}
                </h3>
                <span className="text-orange-500">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t border-gray-300">
                  <ul className="list-disc ml-6 space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="text-gray-600">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseOverview = () => {
  const topics = [
    "State Management and System Services",
    "Operating System",
    "J2EE",
    "Database Programming",
    "Industrial Project",
  ];

  return (
    <div className="bg-gray-900 text-white text-center py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold">
          Full Stack Development Course Overview
        </h2>
        <p className="mt-4">
          Learn the skills required to become a Full Stack Developer, including
          frontend, backend, databases, and more. Gain hands-on experience
          through real-world projects and prepare for a career in software
          development.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function JavaDevelopment() {
  const cards = [
    {
      title: "Core Java",
      description:
        "Master the basics of Java programming and build a strong foundation for advanced concepts.",
      icon: "☕",
    },
    {
      title: "Advanced Java",
      description:
        "Learn advanced Java programming to develop robust and scalable applications.",
      icon: "⚡",
    },
    {
      title: "Oracle (MySQL)",
      description:
        "Understand database management with Oracle (MySQL) and its integration with Java.",
      icon: "🛠️",
    },
    {
      title: "Live Project",
      description:
        "Work on real-world projects to gain hands-on experience in Java development.",
      icon: "🌐",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-orange-500 text-white px-8 relative">
        <div className="absolute inset-0">
          <svg
            className="w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
          >
            <circle cx="250" cy="250" r="250" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Upskill Your Career Now!
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Learn Full Stack With <br /> Java Development <br /> Course.
            </h1>
            <p className="text-lg text-white">
              Offline Batches – 100% Job Assurance Program
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200">
                Enroll Now!
              </button>
              <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-green-600">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={girlImage}
              alt="Student with books"
              className="rounded-xl w-[500px] h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="py-16 bg-gradient-to-b from-orange-500 to-gray-900">=
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Java Development Course Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Stack Overview Section */}
      <FullStackOverview />

      {/* Program Modules Section */}
      <ProgramModules />

      {/* Course Overview Section */}
      <CourseOverview />
    </div>
  );
}
