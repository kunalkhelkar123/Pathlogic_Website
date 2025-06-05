import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function ReactCerticate() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 pb-6 md:px-12 md:pb-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2">
        <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
        <h3 className="text-2xl font-extrabold text-black mt-2">
          Industry Recognized React Certification Course
        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Get certified in <strong>React JS</strong> and let your skills speak louder than words! 
          This isn’t just another piece of paper — it’s proof that you can build modern, real-world web 
          applications using React and the most in-demand front-end tools in the industry.
        </p>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Our <strong>React JS Course with Certificate</strong> is recognized by leading IT companies and 
          startups, giving your resume the edge it deserves. At the end of every batch, we host a special 
          certification ceremony. It’s more than just receiving a certificate — it’s that proud moment when 
          your journey is recognized, your confidence gets a boost, and you officially step into the tech 
          world as a future-ready React developer.
        </p>
        <Link to="/QuickEnquiry">
          <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
            Inquire Now →
          </button>
        </Link>
      </div>

      {/* Right Section: Certificate Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={certificate}
          alt="Certificate Preview"
          className="w-full max-w-md border-2 rounded-md"
        />
      </div>
    </div>
  );
}
