import React from "react";
import certificate from "../../../assets/Certificate.jpg";
import { Link } from "react-router-dom";

export default function ManualForm() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Certification For Manual Testing
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Upon successful completion of the Manual Testing Training at Pathlogics, 
            whether through online or classroom sessions, you will receive an 
            industry-recognized certification. We celebrate your achievement with a 
            certification distribution ceremony at the end of each batch, allowing you to 
            showcase your expertise in software testing, test case execution, and defect tracking.
            <br /><br />
            This certification validates your skills as a Certified Manual Tester, 
            enhancing your resume and boosting your career prospects in the software testing industry.
          </p>
          <Link to="/ContactUs">
            <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
              Inquire Now →
            </button>
          </Link>
        </div>

        {/* Right Section: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-6 lg:px-16">
          <img
            src={certificate}
            alt="Manual Testing Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
