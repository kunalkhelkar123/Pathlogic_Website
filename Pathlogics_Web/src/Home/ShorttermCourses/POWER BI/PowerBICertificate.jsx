import React from "react";
import certificate from "../../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function PowerBICertificate() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-6 pb-6 md:px-12 md:pb-12 rounded-lg shadow-lg">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2">
        <p className="text-gray-600 text-sm font-semibold">Pathlogics Certificate</p>
        <h3 className="text-2xl font-extrabold text-black mt-2">
          Industry Recognized Best Power BI Certification Course In Pune
        </h3>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          Upon successful completion of the <strong>Power BI course with certificate</strong> at Pathlogics, you’ll receive an industry-recognized certification that highlights your expertise in data analysis, visualization, and business intelligence. This Power BI course certification is more than just a document, it’s a reflection of the hands-on experience you’ve gained through real-world projects and interactive dashboards.
        </p>
        <p className="text-gray-700 mt-4 sm:text-lg leading-relaxed">
          We proudly celebrate each batch with a certification ceremony, marking your transition into a job-ready data professional. This certification not only enhances your resume but also gives you a competitive edge, proving to employers that you're fully prepared to apply Power BI skills in real business environments.
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
