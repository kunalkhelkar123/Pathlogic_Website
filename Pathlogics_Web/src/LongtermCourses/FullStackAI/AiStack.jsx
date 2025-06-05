import React from 'react';
import bgimg from "../../assets/admission.jpg";

export default function AiStack() {
  return (
    <div className="pb-[5%]">
      {/* Program Overview Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-teal-600 py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Full Stack AI Development Program Overview
          </h3>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Boost your tech career with our <strong>Full Stack AI Developer course</strong>, designed to teach everything from AI fundamentals to advanced machine learning techniques. You’ll develop the skills to build intelligent, real-world applications that drive innovation.
            <br /><br />
            Ready to get started? Explore our <strong>easy admission process and eligibility criteria</strong> to begin your journey toward becoming a certified AI professional.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-24px]">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Admission Process Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Admission Process
              </h2>
              <ul className="space-y-4">
                {[
                  "Fill out the application form",
                  "Clear a basic web development screening",
                  "Get confirmation and join orientation",
                  "Begin your Full Stack AI training journey"
                ].map((step, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img className="rounded-md" src={bgimg} alt="admission" width={300} height={300} />
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                {[
                  "Basic knowledge of web development",
                  "Students from Computer/IT background (BCA, B.E, B.Tech)",
                  "Developers looking to upskill in AI & machine learning",
                  "Anyone interested in building intelligent applications"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
