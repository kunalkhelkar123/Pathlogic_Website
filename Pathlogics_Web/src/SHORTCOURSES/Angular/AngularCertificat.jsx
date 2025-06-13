import React from "react";
import certificate from "../../assets/certificate.jpg";
import { Link } from "react-router-dom";

export default function AngularCertificate() {
  return (
    <div className="mt-0 pt-0 px-0 sm:px-0 lg:px-0 pb-4">
      <div className="flex flex-col md:flex-row items-center bg-white p-0 md:p-0 rounded-none gap-2">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-16">
          <p className="text-gray-700 text-sm font-semibold mt-0">
            Pathlogics Certificate
          </p>
          <h3 className="text-2xl font-extrabold text-black mt-2">
            Industry Recognized Angular.JS Certification
          </h3>
          <p className="text-gray-800 mt-4 text-base sm:text-lg leading-relaxed">
            Our AngularJS Certification Course is designed to help you become a confident and job-ready frontend developer. 
            From the basics of JavaScript to building dynamic, real-world single-page applications, you’ll learn everything step by step.
            <br /><br />
            Get hands-on with tools like AngularJS UI-Router, Restangular, Angular Fire, and more while mastering concepts like components, directives, services, and routing.
            <br /><br />
            At the end of every batch, we host a special certification ceremony. It’s more than just receiving a certificate, 
            it’s that proud moment when your journey is recognized, your confidence gets a boost, and you officially step into the tech world as a future-ready AngularJS developer.
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
            alt="AngularJS Certificate Preview"
            className="w-full max-w-md border-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
