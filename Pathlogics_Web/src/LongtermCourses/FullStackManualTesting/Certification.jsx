import React from "react";
import certificate from "../../assets/certificate.jpg"
import { Link } from "react-router-dom";

export default function CertificateBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2">
        <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
        <h3 className="text-2xl  font-extrabold text-black mt-2">
          Industry Recognized <br /> Certification For Manual Testing
        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Upon successful completion of the <strong>Manual Testing Training at Pathlogics</strong>, whether
          through online or classroom sessions, you will receive an industry-recognized certification.
          We celebrate your achievement with a certification distribution ceremony at the end of each
          batch, allowing you to showcase your expertise in software testing, test case execution,
          and defect tracking. This certification validates your skills as a <strong>Certified Manual Tester,</strong>
          enhancing your resume and boosting your career prospects in the software testing industry.


        </p>
        <Link to="/QuickEnquiry"> <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
          Inquire Now →
        </button></Link>
      </div>

      {/* Right Section: Certificate Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={certificate} // Replace with actual image path
          alt="Certificate Preview"
          className="w-full max-w-md border-2  rounded-md "
        />
      </div>
    </div>
  );
}
