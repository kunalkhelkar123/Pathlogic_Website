// import React, { useState } from "react";
// import img from "../../assets/CourseSections.png";
// import { Link } from "react-router-dom";

// const CoursesList = () => {
//   const [filter, setFilter] = useState("all");

// const courses = [
//   {
//     title: "Core Java",
//     description:
//       "Learn the fundamentals of embedded systems with hands-on experience in hardware and software integration.",
//     duration: "6 Months",
//     type: "ShortTerm Courses",
//     mode: "Offline",
//     path: "/CourseSection/Test"
//   },
//   {
//     title: "Advanced Java",
//     description:
//       "Master the principles and practices of embedded systems in the automotive industry.",
//     duration: "5 Months",
//     type: "ShortTerm Courses",
//     mode: "Offline",
//     path: "/"
//   },
//   {
//     title: "React.JS",
//     description:
//       "A deep dive into the AUTOSAR standard for automotive software architecture with real-time systems.",
//     duration: "4 Months",
//     type: "ShortTerm Courses",
//     mode: "Online",
//     path: "/"
//   },
//     {
//       title: "Core Java",
//       description:
//         "Learn the fundamentals of embedded systems with hands-on experience in hardware and software integration.",
//       duration: "6 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/CourseSection/Test"
//     },
//     {
//       title: "Advanced Java",
//       description:
//         "Master the principles and practices of embedded systems in the automotive industry.",
//       duration: "5 Months",      
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/"
//     },
//     {
//       title: "React.JS",
//       description:
//         "A deep dive into the AUTOSAR standard for automotive software architecture with real-time systems.",
//       duration: "4 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/"
//     },
//     {
//       title: "Angular.JS",
//       description:
//         "Explore MicroPython and its use in embedded system development with practical, hands-on projects.",
//       duration: "3 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/"
//     },
//     {
//       title: "Node.JS",
//       description:
//         "Learn C programming in the context of embedded systems, and get practical exposure to real-time applications.",
//       duration: "4 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/"
//     },
//     {
//       title: "Python Programming",
//       description:
//         "Gain a comprehensive understanding of Python programming with an emphasis on practical applications.",
//       duration: "3 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/"
//     },
//     {
//       title: "React Native",
//       description:
//         "Understand the essentials of device driver development in embedded systems with a focus on Linux drivers.",
//       duration: "5 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/"
//     },
//     {
//       title: "Full Stack Java Development",
//       description: "A comprehensive Full Stack Development Course (MERN stack) with theoretical & practical hands-on coding experience.",
//       duration: "6 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/full-stack-java"
//     },
//     {
//       title: ".NET Core Development",
//       description: "Master backend and web development using .NET Core and learn how to build scalable applications.",
//       duration: "6 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/dotnet-core"
//     },
//     {
//       title: ".NET with Angular",
//       description: "A comprehensive course to learn both .NET and Angular for building dynamic, scalable web applications.",
//       duration: "5 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/dotnet-angular"
//     },
//     {
//       title: "Software Testing",
//       description: "Learn software testing methodologies, manual testing techniques, and automation tools for quality assurance.",
//       duration: "4 Months",
//       type : " ShortTerm Courses",
//       mode: "Offline",
//       path: "/software-testing"
//     },
//     {
//       title: "Power BI",
//       description: "Learn how to visualize and analyze data using Microsoft Power BI and create interactive reports and dashboards.",
//       duration: "3 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/powerbi"
//     },
//     {
//       title: "Data Science with Python",
//       description: "Gain a deep understanding of data analysis and machine learning with Python, using real-world datasets.",
//       duration: "5 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/data-science-python"
//     },
//     {
//       title: "AWS & DevOps",
//       description: "Understand AWS cloud computing services and DevOps practices to automate infrastructure and improve CI/CD.",
//       duration: "6 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/aws-devops"
//     },
//     {
//       title: "Digital Marketing Training",
//       description: "Learn digital marketing strategies, SEO, SEM, content marketing, and how to build a brand online.",
//       duration: "3 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/digital-marketing"
//     },
//     {
//       title: "FullStack Web Developer",
//       description: "Learn how to build, deploy, and maintain full-stack web applications using the latest technologies like MERN stack.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/FullMERN"
//     },
//     {
//       title: "FullStack Java Developer",
//       description: "Master Java programming and full-stack web development using popular frameworks such as Spring and Hibernate.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/FullstackJava"
//     },
//     {
//       title: "FullStack .Net Developer",
//       description: "Become proficient in developing web applications using .NET technologies and the latest development frameworks.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/NetDev"
//     },
//     {
//       title: "FullStack Devops Engineer",
//       description: "Learn DevOps principles and practices to automate development workflows and manage deployments efficiently.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/Devops"
//     },
//     {
//       title: "FullStack Salesforce Developer",
//       description: "Gain expertise in building and customizing Salesforce applications and automating business processes.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/SalesForce"
//     },
//     {
//       title: "FullStack Testing",
//       description: "Understand software testing methodologies, including manual and automation testing to ensure software quality.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/Testing"
//     },
//     {
//       title: "FullStack Python Developer",
//       description: "Learn Python for web development, data analysis, and more, using popular frameworks like Django and Flask.",
//       duration: "6 Months",
//       type : " Long Term Courses",
//       mode: "Offline",
//       path: "/PythonDev"
//     },
//     {
//       title: "FullStack Development with AI",
//       description: "Explore the world of artificial intelligence and machine learning while building full-stack web applications.",
//       duration: "6 Months",
//       type :" Long Term Courses",
//       mode: "Offline",
//       path: "/Development"
//     },
//     {
//       title: "Diploma in Digital Marketing",
//       description: "Master digital marketing strategies, including SEO, SEM, and social media marketing, to drive online business growth.",
//       duration: "3 Months",
//       type : " ShortTerm Courses",
//       mode: "Online",
//       path: "/Diploma"
//     },
//   {
//     title: "FullStack Web Developer",
//     description:
//       "Learn how to build, deploy, and maintain full-stack web applications using the latest technologies like MERN stack.",
//     duration: "6 Months",
//     type: " Long Term Courses",
//     mode: "Offline",
//     path: "/FullMERN"
//   },
// ];

