import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CourseModule = ({ title, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-500 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        hover:scale-105 hover:shadow-2xl cursor-pointer rounded-lg
      `}
    >
      <div className="bg-orange-500 rounded-lg shadow-lg p-4 h-full flex flex-col items-center justify-center 
        hover:bg-gradient-to-br from-orange-500 to-yellow-400 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-5 shadow-md">
          <span className="text-orange-600 text-3xl select-none">{icon}</span>
        </div>
        <h3 className="text-base font-semibold text-white text-center select-none">{title}</h3>
      </div>
    </div>
  );
};

export default function AdvJavaCurriculum() {
  const courseModules = [
    { title: "Servlets & JSP", icon: "🌐" },
    { title: "Spring Framework", icon: "🍃" },
    { title: "Hibernate & JPA", icon: "🗄️" },
    { title: "Microservices & REST API", icon: "🔗" },
    { title: "Concurrency & Multithreading", icon: "⚡" },
    { title: "Security & Authentication", icon: "🔐" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-teal-600 py-12 px-4 sm:px-6 lg:px-20">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center">
        Advanced Java Course Curriculum
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section - Curriculum Modules */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <CourseModule key={index} {...module} index={index} />
            ))}
          </div>
        </div>

        {/* Right Section - Course Overview */}
        <div className="text-white w-full">
          <p className="mt-2 text-[16px] leading-relaxed text-justify max-w-xl mx-auto lg:mx-0">
            Dive deep into advanced Java programming and enhance your skills with real-world applications.
            Explore robust backend development using <strong>Spring Framework</strong>,
            master persistence with <strong>Hibernate & JPA</strong>, and learn to design efficient, scalable systems.
            Ideal for developers aiming to elevate their Java expertise and build enterprise-grade solutions.
          </p>

          <ul className="list-disc pl-5 mt-6 space-y-3 text-white/90 text-sm max-w-xl mx-auto lg:mx-0">
            <li>Hands-on projects for practical learning</li>
            <li>Guidance from seasoned Java professionals</li>
            <li>Comprehensive coding exercises</li>
            <li>Mock interviews and job readiness training</li>
            <li>Earn certifications and gain internship access</li>
          </ul>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Link to="/QuickEnquiry">
              <button
                className="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg 
                  hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-400 transition 
                  duration-300 ease-in-out transform hover:scale-105"
                aria-label="Enroll Now"
              >
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
