import React, { useState, useEffect } from 'react';

const CourseModule = ({ title, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      <div className="bg-orange-500 rounded-lg shadow-lg p-6 h-full hover:shadow-2xl hover:bg-gradient-to-br from-gray-900 to-teal-500 transition-shadow duration-300">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
          <span className="text-orange-600 text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
};

export default function ManualTesting() {
  const courseModules = [
    { title: "Introduction to Manual Testing", icon: "📖" },
    { title: "Test Case Design", icon: "📝" },
    { title: "Bug Life Cycle", icon: "🐞" },
    { title: "Test Execution & Reporting", icon: "📊" },
    { title: "Types of Testing", icon: "✅" },
    { title: "Regression Testing", icon: "🔄" },
    { title: "User Acceptance Testing", icon: "👨‍💻" },
    { title: "Software Development Life Cycle", icon: "🔄" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Manual Testing
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Master the fundamentals of manual testing with our in-depth curriculum.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseModules.map((module, index) => (
                <CourseModule key={index} {...module} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-600 text-white px-8 py-3  font-semibold shadow-lg hover:bg-orange-700  rounded-[5px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
