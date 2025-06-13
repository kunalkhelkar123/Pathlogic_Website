import React from "react";
import certificate from "../../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function PowerBICertificate() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Best Power BI Certification Course In Pune
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Upon successful completion of the Power BI course with certificate at Pathlogics, 
            you’ll receive an industry-recognized certification that highlights your expertise in 
            data analysis, visualization, and business intelligence. This Power BI course certification 
            is more than just a document, it’s a reflection of the hands-on experience you’ve gained 
            through real-world projects and interactive dashboards.
            <br /><br />
            We proudly celebrate each batch with a certification ceremony, marking your transition 
            into a job-ready data professional. This certification not only enhances your resume 
            but also gives you a competitive edge, proving to employers that you're fully prepared 
            to apply Power BI skills in real business environments.
          </p>
          <Link to="/ContactUs">
            <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
              Inquire Now →
            </button>
          </Link>
        </div>

        {/* Right Section: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center px-4 sm:px-6 lg:px-16">
          <img
            src={certificate}
            alt="Power BI Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
