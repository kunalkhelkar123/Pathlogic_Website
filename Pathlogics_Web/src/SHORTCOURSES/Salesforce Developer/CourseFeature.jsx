// // // // // // // // 'use client'

// // // // // // // // import { useState } from 'react'
// // // // // // // // import { motion } from 'framer-motion'

// // // // // // // // const courseModules = [
// // // // // // // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // // // // // // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // // // // // // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // // // // // // //   { id: "lightning", title: "Lightening Web Components", description: "Dive into building modern UIs using Lightening Web Components." },
// // // // // // // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // // // // // // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // // // // // // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // // // // // // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // // // // // // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // // // // // // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // // // // // // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // // // // // // ]

// // // // // // // // export default function CourseFeature() {
// // // // // // // //   const [selectedModule, setSelectedModule] = useState(null)

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // // //         {/* Main Title */}
// // // // // // // //         <div className="text-center mb-16">
// // // // // // // //           <h1 className="text-4xl font-bold text-blue-900 mb-4">Salesforce Developer Course Overview</h1>
// // // // // // // //           <p className="text-lg text-black-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // // // // // // //         </div>

// // // // // // // //         {/* Course Modules - Circuit Board Design */}
// // // // // // // //         <div className="relative">
// // // // // // // //           {/* Center Circle */}
// // // // // // // //           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // // // // // // //             <div className="text-lg font-bold text-center text-gray-800">
// // // // // // // //               SALESFORCE
// // // // // // // //               <br />
// // // // // // // //               DEVELOPER
// // // // // // // //               <br />
// // // // // // // //               COURSE
// // // // // // // //               <br />
// // // // // // // //               OVERVIEW
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Circuit Lines */}
// // // // // // // //           <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 600">
// // // // // // // //             <g className="text-gray-300" fill="none" stroke="currentColor" strokeWidth="1">
// // // // // // // //               <path d="M500 50 L500 230" />
// // // // // // // //               <path d="M500 370 L500 550" />
// // // // // // // //               <path d="M180 300 L420 300" />
// // // // // // // //               <path d="M580 300 L820 300" />
// // // // // // // //               {courseModules.map((_, index) => {
// // // // // // // //                 const angle = (index / courseModules.length) * 2 * Math.PI
// // // // // // // //                 const x = 500 + 250 * Math.cos(angle)
// // // // // // // //                 const y = 300 + 250 * Math.sin(angle)
// // // // // // // //                 return <path key={index} d={`M500 300 L${x} ${y}`} />
// // // // // // // //               })}
// // // // // // // //             </g>
// // // // // // // //           </svg>

// // // // // // // //           {/* Module Circles */}
// // // // // // // //           <div className="relative max-w-[80vw] h-[600px]">
// // // // // // // //             {courseModules.map((module, index) => {
// // // // // // // //               const angle = (index / courseModules.length) * 2 * Math.PI
// // // // // // // //               const x = 50 + 45 * Math.cos(angle)
// // // // // // // //               const y = 50 + 45 * Math.sin(angle)
// // // // // // // //               return (
// // // // // // // //                 <motion.div
// // // // // // // //                   key={module.id}
// // // // // // // //                   style={{
// // // // // // // //                     position: 'absolute',
// // // // // // // //                     left: `${x}%`,
// // // // // // // //                     top: `${y}%`,
// // // // // // // //                   }}
// // // // // // // //                   whileHover={{ scale: 1.05, y: -10 }}
// // // // // // // //                   whileTap={{ scale: 0.95 }}
// // // // // // // //                 >
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => setSelectedModule(module)}
// // // // // // // //                     className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // // // // // // //                   >
// // // // // // // //                     <span className="text-xs font-medium text-gray-800 text-center group-hover:text-blue-600">
// // // // // // // //                       {module.title}
// // // // // // // //                     </span>
// // // // // // // //                   </button>
// // // // // // // //                 </motion.div>
// // // // // // // //               )
// // // // // // // //             })}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Module Details Modal */}
// // // // // // // //         {selectedModule && (
// // // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // // // // // //             <motion.div
// // // // // // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // // // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // // // // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // // // // // // //             >
// // // // // // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // // // // // // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setSelectedModule(null)}
// // // // // // // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // // // // // // //               >
// // // // // // // //                 Close
// // // // // // // //               </button>
// // // // // // // //             </motion.div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }
// // // // // // // 'use client'

