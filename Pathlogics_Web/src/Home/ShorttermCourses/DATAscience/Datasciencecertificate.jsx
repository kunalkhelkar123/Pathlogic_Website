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
       Industry Recognized Data Science with Python Certification



        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
    Upon successful completion of the Data Science with Python course at Pathlogics, you’ll earn a Data Science Certification that showcases your expertise in data analysis, machine learning, and Python programming. This certification is a testament to the practical skills you've developed through hands-on experience, solving real-world problems, and building data models.
We celebrate each batch with a certification ceremony, acknowledging your readiness to excel in the data science field. The Data Science Certification course not only adds value to your resume but also gives you a significant advantage in the competitive job market, showing to potential employers that you are prepared to apply Python-driven data science solutions in real business environments. 
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
