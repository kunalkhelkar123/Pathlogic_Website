'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    question: "What is MicroPython?",
    answer: "MicroPython is a lean and efficient implementation of the Python 3 programming language, optimized to run on microcontrollers and embedded systems."
  },
  {
    question: "How do I get started with MicroPython?",
    answer: "Start by selecting a compatible microcontroller (e.g., ESP32, Raspberry Pi Pico), setting up the MicroPython firmware, and using the REPL (Read-Eval-Print Loop) for quick testing and experimentation."
  },
  {
    question: "What are the benefits of using MicroPython in embedded systems?",
    answer: "MicroPython allows for rapid development, readability, and ease of use of Python, making it an excellent choice for embedded system development, especially for beginners and rapid prototyping."
  },
  {
    question: "What hardware can I use with MicroPython?",
    answer: "MicroPython can be used with a variety of microcontrollers and development boards, such as ESP32, Raspberry Pi Pico, STM32, and more."
  },
  {
    question: "How do I interact with hardware using MicroPython?",
    answer: "MicroPython provides libraries for accessing hardware features like GPIO pins, PWM, ADC, I2C, SPI, and UART, enabling you to interact with sensors, motors, and other devices."
  },
  {
    question: "What is the role of the REPL in MicroPython?",
    answer: "The REPL (Read-Eval-Print Loop) allows for interactive testing and debugging of MicroPython code directly on the microcontroller, providing real-time feedback for development."
  },
  {
    question: "How do I use Wi-Fi or Bluetooth with MicroPython?",
    answer: "MicroPython supports both Wi-Fi and Bluetooth connectivity, with libraries like `network` for Wi-Fi and `bluetooth` for Bluetooth, allowing easy communication with IoT devices or networks."
  },
  {
    question: "What are the limitations of using MicroPython?",
    answer: "MicroPython is designed for microcontrollers with limited resources, so it might not be suitable for very resource-heavy tasks. It's best for low-power, low-cost, and simple applications."
  },
  {
    question: "Can I use MicroPython for real-time systems?",
    answer: "MicroPython can be used for basic real-time tasks, but it lacks an official real-time operating system (RTOS). For critical timing tasks, you may need to use a separate RTOS or other real-time libraries."
  },
  {
    question: "What is the MicroPython ecosystem like?",
    answer: "The MicroPython ecosystem includes an official standard library, many third-party modules, and an active community of developers. It supports a variety of hardware and provides documentation, examples, and tutorials."
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
          Have Any Questions about MicroPython for Embedded Systems?
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
