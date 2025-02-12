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
      className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
    >
      <div className="bg-orange-500 rounded-lg shadow-lg p-6 h-full hover:shadow-2xl transition-shadow hover:bg-gradient-to-br from-gray-900 to-teal-600 duration-300 hover:scale-105">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-200">
          <span className="text-white text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
      </div>
    </div>
  );
};

export default function DevopsCurriculum() {
  const courseModules = [
    { title: "Continuous Integration (CI)", icon: "🔄" },
    { title: "Containerization with Docker", icon: "🐳" },
    { title: "Orchestration with Kubernetes", icon: "☸️" },
    { title: "Automation with Jenkins", icon: "⚙️" },
    { title: "Infrastructure as Code (Terraform)", icon: "📜" },
    { title: "Cloud Deployment (AWS & Azure)", icon: "☁️" },
    { title: "Monitoring & Logging (Prometheus & Grafana)", icon: "📊" },
    { title: "Security in DevOps (DevSecOps)", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-orange-600 sm:text-5xl md:text-6xl">
            Full Stack DevOps Program
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Master the DevOps practices, automation tools, cloud infrastructure, and continuous delivery pipelines.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Curriculum</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courseModules.map((module, index) => (
                <CourseModule key={index} {...module} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-[5px] font-semibold shadow-lg hover:bg-orange-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
