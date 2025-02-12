// import React from "react";
// import { Code, Zap, LayoutGrid, Database } from "lucide-react";

// const TechLogo = ({ children, color }) => (
//   <div
//     className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
//   >
//     {children}
//   </div>
// );

// export default function SalesforceDevelopment() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
//             Master the Art of
//             <span className="block text-orange-600 text-4xl">Salesforce</span> Development
//           </h2>
//           <h2 className="text-lg sm:text-3xl md:text-2xl text-orange-300 mt-4">
//             Comprehensive learning with theoretical & practical experience.
//           </h2>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12">
//           {/* Apex */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-blue-500">
//               <Code className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Apex</span>
//           </div>

//           {/* Flow */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-gray-800">
//               <Zap className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Flow</span>
//           </div>

//           {/* LWC */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-green-500">
//               <LayoutGrid className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">LWC</span>
//           </div>

//           {/* Aura */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-blue-600">
//               <Database className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Aura</span>
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-xl text-orange-400 mb-6">
//             Become a Salesforce Development Expert!
//           </p>
//           <button className="bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
//             Start Learning Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Code, Zap, LayoutGrid, Database } from "lucide-react";

const TechLogo = ({ children, color }) => (
  <div
    className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function SalesforceDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Master the Art of
            <span className="block text-orange-600">Salesforce</span> Development
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl text-orange-300 mt-4">
            Comprehensive learning with theoretical & practical experience.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-12">
          {/* Apex */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-blue-500">
              <Code className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-xl md:text-2xl font-bold text-white">Apex</span>
          </div>

          {/* Flow */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-gray-800">
              <Zap className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-xl md:text-2xl font-bold text-white">Flow</span>
          </div>

          {/* LWC */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-green-500">
              <LayoutGrid className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-xl md:text-2xl font-bold text-white">LWC</span>
          </div>

          {/* Aura */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48">
            <TechLogo color="bg-blue-600">
              <Database className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
            </TechLogo>
            <span className="text-xl md:text-2xl font-bold text-white">Aura</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-orange-400 mb-6">
            Become a Salesforce Development Expert!
          </p>
          <button className="bg-orange-600 text-white text-lg sm:text-xl md:text-2xl font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
