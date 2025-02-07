'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    question: "What is Embedded C Programming?",
    answer: "Embedded C Programming is the process of writing C code to interface with hardware devices in embedded systems, typically using microcontrollers or microprocessors."
  },
  {
    question: "How do I get started with Embedded C Programming?",
    answer: "Start by learning C programming basics, then understand the hardware aspects of microcontrollers. Set up the necessary development environment with a suitable IDE and tools for embedded programming."
  },
  {
    question: "What are the benefits of learning Embedded C?",
    answer: "Embedded C is the foundation for programming embedded systems, allowing you to directly interact with hardware, manage resources efficiently, and develop real-time applications."
  },
  {
    question: "What hardware do I need for Embedded C programming?",
    answer: "You'll need a microcontroller or microprocessor, such as Arduino, STM32, or ESP32. Additionally, you'll need peripheral components like sensors, motors, and LEDs for interfacing."
  },
  {
    question: "How is Embedded C different from regular C programming?",
    answer: "Embedded C focuses on hardware-level programming with direct memory access, low-level operations, and real-time constraints. Unlike general-purpose C, embedded systems have limited resources such as memory and processing power."
  },
  {
    question: "What tools do I need for Embedded C Programming?",
    answer: "You'll need a cross-compiler (e.g., GCC for ARM), a debugger (e.g., JTAG), an IDE (e.g., Keil or MPLAB X), and hardware such as a development board (e.g., Arduino, Raspberry Pi)."
  },
  {
    question: "What is the role of interrupts in Embedded C?",
    answer: "Interrupts allow embedded systems to respond to external events asynchronously, pausing the current task to execute an interrupt service routine (ISR). This is crucial in real-time applications."
  },
  {
    question: "How do I manage memory in Embedded C?",
    answer: "Memory management in Embedded C involves efficient use of RAM and flash memory, careful allocation of resources, and techniques like memory-mapped registers to control hardware."
  },
  {
    question: "What is the importance of real-time programming in Embedded C?",
    answer: "Real-time programming ensures that embedded systems meet timing requirements, especially in applications like robotics, automotive systems, and medical devices where delays could lead to system failure."
  },
  {
    question: "How do I debug Embedded C programs?",
    answer: "Debugging in Embedded C involves using tools like hardware debuggers (e.g., JTAG) or software simulators to step through code, set breakpoints, and monitor system states during program execution."
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
          Have Any Questions About Embedded C Programming?
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
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${
                    expandedQuestion === index ? 'rotate-180' : ''
                  }`}
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