// // // // // // // import { useState } from 'react'
// // // // // // // import { motion } from 'framer-motion'

// // // // // // // const courseModules = [
// // // // // // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // // // // // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // // // // // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // // // // // //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// // // // // // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // // // // // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // // // // // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // // // // // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // // // // // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // // // // // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // // // // // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // // // // // ]

// // // // // // // export default function CourseOverview() {
// // // // // // //   const [selectedModule, setSelectedModule] = useState(null)

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // // // // // //       <div className="max-w-7xl mx-auto">
// // // // // // //         {/* Main Title */}
// // // // // // //         <div className="text-center mb-16">
// // // // // // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// // // // // // //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // // // // // //         </div>

// // // // // // //         {/* Course Modules - Circuit Board Design */}
// // // // // // //         <div className="relative">
// // // // // // //           {/* Center Circle */}
// // // // // // //           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // // // // // //             <div className="text-lg font-bold text-center text-gray-800">
// // // // // // //               SALESFORCE
// // // // // // //               <br />
// // // // // // //               DEVELOPER
// // // // // // //               <br />
// // // // // // //               COURSE
// // // // // // //               <br />
// // // // // // //               OVERVIEW
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Circuit Lines */}
// // // // // // //           <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 600">
// // // // // // //             <g className="text-gray-300" fill="none" stroke="currentColor" strokeWidth="1">
// // // // // // //               <path d="M500 50 L500 230" />
// // // // // // //               <path d="M500 370 L500 550" />
// // // // // // //               <path d="M180 300 L420 300" />
// // // // // // //               <path d="M580 300 L820 300" />
// // // // // // //               {courseModules.map((_, index) => {
// // // // // // //                 const angle = (index / courseModules.length) * 2 * Math.PI
// // // // // // //                 const x = 500 + 250 * Math.cos(angle)
// // // // // // //                 const y = 300 + 250 * Math.sin(angle)
// // // // // // //                 return <path key={index} d={`M500 300 L${x} ${y}`} />
// // // // // // //               })}
// // // // // // //             </g>
// // // // // // //           </svg>

// // // // // // //           {/* Module Circles */}
// // // // // // //           <div className="relative w-full h-full max-w-full md:max-w-[80vw] md:h-[600px]">
// // // // // // //             {courseModules.map((module, index) => {
// // // // // // //               const angle = (index / courseModules.length) * 2 * Math.PI
// // // // // // //               const x = 50 + 45 * Math.cos(angle)
// // // // // // //               const y = 50 + 45 * Math.sin(angle)
// // // // // // //               return (
// // // // // // //                 <motion.div
// // // // // // //                   key={module.id}
// // // // // // //                   style={{
// // // // // // //                     position: 'absolute',
// // // // // // //                     left: `${x}%`,
// // // // // // //                     top: `${y}%`,
// // // // // // //                     transform: 'translate(-50%, -50%)'
// // // // // // //                   }}
// // // // // // //                   whileHover={{ scale: 1.05, y: -10 }}
// // // // // // //                   whileTap={{ scale: 0.95 }}
// // // // // // //                 >
// // // // // // //                   <button
// // // // // // //                     onClick={() => setSelectedModule(module)}
// // // // // // //                     className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // // // // // //                   >
// // // // // // //                     <span className="text-xs font-medium text-gray-800 text-center group-hover:text-blue-600">
// // // // // // //                       {module.title}
// // // // // // //                     </span>
// // // // // // //                   </button>
// // // // // // //                 </motion.div>
// // // // // // //               )
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Module Details Modal */}
// // // // // // //         {selectedModule && (
// // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // // // // //             <motion.div
// // // // // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // // // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // // // // // //             >
// // // // // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // // // // // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // // // // // //               <button
// // // // // // //                 onClick={() => setSelectedModule(null)}
// // // // // // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // // // // // //               >
// // // // // // //                 Close
// // // // // // //               </button>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // 'use client'

