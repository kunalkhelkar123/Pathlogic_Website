import { useState } from "react";
import { motion } from "framer-motion";

export default function AWSDevOpsJourney() {
  const [showJourney, setShowJourney] = useState(false);

  const journeySteps = [
    { emoji: "🚀", title: "Kickstart", description: "Intro to AWS & DevOps" },
    { emoji: "📝", title: "Registration", description: "Enroll in AWS DevOps Course" },
    { emoji: "☁️", title: "Cloud Basics", description: "Learn AWS Core Services" },
    // { emoji: "🛠️", title: "DevOps Tools", description: "Master Terraform, Docker & Kubernetes" },
    // { emoji: "🔄", title: "CI/CD Pipelines", description: "Implement Jenkins & GitHub Actions" },
    { emoji: "💡", title: "Hands-on Projects", description: "Deploy Real-World Applications" },
    { emoji: "🎯", title: "Mock Interviews", description: "Prepare with Experts" },
    { emoji: "🏆", title: "Job Placement", description: "Land Your Dream DevOps Role" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-teal-700 min-h-screen flex flex-col items-center p-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          AWS <span className="text-yellow-400">DevOps Journey</span>
        </h1>
        <p className="text-white mt-2 text-lg sm:text-xl">
          Become a Certified AWS DevOps Engineer
        </p>
        <button
          className="mt-4 px-5 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-teal-500 to-green-500 rounded-lg shadow-lg hover:scale-105 transition"
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
