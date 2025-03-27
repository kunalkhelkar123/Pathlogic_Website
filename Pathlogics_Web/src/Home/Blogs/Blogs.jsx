import React from 'react';
import abc from "../../../src/assets/Awss.png"
import { Users, Briefcase, DollarSign, Clock } from "lucide-react";

export default function Blogs() {


  const statsData = [
    { icon: Users, value: "40k+", label: "Students Trained" },
    { icon: Briefcase, value: "2,000+", label: "Hiring Companies" },
    { icon: DollarSign, value: "19.5 LPA", label: "Highest Salary Drawn" },
    { icon: Clock, value: "65,000 hrs", label: "Training Conducted" },
  ];



  return (
    <>
    {/* Main content with image and text */}
      <div className=" pt-12  mb-[-60px]  bg-gray-50">
        <h1 className="text-3xl  sm:mb-[-60px] md:text-5xl font-extrabold text-black text-center ">
          Pathlogics: The Best IT Training Institute in Pune
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 min-h-screen p-6 md:p-12 lg:p- space-y-2 md:space-y-0 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg sm:mt-[-60px] sm:text-xl  md:text-2xl text-black  leading-relaxed mb-6">
              At Pathlogics, we pride ourselves on being recognized as the <strong>Best IT training institute in Pune</strong>. With a strong focus on delivering top-notch software courses and 100% placement assistance, we ensure our students receive industry-relevant education. Our commitment to quality and real-world learning sets us apart from other <strong>Software training institutes</strong>. Whether you're aspiring to become a software developer, tester, or data scientist, we offer comprehensive courses that meet the demands of the ever-evolving IT landscape.
            </p>
            <a
              href="/AboutUs"
              className="inline-block px-8 py-3 px-4 sm:px-6 py-2 sm:py-3 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition"
            >
             Explore More
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex p-12 justify-center">
            <img
              src={abc} // Replace with your actual image path later
              alt="Pathlogic Scholarship"
              className="w-78 h-60 sm:w-auto sm:h-auto max-w-xs sm:max-w-md md:max-w-full rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>




      {/* Padding to ensure separation between sections */}
   

      {/* Placement statistics */}

      {/* <div className="bg-white grid  grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-10 lg:p-14 xl:p-16 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 bg-white  border-[1px] border-gray-300  p-6 rounded-xl transition-transform transform hover:scale-105"
          >
            <stat.icon className="w-12 h-12 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">{stat.value}</h1>
            <p className="text-lg font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div> */}



    </>
  );
}
