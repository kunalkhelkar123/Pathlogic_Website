
// import React from "react";
// import { motion } from "framer-motion";

// export default function Fifthpage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 text-black py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center space-y-10">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
//             🚀 The Ten Exciting Challenges
//           </h1>
//           <p className="text-lg text-white mt-4">
//             Each challenge will teach an important entrepreneurial skill to the interns.
//             Successfully clearing each challenge unlocks rewards for them.
//           </p>
//         </motion.div>

//         {/* Challenge Phases Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* 1st Phase */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="bg-white shadow-lg rounded-lg p-6"
//           >
//             <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
//               🔵 1<sup>st</sup> Phase
//             </h2>
//             <ul className="space-y-4">
//               {[
//                 "Artificial Intelligence for Startups",
//                 "Build a Personal Brand",
//                 "No-Code Website Building",
//                 "Ace the Art of Selling",
//                 "Develop a Discord Bot",
//               ].map((challenge, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-orange-500 text-white rounded-md px-6 py-3 shadow-md flex items-center justify-center text-lg"
//                 >
//                   {challenge}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* 2nd Phase */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1.2 }}
//             className="bg-white shadow-lg rounded-lg p-6"
//           >
//             <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
//               🔵 2<sup>nd</sup> Phase
//             </h2>
//             <ul className="space-y-4">
//               {[
//                 "Learn Referral Marketing",
//                 "Master Social Media Marketing",
//                 "Build a Collaborative Community",
//                 "Build Chrome Plugins",
//                 "How to Become a Leader?",
//               ].map((challenge, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-orange-500 text-white rounded-md px-6 py-3 shadow-md flex items-center justify-center text-lg"
//                 >
//                   {challenge}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

export default function Fifthpage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 text-black py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            🚀 The Ten Exciting Challenges
          </h1>
          <p className="text-lg text-white mt-4">
            Each challenge will provide hands-on experience for internship freshers, enhancing their front-end development skills.
          </p>
        </motion.div>

        {/* Challenges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
              🔵 1<sup>nd</sup> Phase
            </h2>
            <ul className="space-y-4">
              {[
                "Build a Personal Portfolio Website",
                "Convert a Design to Code",
                "Develop a To-Do List App",
                "Optimize Page Performance",
                "Create an Integrate animation ",
              ].map((challenge, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500 text-white rounded-md px-6 py-3 shadow-md flex items-center justify-center text-lg"
                >
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-600 inline-block">
              🔵 2<sup>nd</sup> Phase
            </h2>
            <ul className="space-y-4">
              {[
                "Build a real time application",
                "Make it responsive for Mobile and Tablet view",
                "Integrate REST APIs ",
                "Conncet with Database",
                "Deployed on live server",
              ].map((challenge, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500 text-white rounded-md px-6 py-3 shadow-md flex items-center justify-center text-lg"
                >
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
