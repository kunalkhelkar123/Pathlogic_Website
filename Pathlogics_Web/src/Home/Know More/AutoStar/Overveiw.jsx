'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courseModules = [
  { id: "autosar-overview", title: "Introduction to AUTOSAR", description: "Learn the fundamentals of AUTOSAR and its importance in automotive software architecture" },
  { id: "autosar-standards", title: "AUTOSAR Standards and Architecture", description: "Explore the key standards and architecture of AUTOSAR for real-time systems" },
  { id: "ecu-communication", title: "ECU Communication in AUTOSAR", description: "Understand the communication mechanisms between ECUs in an AUTOSAR-based system" },
  { id: "autosar-classic-platform", title: "AUTOSAR Classic Platform", description: "Learn about the classic platform for embedded real-time systems in vehicles" },
  { id: "autosar-adaptive-platform", title: "AUTOSAR Adaptive Platform", description: "Dive into the adaptive platform for high-performance computing in modern vehicles" },
  { id: "software-components", title: "Software Components in AUTOSAR", description: "Learn about AUTOSAR software components and their role in automotive software development" },
  { id: "real-time-systems", title: "Real-Time Systems in AUTOSAR", description: "Understand how AUTOSAR supports real-time systems for critical automotive applications" },
  { id: "safety-standards", title: "Safety Standards in AUTOSAR", description: "Learn about functional safety standards like ISO 26262 and their integration in AUTOSAR" },
  { id: "autosar-tools", title: "AUTOSAR Tools and Configuration", description: "Explore the tools used for configuring and developing AUTOSAR-based systems" },
  { id: "autosar-security", title: "Security in AUTOSAR Systems", description: "Understand the security mechanisms in AUTOSAR-based automotive software" },
  { id: "autosar-testing", title: "Testing and Validation in AUTOSAR", description: "Learn the methods for testing and validating AUTOSAR-based automotive systems" }
]

export default function CourseOverview() {
  const [selectedModule, setSelectedModule] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AUTOSAR Course Overview</h1>
          <p className="text-lg text-gray-600">Comprehensive training program covering essential AUTOSAR concepts for automotive software development</p>
        </div>

        {/* Course Modules - Circuit Board Design */}
        <div className="relative">
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center z-10">
            <div className="text-lg font-bold text-center text-gray-800">
              AUTOSAR
              <br />
              COURSE
              <br />
              OVERVIEW
            </div>
          </div>

          {/* Circuit Lines */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 600">
            <g className="text-gray-300" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M500 50 L500 230" />
              <path d="M500 370 L500 550" />
              <path d="M180 300 L420 300" />
              <path d="M580 300 L820 300" />
              {courseModules.map((_, index) => {
                const angle = (index / courseModules.length) * 2 * Math.PI
                const x = 500 + 250 * Math.cos(angle)
                const y = 300 + 250 * Math.sin(angle)
                return <path key={index} d={`M500 300 L${x} ${y}`} />
              })}
            </g>
          </svg>

          {/* Module Circles */}
          <div className="relative max-w-[80vw] h-[600px]">
            {courseModules.map((module, index) => {
              const angle = (index / courseModules.length) * 2 * Math.PI
              const x = 50 + 45 * Math.cos(angle)
              const y = 50 + 45 * Math.sin(angle)
              return (
                <motion.div
                  key={module.id}
                  style={{
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    // transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}  // Moves the circle down by 10% on hover
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="w-24 h-24 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center p-2 hover:bg-orange-50 transition-colors duration-200 group"
                  >
                    <span className="text-xs font-medium text-gray-800 text-center group-hover:text-orange-600">
                      {module.title}
                    </span>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Module Details Modal */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
              <p className="text-gray-600 mb-6">{selectedModule.description}</p>
              <button
                onClick={() => setSelectedModule(null)}
                className="bg-orange-500 text-white px-6 py-3 text-lg rounded hover:bg-orange-600 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
