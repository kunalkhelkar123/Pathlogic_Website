'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courseModules = [
  { id: "introduction-micropython", title: "Introduction to MicroPython", description: "Learn the basics of MicroPython and its applications in embedded systems" },
  { id: "hardware-interaction", title: "Interfacing with Hardware", description: "Explore how to interact with hardware using MicroPython, including sensors, motors, and peripherals" },
  { id: "gpio-pins", title: "Working with GPIO Pins", description: "Master how to use General Purpose Input/Output (GPIO) pins in embedded projects with MicroPython" },
  { id: "i2c-spi-communication", title: "I2C & SPI Communication", description: "Learn how to communicate with devices using I2C and SPI protocols in MicroPython" },
  { id: "wifi-bluetooth", title: "Wi-Fi and Bluetooth with MicroPython", description: "Understand how to enable Wi-Fi and Bluetooth connectivity on MicroPython-enabled devices" },
  { id: "timers-interrupts", title: "Timers and Interrupts", description: "Learn how to use timers and interrupts to manage real-time tasks in MicroPython" },
  { id: "sensor-communication", title: "Working with Sensors", description: "Explore how to interface with various sensors (e.g., temperature, humidity) using MicroPython" },
  { id: "advanced-topics", title: "Advanced MicroPython Topics", description: "Dive deeper into advanced topics such as real-time systems and performance optimization in MicroPython" },
  { id: "error-handling", title: "Error Handling and Debugging", description: "Learn how to handle errors and debug your MicroPython programs effectively" },
  { id: "iot-projects", title: "IoT Projects with MicroPython", description: "Build Internet of Things (IoT) projects using MicroPython and various networking technologies" },
  { id: "microcontroller-selection", title: "Selecting Microcontrollers", description: "Understand how to select the right microcontroller for your MicroPython projects" }
]

export default function CourseOverview() {
  const [selectedModule, setSelectedModule] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MicroPython for Embedded Systems Course Overview</h1>
          <p className="text-lg text-gray-600">Comprehensive training program covering MicroPython and its application in embedded systems development</p>
        </div>

        {/* Course Modules - Circular Layout */}
        <div className="relative">
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center z-10">
            <div className="text-lg font-bold text-center text-gray-800">
              MICRO
              <br />
              PYTHON
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