//   // Filter courses based on selected type
//   const filteredCourses = filter === "all" ? courses : courses.filter(course => course.type === filter);

//   return (
//     <div className="bg-gray-100 min-h-screen py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Courses We Offer</h1>
//         <p className="text-center text-gray-600 mb-12">
//           Access to long & short term courses we offer to enhance your technical knowledge.
//         </p>

//         {/* Filter Buttons */}
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setFilter(" ShortTerm Courses")}
//             className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors"
//           >
//             Short Term Courses
//           </button>
//           <button
//             onClick={() => setFilter(" Long Term Courses")}
//             className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors"
//           >
//             Long Term Courses
//           </button>
//           <button
//             onClick={() => setFilter("all")}
//             className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors"
//           >
//             All Courses
//           </button>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//           {filteredCourses.map((course, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="bg-[#0a0a1f] p-6 h-full relative">
//                 {/* Background overlay with circuit pattern */}
//                 <div
//                   className="absolute inset-0 opacity-30"
//                   style={{
//                     backgroundImage: `url(${img})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     mixBlendMode: "overlay",
//                   }}
//                 />
//                 {/* Content */}
//                 <div className="relative z-10">
//                   <h3 className="text-[#ff6b33] text-2xl font-bold mb-4">{course.title}</h3>
//                   <p className="text-gray-200 mb-6">{course.description}</p>
//                   <div className="space-y-2 mb-6">
//                     <p className="text-gray-300">
//                       <span className="text-[#ff6b33]">Duration:</span> {course.duration}
//                     </p>
//                     <p className="text-gray-300">
//                       <span className="text-[#ff6b33]">Course Mode:</span> {course.mode}
//                     </p>
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex gap-4">
//                     <Link to={course.path}>
//                       <button className="flex-1 border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors">
//                         Student Details
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoursesList;


