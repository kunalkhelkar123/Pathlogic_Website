'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const moduleContents = [
  {
    title: "Session 1",
    subtitle: "Introduction to Embedded C Programming",
    topics: [
      {
        title: "Overview of Embedded Systems",
      },
      {
        title: "Introduction to C Programming",
      },
      {
        title: "Setting Up the Development Environment",
        subtopics: [
          "Installing and configuring compilers",
          "Using IDEs for embedded programming",
          "Basic structure of an embedded C program"
        ]
      },
      {
        title: "Understanding Microcontrollers and Microprocessors",
        subtopics: [
          "Difference between microcontrollers and microprocessors",
          "Common microcontroller families",
          "Architecture of microcontrollers"
        ]
      },
      {
        title: "Input/Output Operations in Embedded C",
      },
      {
        title: "Memory Management in Embedded Systems",
      },
      {
        title: "Debugging Embedded C Programs",
      }
    ]
  },
  {
    title: "Session 2",
    subtitle: "Advanced Embedded C Programming Concepts",
    topics: [
      {
        title: "Pointers and Memory Management",
      },
      {
        title: "Interrupts and Timers in Embedded C",
      },
      {
        title: "Communication Protocols: UART, SPI, I2C",
      },
      {
        title: "Interfacing External Devices: LCD, Motors, Sensors",
      },
      {
        title: "Low Power Programming Techniques",
      },
      {
        title: "Real-Time Operating Systems (RTOS) Basics",
      }
    ]
  },
  {
    title: "Session 3",
    subtitle: "Practical Applications and Real-Time Systems",
    topics: [
      {
        title: "Designing and Implementing Real-Time Applications",
      },
      {
        title: "Working with ADC/DAC in Embedded Systems",
      },
      {
        title: "Data Acquisition Systems and Signal Processing",
      },
      {
        title: "Building Embedded Projects with C",
      }
    ]
  },
  {
    title: "Session 4",
    subtitle: "Embedded C System Optimization and Best Practices",
    topics: [
      {
        title: "Code Optimization Techniques in Embedded C",
      },
      {
        title: "Memory and Performance Optimization",
      },
      {
        title: "Embedded System Testing and Validation",
      },
      {
        title: "Best Practices for Embedded C Programming",
      }
    ]
  }
]

export default function ProgramModules() {
  const [expandedSession, setExpandedSession] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Embedded C Programming Course Modules
        </h1>
        
        <div className="space-y-4">
          {moduleContents.map((session) => (
            <div key={session.title} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedSession(
                  expandedSession === session.title ? null : session.title
                )}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {session.title}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${
                    expandedSession === session.title ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSession === session.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      {session.subtitle && (
                        <div className="text-orange-500 font-medium mb-4">
                          {session.subtitle}
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        {session.topics.map((topic, index) => (
                          <div key={index}>
                            <div className="font-medium text-gray-900">
                              {topic.title}
                            </div>
                            {topic.subtopics && (
                              <ul className="mt-2 ml-6 space-y-1">
                                {topic.subtopics.map((subtopic, subIndex) => (
                                  <li 
                                    key={subIndex}
                                    className="text-gray-600 before:content-['-'] before:mr-2"
                                  >
                                    {subtopic}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
