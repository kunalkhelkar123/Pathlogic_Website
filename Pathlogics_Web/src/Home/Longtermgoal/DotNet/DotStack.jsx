// import React from "react";
// import { motion } from "framer-motion";
// import chash from "../../../../src/assets/chash1.png";
// import aspnet from "../../../../src/assets/aspnet1.png";
// import entity from "../../../../src/assets/entity1.png";
// import sql from "../../../../src/assets/sql2.png";
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

// export default function DotStack() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Learn Modern
//             <span className="block text-indigo-600">.NET Development</span>
//           </h1>
//           <p className="text-xl sm:text-2xl text-gray-700 mt-4">
//             Master backend and web development with industry-leading tools and technologies.
//           </p>
//         </div>

//         <motion.div
//           className="flex flex-wrap justify-center gap-12 item-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <TechCard
//             logo={
//               <img src={chash} alt="C# Logo"
//                 className="w-16 h-16"
//               />
//             }
//             label="C#"
//             color="bg-gradient-to-br from-gray-900 to-blue-600" // Correct color usage for C#
//           />
//           <TechCard
//             logo={
//               <img
//                 src={aspnet}
//                 alt="ASP.NET Core Logo"
//                 className="w-16 h-16"
//               />
//             }
//             label="ASP.NET Core"
//             color="bg-green-500 relative p-6 shadow-lg" // Correct color usage for ASP.NET Core
//           />
//           <TechCard
//             logo={
//               <img
//                 src={entity}
//                 alt="Entity Framework Logo"
//                 className="w-16 h-16 object-fit text-white"
//               />
//             }
//             label="Entity Framework"
//             color="bg-darkgray " // Correct color usage for EF
//           />
//           <TechCard
//             logo={
//               <img
//                 src={sql}
//                 alt="SQL Server Logo"
//                 className="w-20 h-20"
//               />
//             }
//             label="SQL Server"
//             color="bg-gradient-to-br from-orange-900 to-blue-300" // Correct color usage for SQL Server
//           />
//         </motion.div>

//         <div className="mt-16 text-center">
//           <motion.p
//             className="text-xl md:text-2xl text-gray-700 mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Build robust applications with a powerful tech stack.
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



import React, { useState } from "react";
import { motion } from "framer-motion";
import chash from "../../../../src/assets/chash1.png";
import aspnet from "../../../../src/assets/aspnet1.png";
import entity from "../../../../src/assets/entity1.png";
import sql from "../../../../src/assets/sql2.png";

const TechCard = ({ logo, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-4"
  >
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      {logo}
    </div>
    <motion.span
      whileHover={{ color: "#4A90E2" }}
      className="text-2xl md:text-3xl font-bold text-gray-800"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function DotStack() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <div className={`min-h-screen overflow-hidden overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-200 py-16 ${showJourney ? 'h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn Modern
            <span className="block text-indigo-600">.NET Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Master backend and web development with industry-leading tools and technologies.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
  logo={<img src={chash} alt="C# Logo" className="w-17 h-16" />}
  label="C#"
  color="bg-gradient-to-br from-purple-900 to-indigo-600"
/>
<TechCard
  logo={<img src={aspnet} alt="ASP.NET Core Logo" className="h-32 w-32" />}
  label="ASP.NET Core"
  color="bg-gradient-to-br from-blue-700 to-blue-400"
/>
<TechCard
  logo={<img src={entity} alt="Entity Framework Logo" className="h-32 w-32 object-fit text-white" />}
  label="Entity Framework"
  color="bg-gradient-to-br from-teal-800 to-green-400"
/>
<TechCard
  logo={<img src={sql} alt="SQL Server Logo" className="h-32 w-32" />}
  label="SQL Server"
  color="bg-gradient-to-br from-red-700 to-gray-500"
/>

        </motion.div>

        <div className="mt-16 text-center">
          {!showJourney ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700"
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
