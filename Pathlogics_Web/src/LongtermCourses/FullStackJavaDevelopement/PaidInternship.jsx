import React from "react";
import { Link } from "react-router-dom";

export default function PaidInternship() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black py-10 px-8 sm:px-10 md:px-16 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
      
      {/* Text Content */}
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-2xl md:text-3xl font-extrabold leading-tight">
          Paid Internship After Certification Program in Pune. <br />
          <strong className="text-blue-900">Earn ₹7,000 - ₹10,000 Stipend</strong>
        </p>
        <p className="text-sm md:text-base mt-3 md:mt-4 max-w-xl mx-auto md:mx-0 text-gray-900">
          Complete our Full Stack Developer Certification Course and unlock the opportunity to join a paid internship at Pathlogics! 
          Gain hands-on industry experience immediately after course completion. 
          This is your chance to implement your learning and boost your skills.
        </p>
      </div>
      
      {/* Button */}
      <Link to="/full-stack-developer-course-in-pune-with-placement" className="w-full md:w-auto">
        <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-800 transition w-full md:w-auto">
          Get More Course Details
        </button>
      </Link>
    </div>
  );
}
