// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faServer,
//   faCogs,
//   faCloud,
//   faCodeBranch,
// } from "@fortawesome/free-solid-svg-icons";

// const TechCard = ({ icon, label, color }) => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex flex-col items-center space-y-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
//   >
//     <div
//       className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
//     >
//       <FontAwesomeIcon icon={icon} className="text-white text-4xl sm:text-5xl md:text-6xl" />
//     </div>
//     <motion.span
//       whileHover={{ color: "#4A90E2" }}
//       className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 text-center"
//     >
//       {label}
//     </motion.span>
//   </motion.div>
// );

// export default function Astack() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             Master's In
//             <span className="block text-indigo-600">AWS DevOps</span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">
//             Automate, deploy, and scale with AWS DevOps tools and best practices.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//             icon={faCloud}
//             label="AWS Cloud"
//             color="bg-gradient-to-br from-blue-900 to-blue-400"
//           />
//           <TechCard
//             icon={faCogs}
//             label="CI/CD Pipelines"
//             color="bg-green-500 relative p-6 shadow-lg"
//           />
//           <TechCard
//             icon={faCodeBranch}
//             label="Infrastructure as Code"
//             color="bg-gradient-to-br from-purple-900 to-pink-500"
//           />
//           <TechCard
//             icon={faServer}
//             label="Monitoring & Logging"
//             color="bg-gradient-to-br from-orange-900 to-yellow-300"
//           />
//         </motion.div>

//         <div className="mt-12 sm:mt-16 text-center">
//           <motion.p
//             className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Build, test, and deploy with efficiency using AWS DevOps.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-indigo-600 text-white text-base sm:text-lg font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-indigo-700"
//           >
//             Start Now
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCogs, faCodeBranch, faServer } from "@fortawesome/free-solid-svg-icons";

const TechCard = ({ icon, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-4"
  >
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      <FontAwesomeIcon icon={icon} className="text-white text-6xl" />
    </div>
    <motion.span
      whileHover={{ color: "#4A90E2" }}
      className="text-2xl md:text-3xl font-bold text-gray-800"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function Awsstack() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 ${showJourney ? 'h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn Modern
            <span className="block text-indigo-600">AWS DevOps</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Master cloud and DevOps with industry-leading AWS technologies.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard icon={faCloud} label="AWS Cloud" color="bg-gradient-to-br from-blue-900 to-blue-400" />
          <TechCard icon={faCogs} label="CI/CD Pipelines" color="bg-gradient-to-br from-green-700 to-green-400" />
          <TechCard icon={faCodeBranch} label="Infrastructure as Code" color="bg-gradient-to-br from-purple-800 to-pink-400" />
          <TechCard icon={faServer} label="Monitoring & Logging" color="bg-gradient-to-br from-orange-700 to-gray-500" />
        </motion.div>

        <div className="mt-16 text-center">
          {!showJourney ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-orange-600 text-white py-2 px-4 rounded-[5px] hover:bg-orange-700"
              onClick={() => setShowJourney(true)}
            >
              Start Now
            </motion.button>
          ) : (
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Your journey begins now! 🚀
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
