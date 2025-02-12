import { useState } from "react";
import { motion } from "framer-motion";

export default function TestingJourney() {
  const [showJourney, setShowJourney] = useState(false);

  const journeySteps = [
    { emoji: "🚀", title: "Kickstart", description: "Introduction to Testing & Tools" },
    { emoji: "📝", title: "Learn Basics", description: "Manual Testing & SDLC/STLC" },
    { emoji: "⚙️", title: "Automation", description: "Selenium, Cypress, Playwright" },
    { emoji: "🛠️", title: "API Testing", description: "Postman, REST Assured, JMeter" },
    { emoji: "💡", title: "Advanced Concepts", description: "CI/CD, DevOps & Performance Testing" },
    { emoji: "🎯", title: "Mock Interviews", description: "Resume Review & Interview Prep" },
    { emoji: "🏆", title: "Placements", description: "Get Hired as QA Engineer" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-teal-600 min-h-screen flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          FullStack <span className="text-orange-600">Testing Journey</span>
        </h1>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Your path to becoming a QA expert
        </p>
        <button
          className="mt-4 px-5 py-2 text-sm sm:text-base font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-[5px] shadow-lg hover:scale-105 transition"
          onClick={() => setShowJourney(!showJourney)}
        >
          {showJourney ? "Hide Journey" : "Start Now"}
        </button>
      </div>

      {/* Journey Steps - Responsive Grid */}
      {showJourney && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4 p-4 w-full max-w-3xl">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md min-w-[120px] sm:min-w-[150px] w-full"
            >
              <span className="text-3xl">{step.emoji}</span>
              <h3 className="text-white font-semibold text-base mt-2">{step.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