// // // // // // import { useState } from 'react';
// // // // // // import { motion } from 'framer-motion';

// // // // // // const courseModules = [
// // // // // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // // // // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // // // // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // // // // //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// // // // // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // // // // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // // // // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // // // // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // // // // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // // // // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // // // // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // // // // ];

// // // // // // export default function CourseOverview() {
// // // // // //   const [selectedModule, setSelectedModule] = useState(null);

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // // // // //       <div className="max-w-7xl mx-auto">
// // // // // //         {/* Main Title */}
// // // // // //         <div className="text-center mb-16">
// // // // // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// // // // // //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // // // // //         </div>

// // // // // //         {/* Course Modules - Circuit Board Design */}
// // // // // //         <div className="relative flex justify-center items-center">
// // // // // //           {/* Center Circle */}
// // // // // //           <div className="absolute w-40 h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // // // // //             <div className="text-lg font-bold text-center text-gray-800">
// // // // // //               SALESFORCE
// // // // // //               <br />
// // // // // //               DEVELOPER
// // // // // //               <br />
// // // // // //               COURSE
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Module Circles */}
// // // // // //           <div className="relative w-full max-w-4xl h-[600px] mx-auto">
// // // // // //             {courseModules.map((module, index) => {
// // // // // //               const angle = (index / courseModules.length) * 2 * Math.PI;
// // // // // //               const x = 50 + 40 * Math.cos(angle);
// // // // // //               const y = 50 + 40 * Math.sin(angle);
// // // // // //               return (
// // // // // //                 <motion.div
// // // // // //                   key={module.id}
// // // // // //                   style={{
// // // // // //                     position: 'absolute',
// // // // // //                     left: `${x}%`,
// // // // // //                     top: `${y}%`,
// // // // // //                     transform: 'translate(-50%, -50%)'
// // // // // //                   }}
// // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // //                   whileTap={{ scale: 0.95 }}
// // // // // //                 >
// // // // // //                   <button
// // // // // //                     onClick={() => setSelectedModule(module)}
// // // // // //                     className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // // // // //                   >
// // // // // //                     <span className="text-xs font-medium text-gray-800 text-center group-hover:text-blue-600">
// // // // // //                       {module.title}
// // // // // //                     </span>
// // // // // //                   </button>
// // // // // //                 </motion.div>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Module Details Modal */}
// // // // // //         {selectedModule && (
// // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // // // //             <motion.div
// // // // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // // // // //             >
// // // // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // // // // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // // // // //               <button
// // // // // //                 onClick={() => setSelectedModule(null)}
// // // // // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // // // // //               >
// // // // // //                 Close
// // // // // //               </button>
// // // // // //             </motion.div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // 'use client'

// // // // // import { useState } from 'react';
// // // // // import { motion } from 'framer-motion';

// // // // // const courseModules = [
// // // // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // // // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // // // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // // // //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// // // // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // // // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // // // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // // // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // // // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // // // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // // // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // // // ];

// // // // // export default function CourseOverview() {
// // // // //   const [selectedModule, setSelectedModule] = useState(null);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         {/* Main Title */}
// // // // //         <div className="text-center mb-16">
// // // // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// // // // //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // // // //         </div>

