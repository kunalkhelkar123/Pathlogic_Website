


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Secondpage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-teal-700 text-white p-6 md:p-12 relative overflow-hidden">
//       {/* Animated Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-30"></div>

//       <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
//         {/* Internship Program Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           whileHover={{ scale: 1.02 }}
//           className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4">
//             🚀 Internship Program
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-6">
//             Gain experience that makes you job-ready.
//           </p>
//           <ul className="list-disc pl-6 text-gray-300 space-y-2 text-left inline-block">
//             <li>🎓 Mentorship</li>
//             <li>💻 Real-World Projects</li>
//             <li>✅ 100% Placement Guarantee</li>
//           </ul>
//           <div className="mt-6">
//             <Link to="/QuickEnquiry">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-orange-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition"
//               >
//                 Start Internship Today!
//               </motion.button>
//             </Link>
//           </div>
//         </motion.section>

//         {/* IT Certification Program Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           whileHover={{ scale: 1.02 }}
//           className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4">
//             🎓 Get Certified, Get Ahead
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-6">
//             Join Our Globally Recognized IT Certification Program!
//           </p>
//           <ul className="list-disc pl-6 text-gray-300 space-y-2 text-left inline-block">
//             <li>📘 Advanced Learning</li>
//             <li>👨‍🏫 Expert Trainers</li>
//             <li>🚀 In-Demand Skills</li>
//           </ul>
//           <div className="mt-6">
//             <Link to="/QuickEnquiry">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-orange-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition"
//               >
//                 Join IT Certification Program!
//               </motion.button>
//             </Link>
//           </div>
//         </motion.section>

//         {/* Paid Internship Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           whileHover={{ scale: 1.02 }}
//           className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4">
//             💼 Learn, Earn, and Grow
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-6">
//             Join Our Paid Internship Program and Start Your IT Career!
//           </p>
//           <ul className="list-disc pl-6 text-gray-300 space-y-2 text-left inline-block">
//             <li>💰 Paid Internship</li>
//             <li>🌍 Industry Exposure</li>
//             <li>🔧 Practical Learning</li>
//           </ul>
//           <div className="mt-6">
//             <Link to="/QuickEnquiry">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="bg-orange-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition"
//               >
//                 Start Your Paid Internship!
//               </motion.button>
//             </Link>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Secondpage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("secondpage");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="secondpage"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-teal-700 text-white p-6 md:p-12 overflow-hidden"
    >
      {/* Background Floating Dots */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-20 h-20 bg-teal-300 opacity-20 rounded-full animate-pulse top-10 left-16"></div>
        <div className="absolute w-24 h-24 bg-orange-400 opacity-20 rounded-full animate-bounce bottom-10 right-16"></div>
        <div className="absolute w-16 h-16 bg-yellow-500 opacity-20 rounded-full animate-ping top-20 right-40"></div>
      </div>

      {/* Heading Section with Animated Text */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center text-orange-600 mb-12"
      >
        Elevate Your Career with Us 🚀
      </motion.h1>

      <div className="max-w-5xl w-full text-center space-y-16 relative z-10">
        {/* Internship Program Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-orange-400 mb-4">
            🚀 Internship Program
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Gain experience that makes you job-ready.
          </p>
          <ul className="list-disc pl-6 text-white space-y-2 text-left inline-block">
            <li>🎓 Mentorship</li>
            <li>💻 Real-World Projects</li>
            <li>✅ 100% Placement Guarantee</li>
          </ul>
          <div className="mt-6">
            <Link to="/QuickEnquiry">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition"
              >
                Start Internship Today!
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* IT Certification Program Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-orange-400 mb-4">
            🎓 Get Certified, Get Ahead
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Join Our Globally Recognized IT Certification Program!
          </p>
          <ul className="list-disc pl-6 text-white space-y-2 text-left inline-block">
            <li>📘 Advanced Learning</li>
            <li>👨‍🏫 Expert Trainers</li>
            <li>🚀 In-Demand Skills</li>
          </ul>
          <div className="mt-6">
            <Link to="/QuickEnquiry">
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition"
              >
                Join IT Certification Program!
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Paid Internship Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white bg-opacity-10 p-10 rounded-2xl shadow-xl backdrop-blur-md transition transform duration-300 hover:shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-orange-400 mb-4">
            💼 Learn, Earn, and Grow
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Join Our Paid Internship Program and Start Your IT Career!
          </p>
          <ul className="list-disc pl-6 text-white space-y-2 text-left inline-block">
            <li>💰 Paid Internship</li>
            <li>🌍 Industry Exposure</li>
            <li>🔧 Practical Learning</li>
          </ul>
          <div className="mt-6">
            <Link to="/QuickEnquiry">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition"
              >
                Start Your Paid Internship!
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
