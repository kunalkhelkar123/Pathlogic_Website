// 'use client'

// import { useState } from 'react'
// import { ChevronDown } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'

// const moduleContents = [
//   {
//     title: "Module 1",
//     subtitle: "Introduction to AUTOSAR and Automotive Software Architecture",
//     topics: [
//       {
//         title: "Overview of the AUTOSAR Standard",
//       },
//       {
//         title: "AUTOSAR Architecture Overview",
//       },
//       {
//         title: "Real-Time Systems in Automotive Software",
//       },
//       {
//         title: "AUTOSAR Adaptive Platform",
//       },
//       {
//         title: "AUTOSAR Classic Platform",
//       }
//     ]
//   },
//   {
//     title: "Module 2",
//     subtitle: "AUTOSAR Software Components and Communication",
//     topics: [
//       {
//         title: "Understanding AUTOSAR Software Components (SWCs)",
//       },
//       {
//         title: "Communication between SWCs and ECUs",
//       },
//       {
//         title: "Middleware in AUTOSAR",
//       },
//       {
//         title: "AUTOSAR Communication Protocols (e.g., CAN, FlexRay)",
//       }
//     ]
//   },
//   {
//     title: "Module 3",
//     subtitle: "Configuring and Implementing AUTOSAR",
//     topics: [
//       {
//         title: "AUTOSAR Configuration Tools",
//       },
//       {
//         title: "System Configuration and ECU Configuration",
//       },
//       {
//         title: "Creating and Managing ARXML Files",
//       },
//       {
//         title: "Integrating and Testing AUTOSAR Systems",
//       }
//     ]
//   },
//   {
//     title: "Module 4",
//     subtitle: "Advanced Topics in AUTOSAR for Real-Time and Safety Critical Systems",
//     topics: [
//       {
//         title: "Safety Standards in Automotive (ISO 26262)",
//       },
//       {
//         title: "Timing and Resource Management in AUTOSAR",
//       },
//       {
//         title: "Performance Optimization in Automotive Systems",
//       },
//       {
//         title: "Testing and Debugging AUTOSAR Software",
//       }
//     ]
//   }
// ]

// export default function ProgramModules() {
//   const [expandedSession, setExpandedSession] = useState(null)

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
//           AUTOSAR Course Modules
//         </h1>
        
//         <div className="space-y-4">
//           {moduleContents.map((session) => (
//             <div key={session.title} className="bg-white rounded-lg shadow-sm">
//               <button
//                 onClick={() => setExpandedSession(
//                   expandedSession === session.title ? null : session.title
//                 )}
//                 className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <span className="text-xl font-semibold text-gray-900">
//                   {session.title}
//                 </span>
//                 <ChevronDown
//                   className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${expandedSession === session.title ? 'rotate-180' : ''}`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {expandedSession === session.title && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
//                       {session.subtitle && (
//                         <div className="text-orange-500 font-medium mb-4">
//                           {session.subtitle}
//                         </div>
//                       )}
                      
