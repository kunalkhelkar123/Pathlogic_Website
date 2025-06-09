import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function DotnetCerticate() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 pb-6 md:px-12 md:pb-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2">
        <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
        <h3 className="text-2xl font-extrabold text-black mt-2">
          Industry Recognized Dot NET with Angular Certification
        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Upon successful completion of the <strong>Dot Net with Angular Course</strong> at Pathlogics,
          you’ll be awarded an industry-recognized certification that showcases your ability to build
          real-world, full-featured web applications. This certification highlights your command over both
          .NET and Angular, making you stand out as a job-ready developer.
        </p>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          It's more than just a piece of paper, it’s a mark of your hard work, practical skills, and career
          readiness. We celebrate your achievement with a certification ceremony, giving you a moment to shine
          and network with fellow learners. This credential adds real value to your resume and shows employers
          you're ready to contribute from day one.
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
