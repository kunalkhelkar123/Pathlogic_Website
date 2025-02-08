// import React from "react";
// import { motion } from "framer-motion";
// import webdriver from "../../../assets/driver.png";
// import testNG from "../../../assets/texting1.png";
// import maven from "../../../assets/maven1.png";
// import junit from "../../../assets/junit1.png";

// const TechCard = ({ logo, label, color }) => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex flex-col items-center space-y-4"
//   >
//     <div
//       className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
//     >
//       {logo}
//     </div>
//     <motion.span
//       whileHover={{ color: "#4A90E2" }}
//       className="text-2xl md:text-3xl font-bold text-gray-800"
//     >
//       {label}
//     </motion.span>
//   </motion.div>
// );

// export default function SeleniumStack() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Master Automation with
//             <span className="block text-indigo-600">Selenium & Java</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-gray-700 mt-4">
//             Automate web applications using industry-standard tools.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12 items-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//             logo={<img src={webdriver} alt="WebDriver Logo" className="w-16 h-16" />}
//             label="Selenium WebDriver"
//             color="bg-gradient-to-br from-gray-900 to-blue-600"
//           /> 
//           <TechCard
//             logo={<img src={testNG} alt="TestNG Logo" className="w-20 h-20" />}
//             label="TestNG"
//             color="bg-green-500 relative p-6 shadow-lg"
//           /> 
//           <TechCard
//             logo={<img src={maven} alt="Maven Logo" className="w-20 h-20" />}
//             label="Maven"
//             color="bg-gradient-to-br from-purple-900 to-pink-500"
//           /> 
//           <TechCard
//             logo={<img src={junit} alt="JUnit Logo" className="w-20 h-20" />}
//             label="JUnit"
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
//             Build reliable automation frameworks with Selenium and Java.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700"
//           >
//             Get Started
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
  faPlayCircle,
  faCode,
  faBug,
  faCogs,
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

export default function SeleniumJavaStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Master Selenium with
            <span className="block text-indigo-600">Java Automation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Learn automated testing using Selenium WebDriver with Java.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            icon={faPlayCircle}
            label="Getting Started"
            color="bg-gradient-to-br from-blue-800 to-blue-500"
          />
          <TechCard
            icon={faCode}
            label="WebDriver API"
            color="bg-green-500 relative p-6 shadow-lg"
          />
          <TechCard
            icon={faBug}
            label="Test Automation"
            color="bg-gradient-to-br from-purple-900 to-pink-500"
          />
          <TechCard
            icon={faCogs}
            label="Frameworks"
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
            Build robust automation frameworks with Selenium and Java.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700"
          >
            Start Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
