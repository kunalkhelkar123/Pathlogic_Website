import React from 'react';

export default function AngularProgramO() {
  return (
    <div className="min-h-screen">
      {/* Program Overview Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-teal-600 py-20">
        <div className="absolute inset-0 bg-[url('/diagonal-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Program Overview
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Angular is a powerful framework for building dynamic, scalable web 
            applications. Our program covers Angular fundamentals, including components, 
            directives, services, state management, routing, and testing, equipping 
            learners with the skills needed for modern frontend development.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Admission Process Card */}
          <Card
            title="Admission Process"
            items={[
              "Basic Knowledge of HTML, CSS, and JavaScript",
              "Understanding of Web Development Concepts",
              "Online/Offline Training Options",
            ]}
          />

          {/* Eligibility Criteria Card */}
          <Card
            title="Eligibility Criteria"
            items={[
              "Graduates or Professionals Interested in Frontend Development",
              "Familiarity with TypeScript & ES6+ Features",
              "Passion for Building Scalable Web Applications",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg
                className="w-5 h-5 mr-3 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 py-4 bg-orange-500">
        <button className="text-white font-semibold hover:text-orange-300 transition duration-300">
          Know More
        </button>
      </div>
    </div>
  );
}
