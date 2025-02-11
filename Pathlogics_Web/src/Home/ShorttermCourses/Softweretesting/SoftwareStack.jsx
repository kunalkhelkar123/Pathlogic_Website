
// import React from "react";
// import { motion } from "framer-motion";
// import manualIcon from "../../../assets/manualtext.png"
// import automationIcon from "../../../assets/automationtext.png";
// import performanceIcon from "../../../assets/performancetext.png";
// import securityIcon from "../../../assets/securitytext.png";

// const TechCard = ({ logo, label, color }) => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex flex-col items-center space-y-4"
//   >
//     <div
//       className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
//     >
//       <img src={logo} alt={`${label} Logo`} className="w-24 h-24" />
//     </div>
//     <motion.span
//       whileHover={{ color: "#4A90E2" }}
//       className="text-2xl md:text-3xl font-bold text-gray-800"
//     >
//       {label}
//     </motion.span>
//   </motion.div>
// );

// export default function SoftwareStack() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Learn Modern
//             <span className="block text-indigo-600">Software Testing</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-gray-700 mt-4">
//             Master testing methodologies with industry-standard tools and technologies.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12 items-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//             logo={manualIcon}
//             label="Manual Testing"
//             color="bg-gradient-to-br from-gray-900 to-blue-600"
//           />
//           <TechCard
//             logo={automationIcon}
//             label="Automation Testing"
//             color="bg-green-500 relative p-6 shadow-lg"
//           />
//           <TechCard
//             logo={performanceIcon}
//             label="Performance Testing"
//             color="bg-gradient-to-br from-purple-900 to-pink-500"
//           />
//           <TechCard
//             logo={securityIcon}
//             label="Security Testing"
//             color="bg-gradient-to-br from-orange-900 to-yellow-300"
//           />
//         </motion.div>

//         <div className="mt-16 text-center">
//           <motion.p
//             className="text-xl md:text-2xl text-gray-700 mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Build robust applications with comprehensive software testing practices.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700"
//           >
//             Start Now
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faClipboardCheck,
  faCogs,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

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

export default function SoftwareTestingStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn Modern
            <span className="block text-indigo-600">Software Testing</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Master testing methodologies with industry-leading tools and techniques.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            icon={faBug}
            label="Bug Tracking"
            color="bg-gradient-to-br from-red-600 to-red-900"
          />
          <TechCard
            icon={faClipboardCheck}
            label="Test Automation"
            color="bg-green-500 relative p-6 shadow-lg"
          />
          <TechCard
            icon={faCogs}
            label="Performance Testing"
            color="bg-gradient-to-br from-blue-900 to-cyan-500"
          />
          <TechCard
            icon={faVial}
            label="Manual Testing"
            color="bg-gradient-to-br from-orange-900 to-yellow-300"
          />
        </motion.div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Build robust applications with a powerful software testing stack.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-orange-700"
          >
            Start Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
