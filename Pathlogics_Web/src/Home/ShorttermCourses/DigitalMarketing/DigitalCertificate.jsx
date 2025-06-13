import React from "react";
import certificate from "../../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function DigitalCertificate() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized 15+ Certification in Digital Marketing
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Master the world of online marketing with Pathlogics’ comprehensive Digital Marketing Course. 
            Upon completion, you'll earn **15+ industry-recognized certifications** from leading platforms like Google, HubSpot, and Meta. 
            These certifications validate your expertise in SEO, SEM, social media marketing, email marketing, analytics, and much more.
            <br /><br />
            Each batch concludes with a special certification ceremony, celebrating your dedication and achievements. 
            These globally recognized credentials not only enhance your resume but also prove your ability to strategize, execute, 
            and manage real-time digital campaigns — making you a job-ready digital marketing expert from day one.
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
            alt="Digital Marketing Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
