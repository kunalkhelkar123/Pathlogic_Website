// import React from "react";
// import { motion } from "framer-motion";
// import { FaAward, FaClipboardList, FaCalendarAlt } from "react-icons/fa";
// import image from "../../assets/patho.png";

// export default function Firstpage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 text-white px-6 py-12">
//       {/* Header Section */}
//       <div className="text-center space-y-6">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           // className="bg-white px-6 py-3 rounded-lg shadow-md inline-block"
//       //  className="py-1 px-4 md:px-8 flex justify-between items-center align-center "
//       >
//                   <div className="flex items-center ml-[300px] ">
//                     <button onClick={() => navigate('/')} className="text-black focus:outline-none w-[124px]">
//                       <img src={image} alt="Pathlogics" />
//                     </button>
//                   </div>

//         </motion.div>

//         {/* Main Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl font-extrabold leading-tight"
//         >
//           <div>
//           <span className="bg-orange-400 text-black px-4 py-2 rounded-md shadow-md">
//             YOUNG INNOVATOR
//           </span>{" "} </div>
//          <div className="pt-4">
//           <span className="text-white">INTERNSHIP</span>{" "}
//           </div>
//           <div className="pt-6">
//           <span className="bg-orange-400 text-black px-2 py-1  p-4 rounded-md shadow-md ">
//             CHALLENGE
//           </span> </div>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="text-lg sm:text-2xl text-gray-300"
//         >
//           A unique internship challenge designed by the best in tech <br />
//           <span className="text-white font-bold">
//             for  Engineering, BCA, MCA, B.Tech, BE, or any graduation students
//           </span>
//         </motion.p>
//       </div>

//       {/* Internship Details Section */}
//       <div className="flex flex-wrap justify-center gap-8 mt-12 ">
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="bg-white bg-opacity-10 px-10 py-8 rounded-xl shadow-lg text-center backdrop-blur-md w-60"
//         >
//           <FaCalendarAlt className="text-white text-6xl mx-auto mb-3" />
//           <h2 className="text-5xl font-bold text-yellow-400">3-6</h2>
//           <h3 className="text-white text-lg font-semibold">Months of Internship</h3>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.4 }}
//           className="bg-white bg-opacity-10 px-10 py-8 rounded-xl shadow-lg text-center backdrop-blur-md w-60"
//         >
//           <FaClipboardList className="text-white-400 text-6xl mx-auto mb-3" />
//           <h2 className="text-5xl font-bold text-yellow-400">10</h2>
//           <h3 className="text-white text-lg font-semibold">Exciting Challenges</h3>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.6 }}
//           className="bg-white bg-opacity-10 px-10 py-8 rounded-xl shadow-lg text-center backdrop-blur-md w-60"
//         >
//           <FaAward className="text-white text-6xl mx-auto mb-3" />
//           <h2 className="text-5xl font-bold text-yellow-400">15+</h2>
//           <h3 className="text-white text-lg font-semibold">Enticing Rewards</h3>
//         </motion.div>
//       </div>

//       {/* Call-to-Action Section */}
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         className="mt-12"
//       >
//         <button className="bg-orange-600 text-black text-lg font-semibold py-4 px-12 rounded-[5px] shadow-lg hover:bg-orange-700 transition">
//           Join the Challenge Now!
//         </button>
//       </motion.div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaClipboardList, FaCalendarAlt } from "react-icons/fa";
import image from "../../assets/patho.png";

export default function Firstpage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 text-white px-4 sm:px-6 py-12 w-full">
      {/* Header Section */}
      <div className="text-center space-y-6 w-full max-w-5xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center">
            <button className="w-24 sm:w-32">
              <img src={image} alt="Pathlogics" className="drop-shadow-lg" />
            </button>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight"
        >
          <div className="flex items-center justify-center ">
  <span className="bg-orange-400 text-black px-4 py-2 rounded-md shadow-md">
    YOUNG INNOVATOR
  </span>
</div>

            {/* <div className="pt-4 inline">
            <span className="text-white">INTERNSHIP</span>
          </div>
          <div className="pt-6 inline pr-6">
            <span className="bg-orange-400 text-black px-4 py-2 rounded-md shadow-md">
              CHALLENGE
            </span>
          </div> */}
          <div className="pt-1">
            <span className="text-white">INTERNSHIP</span>
          </div>
          <div className="pt-6">
            <span className="bg-orange-400 text-black px-4 py-2 rounded-md shadow-md">
              CHALLENGE
            </span>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
        >
          A unique internship challenge designed by the best in tech <br />
          <span className="text-white font-bold">
            for Engineering, BCA, MCA, B.Tech, BE, or any graduation students
          </span>
        </motion.p>
      </div>

      {/* Internship Details Section */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 max-w-5xl w-full ">
        {[
          { icon: FaCalendarAlt, num: "3-6", text: "Months of Internship" },
          { icon: FaClipboardList, num: "10", text: "Exciting Challenges" },
          { icon: FaAward, num: "15+", text: "Enticing Rewards" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + index * 0.2 }}
            className="bg-gradient-to-r from-gray-800  to-teal-900 bg-opacity-10 px-8 sm:px-12 py-6 sm:py-8 rounded-xl shadow-lg text-center backdrop-blur-md w-48 sm:w-64"
          >
            <item.icon className="text-white text-4xl sm:text-6xl mx-auto mb-2 sm:mb-3" />
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">
              {item.num}
            </h2>
            <h3 className="text-white text-sm sm:text-lg font-semibold">
              {item.text}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <motion.div whileHover={{ scale: 1.1 }} className="mt-8 sm:mt-12">
        <button className="bg-orange-600 text-white text-sm sm:text-lg font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-[5px] shadow-lg hover:bg-orange-700 transition">
          Join the Challenge Now!
        </button>
      </motion.div>
    </div>
  );
}
