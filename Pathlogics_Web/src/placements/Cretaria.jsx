import React, { useState } from 'react'

const eligibilityCriteria = [
  {
    criteria: "Theory",
    attendance: "75%",
    internalScore: "40%",
    assessment: "Recommendation",
    description: "Theoretical knowledge is crucial for understanding core concepts and principles."
  },
  {
    criteria: "Lab",
    attendance: "75%",
    internalScore: "40%",
    assessment: "Recommendation",
    description: "Practical skills developed in labs are essential for real-world application of knowledge."
  },
  {
    criteria: "Communication",
    attendance: "75%",
    internalScore: "40%",
    assessment: "Recommendation",
    description: "Effective communication skills are vital for teamwork and client interactions in the industry."
  },
  {
    criteria: "Aptitude",
    attendance: "75%",
    internalScore: "40%",
    assessment: "Not Applicable",
    description: "Strong aptitude indicates the ability to learn and adapt quickly in a professional environment."
  }
]

export default function Certaria() {
  const [expandedCriteria, setExpandedCriteria] = useState(null)

  const toggleCriteria = (index) => {
    if (expandedCriteria === index) {
      setExpandedCriteria(null)
    } else {
      setExpandedCriteria(index)
    }
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Eligibility for Placements
        </h2>

        <div className="space-y-4">
          {eligibilityCriteria.map((criteria, index) => (
            <div
              key={criteria.criteria}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                onClick={() => toggleCriteria(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{criteria.criteria}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      expandedCriteria === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`px-6 py-4 bg-orange-50 transition-all duration-200 ease-in-out ${
                  expandedCriteria === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm sm:text-base">
                  <dt className="font-medium text-gray-500">Minimum Attendance</dt>
                  <dd className="text-gray-900">{criteria.attendance}</dd>
                  <dt className="font-medium text-gray-500">Minimum Internal Score</dt>
                  <dd className="text-gray-900">{criteria.internalScore}</dd>
                  <dt className="font-medium text-gray-500">Mock and Assessment Interview</dt>
                  <dd className="text-gray-900">{criteria.assessment}</dd>
                </dl>
                <p className="mt-4 text-sm sm:text-base text-gray-600">{criteria.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 space-x-4 flex justify-center">
          <a
            href="#apply"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
          >
            Apply Now
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
