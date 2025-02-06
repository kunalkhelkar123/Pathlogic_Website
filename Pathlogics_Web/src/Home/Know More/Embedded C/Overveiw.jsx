'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courseModules = [
  { id: "embedded-c-overview", title: "Introduction to Embedded C Programming", description: "Learn the fundamentals of C programming for embedded systems, and understand its significance in real-time applications." },
  { id: "hardware-interfacing", title: "Hardware Interfacing with Embedded C", description: "Explore how to interface and control hardware components such as sensors and actuators using Embedded C." },
  { id: "microcontroller-architecture", title: "Microcontroller Architecture and Programming", description: "Understand microcontroller architecture and learn to program microcontrollers using Embedded C." },
  { id: "real-time-systems", title: "Real-Time Systems with Embedded C", description: "Learn about real-time operating systems (RTOS) and their implementation using Embedded C for time-critical applications." },
  { id: "memory-management", title: "Memory Management in Embedded Systems", description: "Learn efficient memory management techniques, crucial for embedded systems with limited resources." },
  { id: "interrupts-and-timers", title: "Interrupts and Timers in Embedded C", description: "Master the use of interrupts and timers in embedded systems to handle real-time events." },
  { id: "low-level-programming", title: "Low-Level Programming and Optimization", description: "Dive into low-level programming techniques and optimizations to achieve high performance in embedded systems." },
  { id: "embedded-communication", title: "Embedded System Communication Protocols", description: "Learn communication protocols like SPI, I2C, and UART, and how to use them in embedded systems." },
  { id: "debugging-and-testing", title: "Debugging and Testing Embedded Systems", description: "Understand debugging techniques and tools used to test embedded systems during development." },
  { id: "embedded-projects", title: "Hands-on Embedded Projects", description: "Work on practical embedded projects to apply your skills in real-world scenarios." },
]

export default function CourseOverview() {
  const [selectedModule, setSelectedModule] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Embedded C Programming Course Overview</h1>
          <p className="text-lg text-gray-600">Learn C programming in the context of embedded systems, and get practical exposure to real-time applications. Duration: 4 Months | Course Mode: Offline</p>
        </div>

        {/* Course Modules - Circular Diagram */}
        <div className="relative">
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center z-10">
            <div className="text-lg font-bold text-center text-gray-800">
              EMBEDDED C
              <br />
              PROGRAMMING
              <br />
              COURSE
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