import React, { useState } from "react";
import img from "../../assets/CourseSections.png";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const [filter, setFilter] = useState("all");

  const courses = [
    { title: "Core Java", id: "1", name: "corejava", type: "ShortTerm Courses" },
    { title: "Advanced Java", id: "2", name: "advancedjava", type: "ShortTerm Courses" },
    { title: "React.JS", id: "3", name: "reactjs", type: "ShortTerm Courses" },
    { title: "Angular.JS", id: "4", name: "angularjs", type: "ShortTerm Courses" },
    { title: "Node.JS", id: "5", name: "nodejs", type: "ShortTerm Courses" },
    { title: "Python Programming", id: "6", name: "python", type: "ShortTerm Courses" },
    { title: "React Native", id: "7", name: "reactnative", type: "ShortTerm Courses" },
    { title: "Full Stack Java Development", id: "8", name: "fullstackjava", type: "ShortTerm Courses" },
    { title: ".NET Core Development", id: "9", name: "netcore", type: "ShortTerm Courses" },
    { title: ".NET with Angular", id: "10", name: "netangular", type: "ShortTerm Courses" },
    { title: "Software Testing", id: "11", name: "softwaretesting", type: "ShortTerm Courses" },
    { title: "Power BI", id: "12", name: "powerbi", type: "ShortTerm Courses" },
    { title: "Data Science with Python", id: "13", name: "datascience", type: "ShortTerm Courses" },
    { title: "AWS & DevOps", id: "14", name: "awsdevops", type: "ShortTerm Courses" },
    { title: "Digital Marketing Training", id: "15", name: "digitalmarketing", type: "ShortTerm Courses" },
    { title: "FullStack Java Developer", id: "16", name: "fullstackjavadeveloper", type: "Long Term Courses" },
    { title: "FullStack .Net Developer", id: "17", name: "fullstacknetdeveloper", type: "Long Term Courses" },
    { title: "FullStack Devops Engineer", id: "18", name: "fullstackdevops", type: "Long Term Courses" },
    { title: "FullStack Salesforce Developer", id: "19", name: "fullstacksalesforce", type: "Long Term Courses" },
    { title: "FullStack Testing", id: "20", name: "fullstacktesting", type: "Long Term Courses" },
    { title: "FullStack Python Developer", id: "21", name: "fullstackpython", type: "Long Term Courses" },
    { title: "FullStack Development with AI", id: "22", name: "fullstackai", type: "Long Term Courses" },
    { title: "Diploma in Digital Marketing", id: "23", name: "diplomadigitalmarketing", type: "Long Term Courses" },
    { title: "FullStack Web Developer", id: "24", name: "fullstackwebdeveloper", type: "Long Term Courses" },
    { title: "Manual Testing", id: "25", name: "manualtesting", type: "Long Term Courses" },
    { title: "Selenium with Java", id: "26", name: "seleniumwithjava", type: "Long Term Courses" },
    { title: "Salesforce Development", id: "27", name: "salesforcedevelopment", type: "Long Term Courses" }
  ];




  // Calculate count for each type
  const shortTermCount = courses.filter(course => course.type === "ShortTerm Courses").length;
  const longTermCount = courses.filter(course => course.type === "Long Term Courses").length;

  // Filter courses based on selected type
  const filteredCourses = filter === "all" ? courses : courses.filter(course => course.type === filter);

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Courses We Offer</h1>
        <p className="text-center text-gray-600 mb-12">
          Access to long & short term courses we offer to enhance your technical knowledge.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("ShortTerm Courses")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600 text-white transition-colors"
          >
            Short Term Courses ({shortTermCount})
          </button>
          <button
            onClick={() => setFilter("Long Term Courses")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600  text-white transition-colors"
          >
            Long Term Courses ({longTermCount})
          </button>
          <button
            onClick={() => setFilter("all")}
            className="border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg bg-[#ff6b33] hover:bg-orange-600  text-white transition-colors"
          >
            All Courses ({courses.length})
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0a0a1f] p-6 h-full relative">
                {/* Background overlay with circuit pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    // backgroundImage: `url(${img})`,
                    backgroundColor: "teal",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // mixBlendMode: "overlay",
                  }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[#ff6b33] text-2xl font-bold mb-4">{course.title}</h3>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link to={{ pathname: "/admin/CoursesStudentinfo" }} state={{ courseId: course.id, courseName: course.name }}>
                      <button className="flex-1 border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded-lg hover:bg-[#ff6b33] hover:text-white transition-colors">
                        Student Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
