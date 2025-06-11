import React from 'react';
import abc from '../../../../src/assets/salesforcetraingng.jpg';

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
        Pathlogics: Software Testing Training and Placement Support

          <br className="hidden sm:block" />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Syllabus, Features & Highlights
          </span> */}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
            Start Your IT Career with Pathlogics! Looking to enter the IT world or switch careers? Our Software Testing Course in Pune is designed just for you. whether you're a complete beginner or ready for a fresh start. You'll learn both manual and automation testing using in-demand tools like Selenium, Appium, and Jenkins, all through practical, real-world projects.
We offer flexible learning options. Join us online or in the classroom, whatever suits you best. Get personalized guidance with live doubt sessions, mock interviews, and 1-on-1 mentorship to make you job-ready. We’ll help you build a strong resume and connect you with real job opportunities.
By the end, you’ll earn an industry-recognized certification and be ready for roles in QA, performance testing, automation, and more. Whether you're aiming for job security, career growth, or remote work, software testing can take you there. Have questions? Talk to our advisor or enroll today!
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