// // // // //         {/* Course Modules - Circuit Board Design */}
// // // // //         <div className="relative flex justify-center items-center">
// // // // //           {/* Center Circle */}
// // // // //           <div className="absolute w-40 h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // // // //             <div className="text-lg font-bold text-center text-gray-800">
// // // // //               SALESFORCE
// // // // //               <br />
// // // // //               DEVELOPER
// // // // //               <br />
// // // // //               COURSE
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Module Circles */}
// // // // //           <div className="relative w-full max-w-4xl h-[600px] mx-auto">
// // // // //             {courseModules.map((module, index) => {
// // // // //               const angle = (index / courseModules.length) * 2 * Math.PI;
// // // // //               const x = 50 + 40 * Math.cos(angle);
// // // // //               const y = 50 + 40 * Math.sin(angle);
// // // // //               return (
// // // // //                 <motion.div
// // // // //                   key={module.id}
// // // // //                   style={{
// // // // //                     position: 'absolute',
// // // // //                     left: `${x}%`,
// // // // //                     top: `${y}%`,
// // // // //                     transform: 'translate(-50%, -50%)'
// // // // //                   }}
// // // // //                   whileHover={{ scale: 1.1 }}
// // // // //                   whileTap={{ scale: 0.95 }}
// // // // //                 >
// // // // //                   <button
// // // // //                     onClick={() => setSelectedModule(module)}
// // // // //                     className="w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // // // //                   >
// // // // //                     <span className="text-xs font-medium text-gray-800 text-center group-hover:text-blue-600">
// // // // //                       {module.title}
// // // // //                     </span>
// // // // //                   </button>
// // // // //                 </motion.div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Module Details Modal */}
// // // // //         {selectedModule && (
// // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // // //             <motion.div
// // // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // // // //             >
// // // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // // // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // // // //               <button
// // // // //                 onClick={() => setSelectedModule(null)}
// // // // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // // // //               >
// // // // //                 Close
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // 'use client'

// // // // import { useState } from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const courseModules = [
// // // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // // //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// // // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // // ];

// // // // export default function CourseOverview() {
// // // //   const [selectedModule, setSelectedModule] = useState(null);

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         {/* Main Title */}
// // // //         <div className="text-center mb-16">
// // // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// // // //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // // //         </div>

// // // //         {/* Course Modules - Circuit Board Design */}
// // // //         <div className="relative flex justify-center items-center">
// // // //           {/* Center Circle */}
// // // //           <div className="absolute w-40 h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // // //             <div className="text-lg font-bold text-center text-gray-800">
// // // //               SALESFORCE
// // // //               <br />
// // // //               DEVELOPER
// // // //               <br />
// // // //               COURSE
// // // //             </div>
// // // //           </div>

// // // //           {/* Module Circles */}
// // // //           <div className="relative w-full max-w-4xl h-[600px] mx-auto">
// // // //             {courseModules.map((module, index) => {
// // // //               const angle = (index / courseModules.length) * 2 * Math.PI;
// // // //               const x = 50 + 40 * Math.cos(angle);
// // // //               const y = 50 + 40 * Math.sin(angle);
// // // //               return (
// // // //                 <motion.div
// // // //                   key={module.id}
// // // //                   style={{
// // // //                     position: 'absolute',
// // // //                     left: `${x}%`,
// // // //                     top: `${y}%`,
// // // //                     transform: 'translate(-50%, -50%)',
// // // //                   }}
// // // //                   whileHover={{ scale: 1.1 }}
// // // //                   whileTap={{ scale: 0.95 }}
// // // //                 >
// // // //                   <button
// // // //                     onClick={() => setSelectedModule(module)}
// // // //                     className="w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // // //                   >
// // // //                     <span className="text-xs font-medium text-gray-800 text-center group-hover:text-blue-600">
// // // //                       {module.title}
// // // //                     </span>
// // // //                   </button>
// // // //                 </motion.div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </div>

// // // //         {/* Module Details Modal */}
// // // //         {selectedModule && (
// // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // // //             <motion.div
// // // //               initial={{ scale: 0.9, opacity: 0 }}
// // // //               animate={{ scale: 1, opacity: 1 }}
// // // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // // //             >
// // // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // // //               <button
// // // //                 onClick={() => setSelectedModule(null)}
// // // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // // //               >
// // // //                 Close
// // // //               </button>
// // // //             </motion.div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useState } from "react";
// // // import { motion } from "framer-motion";

// // // const courseModules = [
// // //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// // //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// // //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// // //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// // //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// // //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// // //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// // //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// // //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// // //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// // //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // // ];

// // // export default function CourseOverview() {
// // //   const [selectedModule, setSelectedModule] = useState(null);

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Main Title */}
// // //         <div className="text-center mb-16">
// // //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// // //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// // //         </div>

