'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    question: "What is AUTOSAR?",
    answer: "AUTOSAR (Automotive Open System Architecture) is a global standard for automotive software architecture. It defines a standardized approach to software development for embedded systems in vehicles, focusing on flexibility, modularity, and scalability."
  },
  {
    question: "What are the key benefits of using AUTOSAR?",
    answer: "AUTOSAR offers benefits such as reducing development costs, improving software reusability, enabling scalability, and providing a platform for the integration of hardware and software components from different manufacturers."
  },
  {
    question: "What is the difference between AUTOSAR Classic and Adaptive platforms?",
    answer: "The Classic Platform is designed for deeply embedded real-time systems, while the Adaptive Platform is intended for more dynamic, high-performance computing systems, offering more flexibility for complex applications like autonomous driving."
  },
  {
    question: "How does AUTOSAR handle real-time systems?",
    answer: "AUTOSAR supports real-time systems through its use of a real-time operating system (RTOS), ensuring that software components meet time constraints and operate within predefined timing limits."
  },
  {
    question: "What is the role of Software Components in AUTOSAR?",
    answer: "In AUTOSAR, Software Components (SWCs) are the building blocks of the system. They provide functionality and interact with other components through defined communication protocols, ensuring modular and scalable software design."
  },
  {
    question: "What are the key communication protocols used in AUTOSAR?",
    answer: "AUTOSAR uses communication protocols like CAN, FlexRay, and Ethernet to enable reliable communication between software components and ECUs (Electronic Control Units) within a vehicle's system."
  },
  {
    question: "What tools are used for AUTOSAR system development?",
    answer: "AUTOSAR development tools include configuration tools for ECU software design, ARXML editors for defining XML-based data models, and debugging and testing tools to ensure the functionality and reliability of the system."
  },
  {
    question: "How does AUTOSAR support safety-critical systems?",
    answer: "AUTOSAR provides support for safety-critical systems through compliance with ISO 26262 (functional safety standard) and allows the integration of safety mechanisms to ensure fault tolerance and reliability."
  },
  {
    question: "What is the role of the AUTOSAR Runtime Environment (RTE)?",
    answer: "The AUTOSAR RTE acts as a middleware layer between the application software components and the underlying ECU hardware, facilitating communication and ensuring the independence of software components from hardware details."
  },
  {
    question: "How does AUTOSAR help in reducing development time and costs?",
    answer: "By providing standardized components, communication protocols, and interfaces, AUTOSAR helps automotive manufacturers and suppliers streamline development processes, reduce costs, and improve the overall efficiency of vehicle software design."
  }
]

export default function Douts() {
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [viewMore, setViewMore] = useState(false)

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Have Any Questions About AUTOSAR?
        </h1>
        
        <div className="space-y-4">
          {questions.slice(0, viewMore ? questions.length : 10).map((qa, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {qa.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${expandedQuestion === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {expandedQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-orange-100 border-t border-orange-500">
                      <div className="text-gray-600">
                        {qa.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <button
          onClick={() => setViewMore(!viewMore)}
          className="mt-6 py-2 px-4 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors duration-200 mx-auto block"
        >
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}
