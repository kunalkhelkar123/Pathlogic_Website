import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function SalesCertificate() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Salesforce Certification Course
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Upon successful completion of the Salesforce Course at Pathlogics, you’ll receive a Salesforce Developer Certification 
            that highlights your expertise in CRM development, Apex programming, automation tools, and Lightning components. 
            This certification reflects your hands-on experience working on real-world Salesforce projects and preparing for 
            job-ready roles in the industry.
            <br /><br />
            As one of the best Salesforce training institutes in Pune with placement support, Pathlogics takes pride in celebrating 
            every batch with a certification ceremony, recognizing your growth and confidence as a future Salesforce professional. 
            Our Salesforce classes in Pune not only strengthen your resume but also give you an edge in today’s competitive job market 
            by showcasing your ability to implement real-time business solutions using Salesforce technology.
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
            alt="Salesforce Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
