import React from 'react';
import certificate from "../../../assets/certificate.jpg";

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Industry Recognized Certification For Manual Testing
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Upon successful completion of the Manual Testing Training at Pathlogics, whether through online or classroom sessions, you will receive an industry-recognized certification.
              <br /><br />
              We celebrate your achievement with a certification distribution ceremony at the end of each batch, allowing you to showcase your expertise in software testing, test case execution, and defect tracking.
              <br /><br />
              This certification validates your skills as a Certified Manual Tester, enhancing your resume and boosting your career prospects in the software testing industry.
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
                alt="Manual Testing Certification"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
