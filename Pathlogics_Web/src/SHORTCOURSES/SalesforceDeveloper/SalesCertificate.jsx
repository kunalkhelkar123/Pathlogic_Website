import React from 'react';
import certificate from "../../assets/certificate.jpg";

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Industry Recognized React Certification Course
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Get certified in React JS and let your skills speak louder than words! This isn’t just another piece of paper — it’s proof that you can build modern, real-world web applications using React and the most in-demand front-end tools in the industry.
              <br /><br />
              Our React JS Course with Certificate is recognized by leading IT companies and startups, giving your resume the edge it deserves. At the end of every batch, we host a special certification ceremony. It’s more than just receiving a certificate — it’s that proud moment when your journey is recognized, your confidence gets a boost, and you officially step into the tech world as a future-ready React developer.
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
                alt="React JS Certification Training"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
