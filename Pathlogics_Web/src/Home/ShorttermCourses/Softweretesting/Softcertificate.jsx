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
     <h3 className="text-2xl font-extrabold text-black mt-2">
        Industry Recognized Software Testing  Certification 

        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
     Upon successfully completing the Software Testing Certification Course at Pathlogics, offered both online and in-class, you'll earn a prestigious industry-recognized certification. To honor your accomplishment, we host a certification distribution ceremony at the end of each batch, giving you a chance to proudly display your skills. This certification validates your expertise in manual and automation testing, giving a significant boost to your resume/CV and opening doors to exciting career opportunities in the software testing field.
This certification not only boosts your resume but also shows employers that you're fully prepared to enter the world of Software testing and make an immediate impact.

        </p>
        <Link to="/QuickEnquiry">
          <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
            Inquire Now →
          </button>
        </Link>
        </p>
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
