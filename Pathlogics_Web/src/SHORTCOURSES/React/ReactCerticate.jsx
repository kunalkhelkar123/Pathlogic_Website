import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function ReactCertificate() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized React Certification Course
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Get certified in React JS and let your skills speak louder than words! This isn’t just another piece of paper, 
            it’s proof that you can build modern, real-world web applications using React and the most in-demand front-end tools in the industry. 
            Our React JS Course with Certificate is recognized by leading IT companies and startups, giving your resume the edge it deserves.
            <br /><br />
            At the end of every batch, we host a special certification ceremony. It’s more than just receiving a certificate, it’s that proud moment 
            when your journey is recognized, your confidence gets a boost, and you officially step into the tech world as a future-ready React developer.
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
            alt="React Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
