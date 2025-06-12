import React from 'react';
import certificate from "../../assets/certificate.jpg";

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Industry Recognized Dot NET with Angular Certification
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Upon successful completion of the Dot Net with Angular Course at Pathlogics, you’ll be awarded an industry-recognized certification that showcases your ability to build real-world, full-featured web applications. This certification highlights your command over both .NET and Angular, making you stand out as a job-ready developer.
              <br /><br />
              It's more than just a piece of paper — it’s a mark of your hard work, practical skills, and career readiness. We celebrate your achievement with a certification ceremony, giving you a moment to shine and network with fellow learners.
              <br /><br />
              This credential adds real value to your resume and shows employers you're ready to contribute from day one.
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
                alt="Dot NET with Angular Certification"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
