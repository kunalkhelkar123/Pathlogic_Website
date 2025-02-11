// import React from "react";
// import { FileCode, Anchor, Database, MapPin } from "lucide-react"; // Updated icons

// const TechLogo = ({ children, color }) => (
//   <div
//     className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
//   >
//     {children}
//   </div>
// );

// export default function MasterNode() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
//             Master the Art of
//             <span className="block text-orange-600 text-4xl">Node.JS</span> Development
//           </h2>
//           <h2 className="text-lg sm:text-3xl md:text-2xl text-orange-300 mt-4">
//             Comprehensive learning with theoretical & practical experience.
//           </h2>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12">
//           {/* Modules & npm */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-red-500">
//               <FileCode className="w-12 h-12 text-white" /> {/* FileCode icon for Modules & npm */}
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Modules & npm</span>
//           </div>

//           {/* Asynchronous Programming */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-gray-800">
//               <Anchor className="w-12 h-12 text-white" /> {/* Anchor icon for Asynchronous Programming */}
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Asynchronous Programming</span>
//           </div>

//           {/* Express.js */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-green-500">
//               <Database className="w-12 h-12 text-white" /> {/* Database icon for Express.js */}
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Express.js</span>
//           </div>

//           {/* Database Integration */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-blue-600">
//               <MapPin className="w-12 h-12 text-white" /> {/* MapPin icon for Database Integration */}
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Database Integration</span>
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-xl text-orange-400 mb-6">
//             Become a Node.js Development Expert!
//           </p>
//           <button className="bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
//             Start Learning Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FileCode, Anchor, Database, MapPin } from "lucide-react"; // Updated icons

const TechLogo = ({ children, color }) => (
  <div
    className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function MasterNode() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Master the Art of
            <span className="block text-orange-600 text-4xl lg:text-5xl">Node.JS</span> Development
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-300 mt-4">
            Comprehensive learning with theoretical & practical experience.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-12">
          {/* Modules & npm */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-red-500">
              <FileCode className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl font-bold text-white">Modules & npm</span>
          </div>

          {/* Asynchronous Programming */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-gray-800">
              <Anchor className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl font-bold text-white">Asynchronous Programming</span>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-green-500">
              <Database className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl font-bold text-white">Express.js</span>
          </div>

          {/* Database Integration */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-blue-600">
              <MapPin className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl font-bold text-white">Database Integration</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-orange-400 mb-6">
            Become a Node.js Development Expert!
          </p>
          <button className="bg-orange-600 text-white text-lg md:text-xl lg:text-2xl font-semibold py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
