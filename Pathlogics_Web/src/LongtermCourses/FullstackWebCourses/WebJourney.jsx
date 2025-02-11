
import { useState } from "react";
import { motion } from "framer-motion";

export default function WebJourney() {
  const [showJourney, setShowJourney] = useState(false);
  const journeySteps = [
    { emoji: "🚀", title: "Kickstart", description: "Orientation & Meet Peers" },
    { emoji: "😎", title: "Registration", description: "Complete Course Signup" },
    { emoji: "📚", title: "Enroll Now", description: "Start Learning Modules" },
    { emoji: "💡", title: "Master Skills", description: "Work on Real Projects" },
    { emoji: "🎯", title: "Interviews", description: "Resume & Mock Interviews" },
    { emoji: "🏆", title: "Placements", description: "Get Your Dream Job" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-teal-600 min-h-screen flex flex-col items-center justify-center pt-[91px]">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white">FullStack <span className="text-orange-500">Journey</span></h1>
        <p className="text-gray-400 mt-2 text-sm">Your path to becoming a pro developer</p>
        <button 
          className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg hover:scale-105 transition"
          onClick={() => setShowJourney(true)}
        >
          Start Now
        </button>
      </div>
      {showJourney && (
        <div className="mt-6 flex flex-wrap justify-center space-x-4 overflow-x-auto p-4 scrollbar-hide">
          {journeySteps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg min-w-[180px] h-[180px] shadow-lg border border-gray-700 mb-4 sm:mb-6"
            >
              <span className="text-3xl">{step.emoji}</span>
              <h3 className="text-white font-semibold text-lg mt-2">{step.title}</h3>
              <p className="text-gray-400 text-sm mt-2 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      )}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
