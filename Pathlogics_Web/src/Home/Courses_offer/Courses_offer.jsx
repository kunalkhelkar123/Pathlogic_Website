import React from 'react';
import fullstockimage from '../../assets/fullstockimage.jpg';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Embedded Systems Development',
    description: 'Learn the fundamentals of embedded systems with hands-on experience in hardware and software integration.',
    duration: '6 Months',
    mode: 'Offline',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 2,
    title: 'Automotive Embedded Systems',
    description: 'Master the principles and practices of embedded systems in the automotive industry.',
    duration: '5 Months',
    mode: 'Offline',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 3,
    title: 'AUTOSAR',
    description: 'A deep dive into the AUTOSAR standard for automotive software architecture with real-time systems.',
    duration: '4 Months',
    mode: 'Online',
    image: fullstockimage,
    path:"/Knowmore",
  },
  {
    id: 4,
    title: 'MicroPython for Embedded Systems',
    description: 'Explore MicroPython and its use in embedded system development with practical, hands-on projects.',
    duration: '3 Months',
    mode: 'Online',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 5,
    title: 'Embedded C Programming',
    description: 'Learn C programming in the context of embedded systems, and get practical exposure to real-time applications.',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 6,
    title: 'Python Programming',
    description: 'Gain a comprehensive understanding of Python programming with an emphasis on practical applications.',
    duration: '3 Months',
    mode: 'Online',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 7,
    title: 'Device Drivers for Embedded Systems',
    description: 'Understand the essentials of device driver development in embedded systems with a focus on Linux drivers.',
    duration: '5 Months',
    mode: 'Offline',
    image: fullstockimage,
    path:"/",
  },
  {
    id: 8,
    title: 'Full Stack Development',
    description: 'A comprehensive Full Stack Development Course (MERN stack) with theoretical & practical hands-on coding experience.',
    duration: '6 Months',
    mode: 'Offline',
    image: fullstockimage,
    path:"/",
  }
];

// Main Component
export default function Component() {
  return (
    <>
      {/* Main Section */}
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 bg-white  rounded-lg shadow-lg">

          {courses.map(course => (
            <div
              key={course.id}
              className="relative flex flex-col justify-between bg-cover bg-center rounded-lg shadow-lg border border-black"
              style={{
                backgroundImage: `url(${course.image})`,
                height: "400px",
                position: "relative",
                backgroundColor: 'rgba(12, 11, 11, 0.95)',
                // boxShadow: 'inset -20px 0px 0px 20px rgba(0, 0, 0, 0.7), inset 20px 0px 0px 20px rgba(0, 0, 0, 0.5)' 
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              <div className="relative z-10 p-6">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">{course.title}</h2>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div>
                  <p className="text-orange-500 font-semibold">Duration: {course.duration}</p>
                  <p className="text-orange-500 font-semibold">Course Mode: {course.mode}</p>
                </div>
              </div>

              <div className="relative z-10 p-6 flex space-x-2 bg-black">
              <Link to="/quickenquiry" className="w-full">
  <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">
    Apply Now
  </button>
</Link>

                <Link to={course.path} className="w-full">
                <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Know More
                </button></Link>
                {/* <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Brochure
                </button> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
