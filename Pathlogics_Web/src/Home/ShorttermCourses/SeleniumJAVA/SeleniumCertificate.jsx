import React from "react";
import certificate from "../../../assets/certificate.jpg";
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
        Industry Recognized Selenium With Java Certification

        </h3>
        <p>
   Upon successful completion of the Selenium with Java Course at Pathlogics, you’ll receive an industry-recognized certification that validates your skills and sets you apart as a job-ready Selenium Automation Tester. This isn’t just a certificate, it’s proof that you’ve mastered automation testing, designed real-world test scripts, and are ready to contribute to quality assurance teams.
We celebrate every batch with a special certification ceremony, This certification not only boosts your resume but also shows employers that you're fully prepared to enter the world of automation testing and make an immediate impact.

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
