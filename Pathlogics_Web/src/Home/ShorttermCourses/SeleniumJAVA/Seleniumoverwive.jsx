// import React from 'react';

// export default function SeleniumOverview() {
//   return (
//     <div className="min-h-screen">
//       {/* Program Overview Section */}
//       <div className="relative bg-gradient-to-br from-orange-500 to-orange-500 py-20">
//         <div className="absolute inset-0 bg-[url('/diagonal-pattern.svg')] opacity-10"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
//             Selenium with Java Overview
//           </h1>
//           <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
//             Selenium is an open-source tool for automating web browsers. Combined with Java, it enables robust test automation frameworks, supporting functional and regression testing.
//           </p>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Course Modules Card */}
//           <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
//             <div className="p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 Course Modules
//               </h2>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Introduction to Selenium & Java Basics.
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   TestNG Framework & Automation Design Patterns.
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Handling Web Elements & Cross-browser Testing.
//                 </li>
//               </ul>
//             </div>
//             <div className="px-8 py-4  bg-orange-600 mt-auto">
//               <button className="text-white font-semibold hover:text-indigo-900 transition duration-300">
//                 Learn More
//               </button>
//               </div>
//           </div>

//           {/* Prerequisites Card */}
//           <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
//             <div className="p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-10">
//                 Prerequisites
//               </h2>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Basic understanding of Core Java.
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Knowledge of HTML, CSS, and JavaScript
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Knowledge of beasic web technologies
//                 </li>
//               </ul>
//             </div>
//             <div className="px-8 py-4  bg-orange-600 mt-auto">
//               <button className="text-white font-semibold hover:text-indigo-900 transition duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
// import { Users, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

import { Users, Briefcase, DollarSign, GraduationCap, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-Friendly',
    label: 'and professional-level learning paths',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Real-World Projects',
    label: 'and hands-on practical training',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Mock Interviews',
    label: 'soft skills, aptitude, and resume prep',
  },
  {
    icon: <DollarSign className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement Support',
    label: 'with interview preparation and referrals',
  },
  
];


const ReactFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
         
Key Features of Pathlogics Automation Selenium with Java Course in Pune
          </h3>
          <p className="text-gray-700 text-lg">
      Our Software Testing training program is crafted to help you build strong testing skills through practical learning, expert support, and job readiness. Here’s what makes our course stand out:
Our Selenium with Java tutorial is designed for professionals and aspiring testers who want to build a solid automation foundation, With a focus on hands-on training, real-world projects, and expert guidance.

          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h4 className="text-xl font-semibold text-gray-900">{feature.count}</h4>
                <p className="text-gray-600 mt-1">{feature.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactFeatures;



