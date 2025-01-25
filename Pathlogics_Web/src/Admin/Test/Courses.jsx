import React from "react";
import img from "../../assets/CourseSections.png"; 
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      title: "Embedded Systems Development",
      description:
        "Learn the fundamentals of embedded systems with hands-on experience in hardware and software integration.",
      duration: "6 Months",
      mode: "Offline",
      path:"/CourseSection/Test"
    },
    {
      title: "Automotive Embedded Systems",
      description: "Master the principles and practices of embedded systems in the automotive industry.",
      duration: "5 Months",
      mode: "Offline",
      path:"/"
    },
    {
      title: "AUTOSAR",
      description: "A deep dive into the AUTOSAR standard for automotive software architecture with real-time systems.",
      duration: "4 Months",
      mode: "Online",
      path:"/"
    },
    {
      title: "MicroPython for Embedded Systems",
      description: "Explore MicroPython and its use in embedded system development with practical, hands-on projects.",
      duration: "3 Months",
      mode: "Online",
      path:"/"
    },
    {
      title: "Embedded C Programming",
      description:
        "Learn C programming in the context of embedded systems, and get practical exposure to real-time applications.",
      duration: "4 Months",
      mode: "Offline",
      path:"/"
    },
    {
      title: "Python Programming",
      description:
        "Gain a comprehensive understanding of Python programming with an emphasis on practical applications.",
      duration: "3 Months",
      mode: "Online",
      path:"/"
    },
    {
      title: "Device Drivers for Embedded Systems",
      description:
        "Understand the essentials of device driver development in embedded systems with a focus on Linux drivers.",
      duration: "5 Months",
      mode: "Offline",
      path:"/"
    },
    {
      title: "Full Stack Development",
      description:
        "A comprehensive Full Stack Development Course (MERN stack) with theoretical & practical hands-on coding experience.",
      duration: "6 Months",
      mode: "Offline",
      path:"/"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Courses we offer</h1>
        <p className="text-center text-gray-600 mb-12">
          Access to long & short term courses we offer to enhance your technical knowledge.
        </p>

        <div className="grid md:grid-cols-4 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <div className="bg-[#0a0a1f] p-6 h-full relative">
                {/* Background overlay with circuit pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url(${img})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    mixBlendMode: "overlay",
                  }}
                />
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[#ff6b33] text-2xl font-bold mb-4">{course.title}</h3>
                  <p className="text-gray-200 mb-6">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-300">
                      <span className="text-[#ff6b33]">Duration:</span> {course.duration}
                    </p>
                    <p className="text-gray-300">
                      <span className="text-[#ff6b33]">Course Mode:</span> {course.mode}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link to={course.path}>
                    <button className="flex-1 border border-[#ff6b33] text-[#ff6b33] py-2 px-4 rounded hover:bg-[#ff6b33] hover:text-white transition-colors">
                      Test Questions
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

export default Courses;
