import React from 'react';
import bgimg from "../../assets/admission.jpg";

export default function DotNetProgram() {
  return (
    <div className="min-h-screen sm:pb-0 md-pb-0 pb-10">
      {/* Program Overview Section */}
      <div className="relative min-h-[200px] bg-gradient-to-br from-gray-900 to-teal-600 py-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Dot Net Core Training Program Overview
          </h3>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Building powerful web applications with Dot Net Core isn’t just about writing C# code or understanding MVC architecture. It’s about learning how to turn real ideas into functional, scalable applications using the right tools and industry practices. At Pathlogics, by the end of the course, you’ll be confident in developing and deploying professional-grade applications from scratch.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-5">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Admission Process Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Admission Process
              </h2>
              <ul className="space-y-4 text-gray-700">
                {["Admission Test", "Minimum Qualification Criteria", "Confirmation & Enrollment", "Batch Allotment & Orientation"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="sm:mt-10">
            <img className="sm:ml-10" height={300} width={300} src={bgimg} alt="Admission Process" />
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                <span className="">Eligibility</span> Criteria
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "B.E / B.Tech / M.Tech (CSE, IT, ECE, EEE)",
                  "Working professionals in .NET or related tech",
                  "Interest in enterprise-level web application development",
                  "Basic knowledge of programming and databases",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
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
