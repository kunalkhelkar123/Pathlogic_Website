import React from 'react';
import abc from '../../../../src/assets/salesforcetraingng.jpg';

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
        Pathlogics Selenium Using Java Course In Pune - Your Automation Journey.
          <br className="hidden sm:block" />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Syllabus, Features & Highlights
          </span> */}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
           
Master Selenium Automation testing with Pathlogics’ Selenium with Java Course in Pune. Designed for beginners and professionals, this course offers hands-on training, real-world projects, and expert guidance to help you build a strong foundation in QA automation. Learn key Selenium components like WebDriver, IDE, Grid, and more, while writing scripts in Java, the most widely used language for automation. 

With mock interviews, personalized resume guidance, and dedicated placement support, our program is built to help you step confidently into the automation testing world. Gain practical experience, industry-relevant knowledge, and a recognized certification that sets you apart. At Pathlogics, we don’t just teach; we empower your entire career journey.
 

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
