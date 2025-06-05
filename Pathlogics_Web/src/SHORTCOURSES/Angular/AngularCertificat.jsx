import React from "react";
import { Link } from "react-router-dom";
import certificateImg from "../../assets/certificate.jpg"; 

export default function AngularCertificat() {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <div className="md:order-2 flex-1 pl-6 md:pl-12">
          <img
            src={certificateImg}
            alt="AngularJS Certificate"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

    
        <div className="md:order-1 flex-1 text-left pr-6 md:pr-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Industry Recognized Angular.JS Certification
          </h2>
          <p className="text-gray-600 mb-4">
            Our AngularJS Certification Course is designed to help you become a confident and job-ready frontend developer. 
            From the basics of JavaScript to building dynamic, real-world single-page applications, you’ll learn everything step by step.
          </p>
          <p className="text-gray-600 mb-4">
            Get hands-on with tools like AngularJS UI-Router, Restangular, Angular Fire, and more while mastering concepts like components, directives, services, and routing.
          </p>
          <p className="text-gray-600 mb-6">
            At the end of every batch, we host a special certification ceremony. It’s more than just receiving a certificate — 
            it’s that proud moment when your journey is recognized, your confidence gets a boost, and you officially step into the tech world 
            as a future-ready AngularJS developer.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
