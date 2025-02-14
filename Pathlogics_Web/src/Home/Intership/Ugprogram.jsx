



// import React from "react";
// import img10 from "../../../src/assets/img10.png";
// import { motion } from "framer-motion";

// export default function Ugprogram() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-black flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20">
//       {/* Left Section - Text Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg"
//       >
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
//           🎓 About Our 4-Year UG Programme in Computer Science
//         </h1>
//         <ul className="space-y-6">
//           {[
//             "Curriculum developed & delivered by 100+ tech leaders from Google, Microsoft, Uber etc.",
//             "Specialisations in new-age technologies and 1-year internship.",
//             "More than 1200 partner companies for student placements.",
//             "Students graduate with skills that are at par with Sr. Engineer/SDE-I.",
//           ].map((text, index) => (
//             <motion.li
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="flex items-start bg-yellow-100 p-4 rounded-lg shadow-md"
//             >
//               <span className="bg-yellow-500 w-3 h-10 mr-4 rounded"></span>
//               <p className="text-gray-800">{text}</p>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

//       {/* Right Section - Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2 }}
//         className="md:w-1/2 flex justify-center mt-12 md:mt-0"
//       >
//         <img
//           src={img10}
//           alt="Students in discussion"
//           className="rounded-xl shadow-lg w-[400px] sm:w-[500px] lg:w-[550px]"
//         />
//       </motion.div>
//     </div>
//   );
// }

import React from "react";
import img10 from "../../../src/assets/img10.png";
import { motion } from "framer-motion";

export default function Ugprogram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-400 text-black flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-extrabold text-orange-400 mb-6">
          🚀 About Our Internship Programme
        </h1>
        <ul className="space-y-6">
          {[
            "Gain real-world experience by working on live projects with industry experts.",
            "Hands-on exposure to front-end and back-end technologies.",
            "One-on-one mentorship from professionals at top tech companies.",
            "Opportunity to work with 200+ partner companies for career growth.",
          ].map((text, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-start bg-yellow-100 p-4 rounded-lg shadow-md"
            >
              <span className="bg-yellow-500 w-3 h-10 mr-4 rounded"></span>
              <p className="text-black">{text}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <img
          src={img10}
          alt="Interns working on projects"
          className="rounded-xl shadow-lg w-[400px] sm:w-[500px] lg:w-[550px]"
        />
      </motion.div>
    </div>
  );
}