//                       <div className="space-y-4">
//                         {session.topics.map((topic, index) => (
//                           <div key={index}>
//                             <div className="font-medium text-gray-900">
//                               {topic.title}
//                             </div>
//                             {topic.subtopics && (
//                               <ul className="mt-2 ml-6 space-y-1">
//                                 {topic.subtopics.map((subtopic, subIndex) => (
//                                   <li 
//                                     key={subIndex}
//                                     className="text-gray-600 before:content-['-'] before:mr-2"
//                                   >
//                                     {subtopic}
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CourseDetails() {
  const location = useLocation();
  const { course } = location.state || {};

  const [selectedSession, setSelectedSession] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  if (!course) {
    return <div className="p-4 text-center text-gray-700">No course details available.</div>;
  }

  // Course-specific background images
  const backgroundImages = {
    "Embedded Systems Development": "https://www.uni-due.de/imperia/md/images/iw/de/studium/fittosize__1200_550_83063f4bed1e794a6402c2879088e76e_banner_schaltkreis.jpg",
    "Automotive Embedded Systems": "https://png.pngtree.com/thumb_back/fh260/background/20230416/pngtree-automotive-technology-background-image_2371302.jpg",
  };

  // Course overview images
  const overviewImages = {
    "Embedded Systems Development": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGTfr5XCd-pO1rDaYFA5Li4HljBMQLbpIFQ&s",
    "Automotive Embedded Systems": "https://media.licdn.com/dms/image/v2/D5612AQFoYOlya1HnUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710389485608?e=2147483647&v=beta&t=9JX7j-xX1UTsIP-oFC-24W6BBODJ9NKHLeKGBDznP6Y",
  };

  // Session details for each course
  const sessionDetails = {
    "Embedded Systems Development": {
      Morning: {
        topics: "Basics of Embedded Systems, Microcontroller Architecture, Introduction to C Programming",
        instructor: "Dr. John Smith, PhD in Embedded Systems",
        features: "Interactive Q&A sessions, hands-on practical projects using STM32 boards",
      },
      Afternoon: {
        topics: "Real-Time Operating Systems (RTOS), Advanced C Programming for Embedded Systems",
        instructor: "Ms. Jane Doe, Embedded Systems Specialist",
        features: "Live demonstrations with sensors and actuators, small group coding sessions",
      },
      Evening: {
        topics: "Embedded Linux Basics, Device Driver Development",
        instructor: "Dr. Sarah Lee, Embedded Systems Researcher",
        features: "Case studies on real-world projects, certification guidance",
      },
    },
    "Automotive Embedded Systems": {
      Morning: {
        topics: "Introduction to Automotive Systems, CAN Communication Protocols, Basics of AUTOSAR",
        instructor: "Mr. Alan Ford, Automotive Systems Expert",
        features: "Hands-on CAN bus simulations, practical AUTOSAR implementation",
      },
      Afternoon: {
        topics: "Advanced Diagnostics, ECU Programming, Functional Safety",
        instructor: "Ms. Emily Brown, Functional Safety Specialist",
        features: "Live ECU programming demonstrations, safety compliance case studies",
      },
      Evening: {
        topics: "Model-Based Design, Advanced Driver Assistance Systems (ADAS)",
        instructor: "Dr. Mike Johnson, ADAS Specialist",
        features: "Real-world ADAS projects, certification assistance",
      },
    },
  };

  // FAQs Array
  const faqs = [
    {
      question: "What prior knowledge is required for this course?",
      answer: "Basic knowledge of programming and hardware concepts is recommended but not mandatory.",
    },
    {
      question: "Are there any certifications provided?",
      answer: "Yes, you will receive a course completion certificate upon successfully finishing the course.",
    },
    {
      question: "What tools will be covered?",
      answer: "You will learn tools such as MATLAB, Simulink, Keil, STM32, and CAN Analyzer, depending on the course.",
    },
    {
      question: "Are there any practical sessions?",
      answer: "Yes, all courses include hands-on sessions for practical learning.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-center flex flex-col justify-start items-center relative"
      style={{
        backgroundImage: `url(${backgroundImages[course.title] || "https://example.com/default-bg.jpg"})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

      {/* Main Content */}
      <div className="max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mt-16 mb-20 z-10">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4 text-center">{course.title}</h1>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed text-center">{course.description}</p>
        <div className="flex justify-around mb-6">
          <p className="text-lg font-semibold text-gray-800">Duration: {course.duration}</p>
          <p className="text-lg font-semibold text-gray-800">Course Mode: {course.mode}</p>
        </div>

        {/* Overview Images */}
        <div className="my-6">
          <img
            src={overviewImages[course.title]}
            alt={`${course.title} Overview`}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Session Dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Select Session:</label>
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="" disabled>
              Choose a session
            </option>
            <option value="Morning">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
            <option value="Evening">Evening (6 PM - 9 PM)</option>
          </select>

          {/* Display session details based on selected session */}
          {selectedSession && sessionDetails[course.title][selectedSession] && (
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                {selectedSession} Session Details
              </h3>
              <p className="text-gray-700">
                <strong>Topics Covered:</strong> {sessionDetails[course.title][selectedSession].topics}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Instructor:</strong> {sessionDetails[course.title][selectedSession].instructor}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Special Features:</strong> {sessionDetails[course.title][selectedSession].features}
              </p>
            </div>
          )}
        </div>

        {/* Enroll Now Button */}
        <button
          onClick={() => alert("Enrollment successful!")}
          className="w-300 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Enroll Now
        </button>

        {/* FAQs Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Have You Any Questions?</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-200 pb-2"
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
            >
              <h3
                className={`font-semibold text-lg text-gray-700 cursor-pointer flex justify-between items-center ${
                  expandedFAQ === index ? "text-orange-500" : ""
                }`}
              >
                {faq.question}
                <span>{expandedFAQ === index ? "-" : "+"}</span>
              </h3>
              {expandedFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400 shadow-md transition-all"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
