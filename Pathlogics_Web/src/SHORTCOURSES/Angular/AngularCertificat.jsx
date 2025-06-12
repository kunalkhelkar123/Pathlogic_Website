import React from 'react';
import certificate from "../../assets/certificate.jpg";

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Industry Recognized AngularJS Certification
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Our AngularJS Certification Course is designed to help you become a confident and job-ready frontend developer. From the basics of JavaScript to building dynamic, real-world single-page applications, you’ll learn everything step by step.
              <br /><br />
              Get hands-on with tools like AngularJS UI-Router, Restangular, Angular Fire, and more while mastering concepts like components, directives, services, and routing.
              <br /><br />
              At the end of every batch, we host a special certification ceremony. It’s more than just receiving a certificate — it’s that proud moment when your journey is recognized, your confidence gets a boost, and you officially step into the tech world as a future-ready AngularJS developer.
            </p>

            <a
              href="/Contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Inquire Now
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img
                src={certificate}
                alt="AngularJS Certification Training"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
