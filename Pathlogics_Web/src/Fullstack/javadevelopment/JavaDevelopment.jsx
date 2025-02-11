
// import React from 'react';

// const TechLogo = ({ children, color }) => (
//   <div
//     className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
//   >
//     {children}
//   </div>
// );

// export default function JavaDevelopment() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
//             A Comprehensive Java Web
//             <span className="block text-indigo-600">Development Course</span>
//           </h1>
//           <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mt-4">
//             Learn Java Web Development with theoretical & practical hands-on coding experience
//           </p>
//         </div>

//         {/* Tech Logos Section */}
//         <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-green-700">
//               <span className="text-white text-5xl font-bold">Spring</span>
//             </TechLogo>
//             <span className="text-lg font-semibold text-green-700">Spring Framework</span>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-orange-600">
//               <span className="text-white text-5xl font-bold">Hibernate</span>
//             </TechLogo>
//             <span className="text-lg font-semibold text-orange-600">Hibernate ORM</span>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-blue-600">
//               <span className="text-white text-5xl font-bold">Thymeleaf</span>
//             </TechLogo>
//             <span className="text-lg font-semibold text-blue-600">Thymeleaf Engine</span>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-purple-700">
//               <span className="text-white text-5xl font-bold">Java</span>
//             </TechLogo>
//             <span className="text-lg font-semibold text-purple-700">Java Language</span>
//           </div>
//         </div>

//         {/* Call-to-Action Button */}
//         <div className="mt-20 text-center">
//           <p className="text-2xl text-gray-600 mb-8">Master the entire Java web development stack</p>
//           <button className="bg-indigo-600 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
//             Start Learning Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Coffee, Database, Leaf, Code } from 'lucide-react';

const TechLogo = ({ children, color }) => (
  <div
    className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function JavaDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            A Comprehensive Java Web
            <span className="block text-indigo-600">Development Course</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mt-4">
            Learn Java Web Development with theoretical & practical hands-on coding experience
          </p>
        </div>

        {/* Tech Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-purple-700">
              <Coffee className="w-12 h-12 text-white" />
            </TechLogo>
            <span className="text-lg font-semibold text-purple-700">Java Language</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-orange-600">
              <Database className="w-12 h-12 text-white" />
            </TechLogo>
            <span className="text-lg font-semibold text-orange-600">Hibernate ORM</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-green-700">
              <Leaf className="w-12 h-12 text-white" />
            </TechLogo>
            <span className="text-lg font-semibold text-green-700">Spring Framework</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-blue-600">
              <Code className="w-12 h-12 text-white" />
            </TechLogo>
            <span className="text-lg font-semibold text-blue-600">Thymeleaf Engine</span>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-20 text-center">
          <p className="text-2xl text-gray-600 mb-8">Master the entire Java web development stack</p>
          <button className="bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
