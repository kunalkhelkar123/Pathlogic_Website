import React from "react";
import { Link } from "react-router-dom";

export default function DigitalIpt() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 mb-4 sm:mx-10 mt-[90px] sm:mt-0 lg:mt-0 md:mt-0 to-yellow-400 text-black py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between shadow-lg  gap-6">
      <div className="text-left md:w-2/3">
        <p className="  text-2xl  font-semibold">
          Paid Internship After Certification Program in Pune.{" "} <br/>
          <strong>Earn ₹7,000 - ₹10,000 Stipend</strong>
        </p>
        <p className="text-sm mt-2 sm:px-4 md:px-0">
          Complete our Full Stack Developer Certification Course and unlock the opportunity to join a paid internship at Pathlogics! 
          Gain hands-on industry experience immediately after course completion. 
          This is your chance to implement your learning and boost your skills.
        </p>
      </div>
     <Link to="/full-stack-developer-course-in-pune-with-placement"> <button className="bg-blue-900 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-blue-800 transition">
      Get More Course Details
      </button></Link>
    </div>
  );
}
