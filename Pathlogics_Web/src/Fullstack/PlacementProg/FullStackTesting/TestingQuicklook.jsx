// import React from 'react';

// const TechLogo = ({ children, color }) => (
//   <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}>
//     {children}
//   </div>
// );

// export default function TestingQuicklook() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
//             A comprehensive Full Stack
//             <span className="block text-orange-600">Testing Course</span>
//           </h1>
//           <p className="text-xl sm:text-2xl md:text-3xl text-white mt-4">
//             Master Manual & Automation Testing with hands-on projects
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-blue-500">
//               <span className="text-white text-5xl font-bold">Selenium</span>
//             </TechLogo>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-yellow-500">
//               <span className="text-white text-5xl font-bold">Jest</span>
//             </TechLogo>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-red-500">
//               <span className="text-white text-5xl font-bold">Postman</span>
//             </TechLogo>
//           </div>

//           <div className="flex flex-col items-center space-y-4">
//             <TechLogo color="bg-gray-700">
//               <span className="text-white text-5xl font-bold">JIRA</span>
//             </TechLogo>
//           </div>
//         </div>

//         <div className="mt-20 text-center">
//           <p className="text-2xl text-white mb-8">Become a Full Stack Testing Expert</p>
//           <button className="bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
//             Start Learning Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { SiSelenium } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJira } from "react-icons/si";
const TechLogo = ({ children, color }) => (
  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}>
    {children}
  </div>
);

export default function TestingQuicklook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            A comprehensive Full Stack
            <span className="block text-orange-600">Testing Course</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mt-4">
            Master Manual & Automation Testing with hands-on projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-blue-500">
              {/* <img src="/logos/selenium.svg" alt="Selenium" className="w-20 h-20" /> */}
              <SiSelenium  className="w-16 h-16" />
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Selenium</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-yellow-500">
              {/* <img src="/logos/jest.svg" alt="Jest" className="w-20 h-20" /> */}
              <SiJest className="w-16 h-16" />
             
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Jest</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-red-500">
              {/* <img src="/logos/postman.svg" alt="Postman" className="w-20 h-20" /> */}
              <SiPostman className="w-16 h-16"/>
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Postman</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-gray-700">
              {/* <img src="/logos/jira.svg" alt="JIRA" className="w-20 h-20" /> */}
              <SiJira className="w-16 h-16"/>
            </TechLogo>
            <span className='text-2xl font-bold text-white'>JIRA</span>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl text-white mb-8">Become a Full Stack Testing Expert</p>
          <button className="bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