// // //         {/* Course Modules - Circuit Board Design */}
// // //         <div className="relative flex justify-center items-center">
// // //           {/* Center Circle */}
// // //           <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// // //             <div className="text-sm md:text-lg font-bold text-center text-gray-800">
// // //               SALESFORCE
// // //               <br />
// // //               DEVELOPER
// // //               <br />
// // //               COURSE
// // //             </div>
// // //           </div>

// // //           {/* Module Circles */}
// // //           <div className="relative w-full max-w-4xl h-[400px] sm:h-[500px] md:h-[600px] mx-auto">
// // //             {courseModules.map((module, index) => {
// // //               const angle = (index / courseModules.length) * 2 * Math.PI;
// // //               const radius = window.innerWidth < 768 ? 120 : 200;
// // //               const x = 50 + radius * Math.cos(angle) / 100;
// // //               const y = 50 + radius * Math.sin(angle) / 100;
// // //               return (
// // //                 <motion.div
// // //                   key={module.id}
// // //                   style={{
// // //                     position: "absolute",
// // //                     left: `${x}%`,
// // //                     top: `${y}%`,
// // //                     transform: "translate(-50%, -50%)",
// // //                   }}
// // //                   whileHover={{ scale: 1.1 }}
// // //                   whileTap={{ scale: 0.95 }}
// // //                 >
// // //                   <button
// // //                     onClick={() => setSelectedModule(module)}
// // //                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// // //                   >
// // //                     <span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600">
// // //                       {module.title}
// // //                     </span>
// // //                   </button>
// // //                 </motion.div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* Module Details Modal */}
// // //         {selectedModule && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// // //             <motion.div
// // //               initial={{ scale: 0.9, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               className="bg-white rounded-lg p-6 max-w-md w-full"
// // //             >
// // //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// // //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// // //               <button
// // //                 onClick={() => setSelectedModule(null)}
// // //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// // //               >
// // //                 Close
// // //               </button>
// // //             </motion.div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";

// // const courseModules = [
// //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // ];

// // export default function CourseOverview() {
// //   const [selectedModule, setSelectedModule] = useState(null);
// //   const [radius, setRadius] = useState(200);

// //   useEffect(() => {
// //     const updateRadius = () => {
// //       const screenWidth = window.innerWidth;
// //       if (screenWidth < 640) {
// //         setRadius(120);
// //       } else if (screenWidth < 768) {
// //         setRadius(160);
// //       } else {
// //         setRadius(200);
// //       }
// //     };

// //     updateRadius();
// //     window.addEventListener("resize", updateRadius);
// //     return () => window.removeEventListener("resize", updateRadius);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Main Title */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// //         </div>

// //         {/* Course Modules - Circuit Board Design */}
// //         <div className="relative flex justify-center items-center">
// //           {/* Center Circle */}
// //           <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// //             <div className="text-sm md:text-lg font-bold text-center text-gray-800">
// //               SALESFORCE
// //               <br />
// //               DEVELOPER
// //               <br />
// //               COURSE
// //             </div>
// //           </div>

// //           {/* Module Circles */}
// //           <div className="relative w-full max-w-4xl h-[400px] sm:h-[500px] md:h-[600px] mx-auto">
// //             {courseModules.map((module, index) => {
// //               const angle = (index / courseModules.length) * 2 * Math.PI;
// //               const x = 50 + (radius * Math.cos(angle)) / 100;
// //               const y = 50 + (radius * Math.sin(angle)) / 100;
// //               return (
// //                 <motion.div
// //                   key={module.id}
// //                   style={{
// //                     position: "absolute",
// //                     left: `${x}%`,
// //                     top: `${y}%`,
// //                     transform: "translate(-50%, -50%)",
// //                   }}
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <button
// //                     onClick={() => setSelectedModule(module)}
// //                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// //                   >
// //                     <span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600">
// //                       {module.title}
// //                     </span>
// //                   </button>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Module Details Modal */}
// //         {selectedModule && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               className="bg-white rounded-lg p-6 max-w-md w-full"
// //             >
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// //               <button
// //                 onClick={() => setSelectedModule(null)}
// //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// //               >
// //                 Close
// //               </button>
// //             </motion.div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// // "use client";

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";

