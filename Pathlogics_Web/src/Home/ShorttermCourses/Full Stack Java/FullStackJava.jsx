// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCode,
//   faDatabase,
//   faCloud,
//   faCogs,
// } from "@fortawesome/free-solid-svg-icons";

// const TechCard = ({ icon, label, color }) => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex flex-col items-center space-y-4"
//   >
//     <div
//       className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
//     >
//       <FontAwesomeIcon icon={icon} className="text-white text-6xl" />
//     </div>
//     <motion.span
//       whileHover={{ color: "#4A90E2" }}
//       className="text-2xl md:text-3xl font-bold text-gray-800"
//     >
//       {label}
//     </motion.span>
//   </motion.div>
// );

// export default function FullStackJava() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Master Full Stack
//             <span className="block text-indigo-600">Java Development</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-gray-700 mt-4">
//             Learn to build scalable applications with Java, Spring Boot, and modern web technologies.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12 items-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//             icon={faCode}
//             label="Frontend Development"
//             color="bg-gradient-to-br from-blue-900 to-blue-500"
//           />
//           <TechCard
//             icon={faDatabase}
//             label="Database Management"
//             color="bg-green-500 relative p-6 shadow-lg"
//           />
//           <TechCard
//             icon={faCloud}
//             label="Cloud Deployment"
//             color="bg-gradient-to-br from-purple-900 to-pink-500"
//           />
//           <TechCard
//             icon={faCogs}
//             label="Backend Development"
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
//             Gain hands-on experience with the latest Full Stack Java technologies.
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
  faCode,
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const TechCard = ({ icon, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-2"
  >
    <div
      className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      <FontAwesomeIcon icon={icon} className="text-white text-4xl" />
    </div>
    <motion.span
      whileHover={{ color: "#4A90E2" }}
      className="text-lg md:text-xl font-bold text-gray-800"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function FullStackJavaStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Master Full Stack
            <span className="block text-indigo-600">Java Development</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4">
            Learn the complete stack with industry-leading technologies.
          </p>
        </div>

        <motion.div
          className="flex justify-center gap-6 items-center flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            icon={faCode}
            label="Frontend"
            color="bg-gradient-to-br from-blue-700 to-blue-500"
          />
          <TechCard
            icon={faServer}
            label="Backend"
            color="bg-green-500"
          />
          <TechCard
            icon={faDatabase}
            label="Database"
            color="bg-gradient-to-br from-purple-900 to-pink-500"
          />
          <TechCard
            icon={faCloud}
            label="Cloud"
            color="bg-gradient-to-br from-orange-900 to-yellow-300"
          />
        </motion.div>

        <div className="mt-12 text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Build scalable applications with a powerful Java stack.
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
