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
        Industry Recognized Dot Net Core Certification 

        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
      Upon successful completion of the Dot Net Core Course at Pathlogics, you’ll receive an industry-recognized Dot Net Core Certification that validates your skills and sets you apart as a job-ready Dot Net Core Developer. It's more than just a certificate,  it's proof that you’ve built real-world web applications and mastered in-demand technologies.
We celebrate every batch with a certification ceremony where you get to mark your achievement, connect with peers, and walk away with confidence. This certification not only adds weight to your resume but also shows employers that you're ready to step into the tech world and make an impact from day one.

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
