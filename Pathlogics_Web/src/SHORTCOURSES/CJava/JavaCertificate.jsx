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
          Industry Recognized Core Java Certification in Pune
        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Earn a Core Java certification that truly showcases your skills and
          boosts your resume. Recognized by top IT companies, our certification
          gives you the edge in job interviews and career growth. Whether you’re
          just starting out or looking to upgrade your skills, this course adds
          real value to your journey. we conduct a special certificate
          distribution program after every batch completion, celebrating your
          success and helping you move one step closer to becoming a confident
          developer in Pune’s thriving tech scene.
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
