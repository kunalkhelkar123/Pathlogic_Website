import React from 'react';
import fullstockimage from '../../assets/fullstockimage.jpg';
import { Link } from 'react-router-dom';
import { Users, Briefcase, DollarSign, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: 'Full Stack Java Development',
    description: 'Learn the  with hands-on experience in harfull stack java development with hands-on projects and prctice',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    link: '/java-full-stack-developer-course-in-pune'
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    description: 'Master the principles and practices of full stack web development in the IT industry.',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    link: '/full-stack-web-development-course-in-pune'
  },
  {
    id: 3,
    title: 'Full Stack .DotNet Development',
    description: 'A deep dive into the DotNet standard for automotive software developer with real-time systems.',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    link: '/DotNet'
  },
  // {
  //   id: 4,
  //   title: 'Full Stack DevOps Engineer',
  //   description: 'Explore MEAN Stack Development and its use in  development with practical, hands-on projects.',
  //   duration: '6 Months',
  //   mode: 'Offline',
  //   image: fullstockimage,
  //   link: "/Devops"
  // },
];

const statsData = [
  { icon: Users, value: "1200+", label: "Students Trained" },
  { icon: Briefcase, value: "1400+", label: "MNC’s & Mid Scale Companies" },
  { icon: DollarSign, value: "16 LPA", label: "Highest Salary Package" },
  { icon: Users , value: "120+", label: "Student Internships Done" },
];


// Main Component
export default function Component() {
  return (
    <>
      {/* Main Section */}
      <div
        className="flex justify-center items-center  mt-10 px-2  bg-cover bg-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {courses.map(course => (
            <div
              key={course.id}
              className="relative flex flex-col justify-between bg-cover bg-center rounded-lg shadow-lg border border-black"
              style={{
                backgroundImage: `url(${course.image})`,
                height: "350px",
                position: "relative",
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                // boxShadow: 'inset -20px 0px 0px 20px rgba(0, 0, 0, 0.7), inset 20px 0px 0px 20px rgba(0, 0, 0, 0.5)' 
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              <div className="relative z-10 p-6">
                <h2 className="text-2xl font-bold text-orange-500 mb-4">{course.title}</h2>
                <p className="text-gray-300 mb-2">{course.description}</p>
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


                <Link
                  to={course.link}
                  state={{ course }}
                  className="w-full"
                >
                  <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                    Know More
                  </button>
                </Link>

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