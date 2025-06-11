import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function CertificateBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2">
        <p className="text-gray-600 text-sm font-semibold">
          Pathlogics Certificate
        </p>
        <h3 className="text-2xl font-extrabold text-black mt-2">
          Industry Recognized React Native Certification

        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
        Upon successful completion of the React Native Course at Pathlogics,  you’ll receive an industry-recognized React Native certification that adds true value to your career. We host a certification ceremony for each batch, giving you a chance to celebrate your achievement and walk away with proof of your skills.
This React Native course certification isn’t just a piece of paper, it highlights your ability to build real-world mobile apps and shows employers that you’re ready to step into the role of a React Native developer with confidence. It’s a great addition to your resume and a solid boost to your professional journey.

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
