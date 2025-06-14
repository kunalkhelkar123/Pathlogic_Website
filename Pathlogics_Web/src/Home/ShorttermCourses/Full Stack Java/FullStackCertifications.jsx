import React from "react";
import certificate from "../../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function FullStackCertifications() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-lg shadow-lg gap-8">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm font-semibold">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Full Stack Java Certification Course
          </h3>
          <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
            Upon successfully completing the Full Stack Java Developer Course at Pathlogics, whether through online or classroom training, you'll receive a certificate recognized by the industry. We celebrate your achievement with a certification distribution ceremony at the end of each batch, allowing you to proudly showcase your Full Stack Java Developer certification on your resume/CV.
            {/* <br /><br />
            This certification validates your expertise in Java, Spring Boot, front-end technologies, and database management, signaling your readiness to tackle real-world development challenges.
            <br /><br /> */}
            At Pathlogics, we celebrate every milestone of your journey toward becoming a Full Stack Java Developer. Our certification ceremony marks a special moment to acknowledge your growth and dedication. We are committed to supporting you every step of the way, helping you realize your potential and excel in the field of full-stack development!
          </p>
          <Link to="/Contact">
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
