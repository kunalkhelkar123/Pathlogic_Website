import React from "react";
import image from "../assets/girl.png";

const Javadeveloper = () => {
  return (
    <div className="bg-orange-500 text-white px-8 relative">
      {/* Circular Vector in Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <circle cx="250" cy="250" r="250" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide">
            Upskill Your Career Now!
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Learn Full Stack  With <br /> Java Development <br /> Course.
          </h1>
          <p className="text-lg text-white">
            Offline Batches – 100% Job Assurance Program
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="bg-white text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200">
              Enroll Now!
            </button>
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-green-600">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Student with books"
            className="rounded-xl w-[500px] h-[500px] object-cover" // Increased size here
          />
        </div>
      </div>
    </div>
  );
};

export default Javadeveloper;
