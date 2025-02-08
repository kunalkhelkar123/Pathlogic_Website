import React from "react";

export default function PowerBIOverview() {
  return (
    <div className="min-h-screen">
      {/* Program Overview Section */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 py-20">
        <div className="absolute inset-0 bg-[url('/diagonal-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Power BI Program Overview
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Power BI is a powerful business analytics tool that enables users to
            visualize data and share insights across an organization. This
            program covers data transformation, dashboard creation, and DAX
            formulas to empower professionals with data-driven decision-making
            skills.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Modules Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Course Modules
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
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
                  Introduction to Power BI.
                </li>
                <li className="flex items-center text-gray-700">
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
                  Data Transformation & Cleaning.
                </li>
                <li className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-3 text--500"
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
                  Creating Interactive Dashboards.
                </li>
              </ul>
            </div>
            <div className="px-8 py-4 bg-orange-700">
              <button className="text-white font-semibold text-bold hover:text-yellow-300 transition duration-300">
                Know More
              </button>
            </div>
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-10">
                <span className="">Eligibility</span> Criteria
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
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
                  Open to all graduates and professionals.
                </li>
                <li className="flex items-center text-gray-700">
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
                  Ideal for aspiring Data Analysts & Business Intelligence
                  professionals.
                </li>
              </ul>
            </div>
            <div className="px-5 py-4 bg-orange-700 flex justify-center">
              <button className="text-white font-semibold transition duration-300 hover:bg-orange-600 px-4 py-2 rounded-lg">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
