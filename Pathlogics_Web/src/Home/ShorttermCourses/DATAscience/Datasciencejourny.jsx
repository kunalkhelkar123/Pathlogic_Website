import React from 'react';
import abc from '../../../../src/assets/salesforcetraingng.jpg';

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
       Pathlogics Data Science with Python Training in Pune
          <br className="hidden sm:block" />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Syllabus, Features & Highlights
          </span> */}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
          Pathlogics offers a comprehensive Data Science with Python Course in Pune designed for beginners and professionals aiming to build a strong foundation in data analytics, machine learning, and Python programming. The course includes hands-on projects, weekly mock interviews, one-on-one mentorship, and placement support. The course comes with weekly mock interviews, resume help, and placement support to get you job-ready. With an industry-aligned curriculum, this program helps you become job-ready for roles like data scientist, analyst, ML engineer, and BI analyst. 

Our industry-recognized Data Science Certification doesn’t just add value to your CV, it proves you're job-ready. We also celebrate your achievement with a certification ceremony because your journey matters to us. Flexible batches, internship options, and expert faculty make it a top choice for aspiring data professionals. Enroll now and start your data journey with Pathlogics!


</p>

            <a
              href="/QuickEnquiry"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Know More
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500">
              <img
                src={abc}
                alt="Pathlogics Core Java Training"
                className="w-[450px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
