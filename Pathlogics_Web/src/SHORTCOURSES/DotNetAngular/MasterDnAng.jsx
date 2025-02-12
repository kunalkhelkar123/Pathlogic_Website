// import React from "react";
// import { FileCode, Layout, Server, Database } from "lucide-react";

// const TechLogo = ({ children, color }) => (
//   <div
//     className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
//   >
//     {children}
//   </div>
// );

// export default function MasterDnAng() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
//             Master the Art of
//             <span className="block text-orange-600 text-4xl"> DotNet with Angular</span> Development
//           </h2>
//           <h2 className="text-lg sm:text-3xl md:text-2xl text-orange-300 mt-4">
//             Comprehensive learning with theoretical & practical experience in DotNet Development.
//           </h2>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12">
//           {/* .NET Basics */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-blue-500">
//               <FileCode className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">DotNet Basics</span>
//           </div>

//           {/* Angular Basics */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-orange-500">
//               <Layout className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Angular Basics</span>
//           </div>

//           {/* Backend Development with .NET */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-gray-800">
//               <Server className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Backend with DotNet</span>
//           </div>

//           {/* Database Integration with .NET */}
//           <div className="flex flex-col items-center space-y-3">
//             <TechLogo color="bg-blue-600">
//               <Database className="w-12 h-12 text-white" />
//             </TechLogo>
//             <span className="text-2xl font-bold text-white">Database Integration</span>
//           </div>
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-xl text-orange-400 mb-6">
//             Become a DotNet with Angular Development Expert!
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
import { FileCode, Layout, Server, Database } from "lucide-react";

const TechLogo = ({ children, color }) => (
  <div
    className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function MasterDnAng() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
            Master the Art of
            <span className="block text-orange-600 text-4xl lg:text-5xl xl:text-6xl"> DotNet with Angular</span> Development
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-300 mt-4">
            Comprehensive learning with theoretical & practical experience in DotNet Development.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mt-12">
          {/* .NET Basics */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48 xl:w-56">
            <TechLogo color="bg-blue-500">
              <FileCode className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">DotNet Basics</span>
          </div>

          {/* Angular Basics */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48 xl:w-56">
            <TechLogo color="bg-orange-500">
              <Layout className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">Angular Basics</span>
          </div>

          {/* Backend Development with .NET */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48 xl:w-56">
            <TechLogo color="bg-gray-800">
              <Server className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">Backend with DotNet</span>
          </div>

          {/* Database Integration with .NET */}
          <div className="flex flex-col items-center space-y-3 text-center w-36 md:w-40 lg:w-48 xl:w-56">
            <TechLogo color="bg-blue-600">
              <Database className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white" />
            </TechLogo>
            <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">Database Integration</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-400 mb-6">
            Become a DotNet with Angular Development Expert!
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-[5px] font-semibold shadow-lg hover:bg-orange-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}