// // const courseModules = [
// //   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
// //   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
// //   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
// //   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
// //   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
// //   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
// //   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
// //   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
// //   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
// //   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
// //   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// // ];

// // export default function CourseOverview() {
// //   const [selectedModule, setSelectedModule] = useState(null);
// //   const [radius, setRadius] = useState(40); // Dynamic radius in %

// //   useEffect(() => {
// //     const updateRadius = () => {
// //       const screenWidth = window.innerWidth;
// //       if (screenWidth < 640) {
// //         setRadius(35); // Smaller radius for mobile
// //       } else if (screenWidth < 768) {
// //         setRadius(40); // Medium radius for tablets
// //       } else {
// //         setRadius(45); // Larger radius for desktops
// //       }
// //     };

// //     updateRadius();
// //     window.addEventListener("resize", updateRadius);
// //     return () => window.removeEventListener("resize", updateRadius);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-12 px-4">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Main Title */}
// //         <div className="text-center mb-16">
// //           <h1 className="text-4xl font-bold text-gray-900 mb-4">Salesforce Developer Course Overview</h1>
// //           <p className="text-lg text-gray-600">Comprehensive training program covering essential Salesforce Developer concepts</p>
// //         </div>

// //         {/* Course Modules - Circuit Board Design */}
// //         <div className="relative flex justify-center items-center">
// //           {/* Center Circle */}
// //           <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
// //             <div className="text-sm md:text-lg font-bold text-center text-gray-800">
// //               SALESFORCE
// //               <br />
// //               DEVELOPER
// //               <br />
// //               COURSE
// //             </div>
// //           </div>

// //           {/* Module Circles */}
// //           <div className="relative w-full max-w-4xl h-[400px] sm:h-[500px] md:h-[600px] mx-auto">
// //             {courseModules.map((module, index) => {
// //               const angle = (index / courseModules.length) * 2 * Math.PI;
// //               const x = 50 + radius * Math.cos(angle); // Adjust position using radius
// //               const y = 50 + radius * Math.sin(angle);
// //               return (
// //                 <motion.div
// //                   key={module.id}
// //                   style={{
// //                     position: "absolute",
// //                     left: `${x}%`,
// //                     top: `${y}%`,
// //                     transform: "translate(-50%, -50%)",
// //                   }}
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   <button
// //                     onClick={() => setSelectedModule(module)}
// //                     className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center p-2 hover:bg-blue-50 transition-colors duration-200 group"
// //                   >
// //                     <span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600">
// //                       {module.title}
// //                     </span>
// //                   </button>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Module Details Modal */}
// //         {selectedModule && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               className="bg-white rounded-lg p-6 max-w-md w-full"
// //             >
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
// //               <p className="text-gray-600 mb-6">{selectedModule.description}</p>
// //               <button
// //                 onClick={() => setSelectedModule(null)}
// //                 className="bg-blue-500 text-white px-6 py-3 text-lg rounded hover:bg-blue-600 transition-colors duration-200"
// //               >
// //                 Close
// //               </button>
// //             </motion.div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const courseModules = [
//   { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
//   { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
//   { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
//   { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
//   { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
//   { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
//   { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
//   { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
//   { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
//   { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
//   { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
// ];

// export default function CourseOverview() {
//   const [selectedModule, setSelectedModule] = useState(null);
//   const [radius, setRadius] = useState(40); // Dynamic radius in %

//   useEffect(() => {
//     const updateRadius = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth < 640) {
//         setRadius(35); // Smaller radius for mobile
//       } else if (screenWidth < 768) {
//         setRadius(40); // Medium radius for tablets
//       } else {
//         setRadius(45); // Larger radius for desktops
//       }
//     };

//     updateRadius();
//     window.addEventListener("resize", updateRadius);
//     return () => window.removeEventListener("resize", updateRadius);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-tl from-blue-200 via-purple-300 to-pink-300 py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Salesforce Developer Course Overview</h1>
//           <p className="text-xl text-gray-700 max-w-xl mx-auto">A comprehensive training program to master essential Salesforce concepts for developers.</p>
//         </div>

