import React from 'react';
import abc from '../../../src/assets/salesforcetraingng.jpg';

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Get Certified with Pathlogics Dot Net Course in Pune
          <br className="hidden sm:block" />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Syllabus, Features & Highlights
          </span> */}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
             Pathlogics offers the best Dot Net course in Pune, providing an in-depth curriculum designed to teach you how to build high-performing Android and iOS apps using a single codebase.The course is beginner-friendly yet aligned with industry demands, covering essential tools like React Navigation, Redux, Firebase, and Expo. You'll gain hands-on experience through live projects, real-world problem-solving, and practical coding sessions. 
Pathlogics provides job placement assistance, including resume building, mock interviews, and expert guidance to help you transition into a full-time developer role. Your career prospects in the highly desired field of mobile app development will be enhanced by the industry-recognized certification you will receive upon completion. 
This course offers you the skills and confidence to be successful whether your goal is to work as a Full Stack Developer, Mobile App Developer, or React Native Developer.starts now!
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
