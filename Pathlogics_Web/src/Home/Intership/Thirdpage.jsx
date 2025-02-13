


// import React from "react";
// //import img from "../../../src/assets/background.jpg";
// import img2 from "../../../src/assets/student.png";
// import { motion } from "framer-motion";

// export default function Thirdpage() {
//   return (
//     <div
//       className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-8 lg:px-20 py-16 text-white bg-gradient-to-br from-gray-900 to-teal-600"
//       // style={{ backgroundImage: `url(${img})` }}
//     >
//       {/* Left Section - Text Content */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="lg:w-1/2 text-center lg:text-left space-y-6 bg-black bg-opacity-50 p-8 rounded-xl shadow-lg"
//       >
//         <h1 className="text-4xl sm:text-5xl font-extrabold">
//           Introducing the Young <br />
//           Innovator Internship Challenge
//         </h1>

//         <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
//           A one-of-a-kind internship challenge that rewards you for learning
//           and improving. Designed exclusively for{" "}
//           <span className="text-yellow-400 font-semibold">
//             engineering, BCA, MCA, B.Tech, BE, or any graduation students
//           </span>
//           , this internship program will take students through ten gamified
//           challenges.
//           <br />
//           <br />
//           Clear each level with guidance from industry leaders to win{" "}
//           <span className="text-yellow-400 font-semibold">Scaler Coins</span>{" "}
//           and redeem them to get prizes like Xbox, smartwatches, SST
//           merchandise, and more.
//         </p>
//       </motion.div>

//       {/* Right Section - Image */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.2 }}
//         className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
//       >
//         <img
//           src={img2}
//           alt="Student"
//           className="w-[320px] sm:w-[400px] lg:w-[450px] rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// }

import React from "react";
import img2 from "../../../src/assets/student.png";
import { motion } from "framer-motion";

export default function Thirdpage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-teal-600 text-white px-8 lg:px-20 py-16">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 text-center lg:text-left space-y-6 bg-white bg-opacity-10 p-10 rounded-xl shadow-xl backdrop-blur-md"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-orange-400"
        >
          🚀 Introducing the Young 
          Innovator Internship Challenge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-lg sm:text-xl text-gray-200 leading-relaxed"
        >
          A one-of-a-kind internship challenge that rewards you for learning
          and improving. Designed exclusively for{" "}
          <span className="text-yellow-400 font-semibold">
            Engineering, BCA, MCA, B.Tech, BE, or any graduation students
          </span>
          , this internship program will take students through ten gamified
          challenges.
          <br />
          <br />
          Clear each level with guidance from industry leaders to win{" "}
          <span className="text-yellow-400 font-semibold">Scaler Coins</span>{" "}
          and redeem them to get prizes like Xbox, smartwatches, SST
          merchandise, and more.
        </motion.p>

        {/* Call to Action
        <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
          <button className="bg-orange-600 text-right text-black text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition">
            Apply Now
          </button>
        </motion.div> */}
      </motion.div>

      {/* Right Section - Image with Floating Effect */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
      >
        <motion.img
          src={img2}
          alt="Student"
          className="w-[320px] sm:w-[400px] lg:w-[450px] rounded-lg shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
