'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const moduleContents = [
  {
    title: "Module 1",
    subtitle: "Introduction to MicroPython and Embedded Systems",
    topics: [
      {
        title: "Overview of MicroPython",
      },
      {
        title: "Introduction to Embedded Systems",
      },
      {
        title: "Setting Up the MicroPython Development Environment",
      },
      {
        title: "Basic Embedded Systems Concepts",
      },
      {
        title: "MicroPython vs. Other Embedded Languages",
      }
    ]
  },
  {
    title: "Module 2",
    subtitle: "MicroPython for Hardware Control",
    topics: [
      {
        title: "Interfacing with GPIO Pins",
      },
      {
        title: "Reading Sensors with MicroPython",
      },
      {
        title: "Controlling Motors and Actuators",
      },
      {
        title: "PWM and Analog Control",
      }
    ]
  },
  {
    title: "Module 3",
    subtitle: "MicroPython for Communication and Networking",
    topics: [
      {
        title: "Serial Communication (UART)",
      },
      {
        title: "I2C and SPI Protocols",
      },
      {
        title: "Wi-Fi and Bluetooth Communication",
      },
      {
        title: "MQTT Protocol for IoT Devices",
      }
    ]
  },
  {
    title: "Module 4",
    subtitle: "Advanced Topics in MicroPython and Embedded Systems",
    topics: [
      {
        title: "Real-Time Operating Systems (RTOS) with MicroPython",
      },
      {
        title: "Low Power Consumption Techniques",
      },
      {
        title: "Debugging and Testing Embedded Systems",
      },
      {
        title: "Building Practical Embedded Projects",
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
          MicroPython for Embedded Systems
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
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${expandedSession === session.title ? 'rotate-180' : ''}`}
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
