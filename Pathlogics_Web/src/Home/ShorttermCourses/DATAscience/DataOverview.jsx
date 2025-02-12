import React from 'react';

export default function DataOverview() {
  return (
    <div className="min-h-screen">
      {/* Program Overview Section */}
      <div className="relative bg-gradient-to-br from-teal-900 to-teal-800 py-20">
        <div className="absolute inset-0 bg-[url('/diagonal-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Data Science with Python Program Overview
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed text-justify">
            The Data Science with Python program focuses on data analysis, machine learning, and statistical modeling
            using Python. Professionals gain expertise in data wrangling, visualization, predictive analytics,
            and AI-driven decision-making to drive business insights.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Admission Process Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Admission Process
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Data Science Aptitude Test.
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Technical Interview.
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Enrollment Confirmation.
                </li>
              </ul>
            </div>
            <div className="px-8 py-4 bg-orange-600 mt-auto">
              <button className="text-white font-semibold hover:text-teal-900 transition duration-300">
                Know More
              </button>
            </div>
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-10">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bachelor's in CS/IT, Mathematics, or related fields.
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Professionals in IT or Data Analysis looking to upskill.
                </li>
              </ul>
            </div>
            <div className="px-8 py-4 bg-orange-600 mt-auto">
              <button className="text-white font-semibold hover:text-teal-900 transition duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
