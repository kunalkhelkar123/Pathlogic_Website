import React, { useState, useEffect, useRef } from 'react';

const CourseModule = ({ title, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}
    >
      <div className="bg-orange-500 rounded-lg shadow-lg p-6 h-full hover:bg-gradient-to-br from-gray-900 to-teal-600  hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
          <span className="text-orange-500 text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
};

export default function AngularCurriculum() {
  const courseModules = [
    { title: "Angular Components & Templates", icon: "🅰️" },
    { title: "Directives & Pipes", icon: "🔗" },
    { title: "Services & Dependency Injection", icon: "🛠️" },
    { title: "Angular Router", icon: "🛣️" },
    { title: "State Management with NgRx", icon: "🗃️" },
    { title: "Unit & E2E Testing", icon: "🧪" },
    { title: "Performance Optimization", icon: "⚡" },
    { title: "Deployment & Best Practices", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-teal-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
           Angular Development
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Master the advanced concepts of Angular with our comprehensive curriculum.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16 p-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Curriculum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseModules.map((module, index) => (
              <CourseModule key={index} {...module} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-300 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
