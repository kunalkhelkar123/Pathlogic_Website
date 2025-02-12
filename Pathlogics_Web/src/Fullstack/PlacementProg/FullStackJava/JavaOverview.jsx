// import React from "react";
// import { motion } from "framer-motion";
// import { FaJava } from "react-icons/fa6";
// import { SiSpring } from "react-icons/si";
// import { SiHibernate } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
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

// export default function JavaOverview() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
//             Learn Modern
//             <span className="block text-orange-600">Java Development</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-white mt-4">
//             Master backend and web development with industry-leading tools.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12  item-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//              logo={
             
//             <FaJava className="w-16 h-16 "/>
//             }
//             label="Java "
//              color="bg-gradient-to-br from-gray-900 to-orange-600 " 
//           />
//           <TechCard
//             logo={
//               <SiSpring className="w-16 h-16 " />
              
//             }
//             label="Spring"
//             color="bg-gradient-to-br from-orange-900 to-blue-300 relative p-6  shadow-lg"
//           />
//           <TechCard
//             logo={
//               <SiHibernate className="w-16 h-16 "/>
//             }
//             label="Hibernate" 
//             color="bg-gradient-to-br from-gray-900 to-orange-600"
//           />
//           <TechCard
//             logo={
//               <GrMysql className="w-16 h-16"/>
//             }
//             label="MySQL"
//             color="bg-gradient-to-br from-orange-900 to-blue-300 "
//           />
//         </motion.div>

//         <div className="mt-16 text-center">
//           <motion.p
//             className="text-xl md:text-2xl text-white mb-6 "
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Build robust applications with a powerful tech stack.
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-[5px] shadow-lg hover:bg-indigo-700"
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
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const TechCard = ({ logo, label, color }) => (
  <motion.div
    //whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-4"
  >
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      {logo}
    </div>
    <motion.span
      // whileHover={{ color: "white" }}
      className="text-2xl md:text-3xl font-bold text-white"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function JavaOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Learn Modern
            <span className="block text-orange-600">Java Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white mt-4">
            Master backend and web development with industry-leading tools.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 item-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            logo={<FaJava className="w-16 h-16" />}
            label="Java"
            color="bg-gradient-to-br from-gray-900 to-orange-600"
          />
          <TechCard
            logo={<SiSpring className="w-16 h-16" />}
            label="Spring"
            color="bg-gradient-to-br from-orange-900 to-blue-300"
          />
          <TechCard
            logo={<SiHibernate className="w-16 h-16" />}
            label="Hibernate"
            color="bg-gradient-to-br from-gray-900 to-orange-600"
          />
          <TechCard
            logo={<GrMysql className="w-16 h-16" />}
            label="MySQL"
            color="bg-gradient-to-br from-orange-900 to-blue-300"
          />
        </motion.div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-xl md:text-2xl text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Build robust applications with a powerful tech stack.
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
