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
      <div className="bg-orange-500 rounded-lg shadow-lg p-6 h-full hover:shadow-2xl hover:bg-gradient-to-br from-gray-400 to-teal-600 transition-shadow duration-300">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white">
          <span className="text-orange-600 text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
      </div>
    </div>
  );
};

export default function AiCurriculum() {
  const courseModules = [
    { title: "Problem Solving", icon: "🧠" },
    { title: "Machine Learning (TensorFlow, Scikit-Learn)", icon: "📊" },  // Updated for ML
    { title: "Data Science (Pandas, NumPy)", icon: "💾" },  // Updated for Data Science
    { title: "Deep Learning (Neural Networks)", icon: "🧬" },  // Updated for Deep Learning
    { title: "Version Control (Git)", icon: "🔀" }, // Updated for Git
    { title: "AI Frameworks (PyTorch, Keras)", icon: "🔧" },  // Updated for AI frameworks
    { title: "Cloud Computing (AWS, Azure)", icon: "☁️" },  // Updated for Cloud
    { title: "APIs and Microservices", icon: "📡" }, 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            AI Development
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Embark on a journey through our comprehensive AI-focused curriculum
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
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
