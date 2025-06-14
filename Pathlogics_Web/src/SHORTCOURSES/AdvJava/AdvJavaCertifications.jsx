import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function AdvJavaCertifications() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10 ">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-lg shadow-lg gap-8">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm font-semibold">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Advanced Java Certification Course
          </h3>
          <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
            Earn a professional Advanced Java certification that reflects not just your knowledge, but your ability to build real-world applications with cutting-edge tools. This certificate is widely recognized by top IT firms and startups, giving your resume the polish it needs to stand out in a competitive tech market.
            <br /><br />
            We believe success should be celebrated so at the end of every batch, we host a dedicated certificate distribution event. It's more than just receiving a document — it's a proud moment where your hard work is honored, your confidence is boosted, and your journey as a future-ready Java developer truly begins.
          </p>
          <Link to="/QuickEnquiry">
            <button className="mt-6 bg-orange-500 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2 hover:bg-lime-600 transition">
              Inquire Now →
            </button>
          </Link>
        </div>

        {/* Right Section: Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={certificate}
            alt="Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