//         {/* Course Modules - Circle Design */}
//         <div className="relative flex justify-center items-center mb-12">
//           {/* Center Circle */}
//           <div className="absolute w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center z-20">
//             <div className="text-lg font-semibold text-gray-800 text-center">
//               SALESFORCE
//               <br />
//               DEVELOPER
//               <br />
//               COURSE
//             </div>
//           </div>

//           {/* Module Circles */}
//           <div className="relative w-full max-w-4xl h-[450px] mx-auto">
//             {courseModules.map((module, index) => {
//               const angle = (index / courseModules.length) * 2 * Math.PI;
//               const x = 50 + radius * Math.cos(angle);
//               const y = 50 + radius * Math.sin(angle);
//               return (
//                 <motion.div
//                   key={module.id}
//                   style={{
//                     position: "absolute",
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                   whileHover={{ scale: 1.15 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <button
//                     onClick={() => setSelectedModule(module)}
//                     className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md border-4 border-blue-500 flex items-center justify-center p-4 transition-transform duration-300 group hover:bg-blue-50"
//                   >
//                     <span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600">
//                       {module.title}
//                     </span>
//                   </button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Module Details Modal */}
//         {selectedModule && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
//               <p className="text-lg text-gray-600 mb-6">{selectedModule.description}</p>
//               <button
//                 onClick={() => setSelectedModule(null)}
//                 className="w-full bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const courseModules = [
  { id: "sf-intro", title: "Introduction to Salesforce", description: "Understand the basics of Salesforce and its significance in the CRM world." },
  { id: "sf-admin", title: "Salesforce Administration", description: "Master Salesforce Admin tools, workflows, and data management." },
  { id: "sf-dev", title: "Salesforce Development", description: "Learn to customize Salesforce using Apex, Visualforce, and Lightning." },
  { id: "lightning", title: "Lightning Web Components", description: "Dive into building modern UIs using Lightning Web Components." },
  { id: "integration", title: "Salesforce Integration", description: "Learn to integrate Salesforce with third-party applications and APIs." },
  { id: "automation", title: "Automation in Salesforce", description: "Automate business processes using Flow, Process Builder, and Workflow Rules." },
  { id: "data-model", title: "Salesforce Data Model", description: "Understand objects, relationships, and schema builder in Salesforce." },
  { id: "security", title: "Salesforce Security", description: "Implement robust security measures including roles, profiles, and sharing rules." },
  { id: "reports", title: "Reports and Dashboards", description: "Create insightful reports and dashboards to visualize business data." },
  { id: "deployment", title: "Salesforce Deployment", description: "Learn deployment strategies and tools like Change Sets and Salesforce DX." },
  { id: "certification", title: "Certification Preparation", description: "Prepare for Salesforce certifications with practice questions and tips." }
];

export default function CourseOverview() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [radius, setRadius] = useState(40); // Dynamic radius in %

  // Update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setRadius(35); // Smaller radius for mobile
      } else if (screenWidth < 768) {
        setRadius(40); // Medium radius for tablets
      } else {
        setRadius(45); // Larger radius for desktops
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-200 via-purple-300 to-pink-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Salesforce Developer Course Overview</h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto">A comprehensive training program to master essential Salesforce concepts for developers.</p>
        </div>

        {/* Course Modules - Circle Design */}
        <div className="relative flex justify-center items-center mb-12">
          {/* Center Circle */}
          <div className="absolute w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center z-20">
            <div className="text-lg font-semibold text-gray-800 text-center">
              SALESFORCE
              <br />
              DEVELOPER
              <br />
              COURSE
            </div>
          </div>

          {/* Module Circles */}
          <div className="relative w-full max-w-4xl h-[450px] mx-auto">
            {courseModules.map((module, index) => {
              const angle = (index / courseModules.length) * 2 * Math.PI;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <motion.div
                  key={module.id}
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Module Button */}
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md border-4 border-blue-500 flex items-center justify-center p-4 transition-transform duration-300 group hover:bg-blue-50"
                  >
                    <span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-blue-600">
                      {module.title}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Module Details Modal */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{selectedModule.description}</p>
              <button
                onClick={() => setSelectedModule(null)}
                className="w-full bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
