import React from 'react';
import abc from '../../../../src/assets/salesforcetraingng.jpg';

export default function Blogs() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
       Pathlogics Devops with AWS Training Course In Pune 
          <br className="hidden sm:block" />
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            Syllabus, Features & Highlights
          </span> */}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
         Looking to start a future-proof tech career? Pathlogics' AWS DevOps Course in Pune offers you the perfect blend of hands-on training, real-time cloud projects, and expert mentorship. This  course is built to help you grow, no matter where you’re starting from. Whether you're just getting into tech or already working in the field, our beginner-friendly approach makes learning AWS and DevOps feel easy and exciting.
You'll get hands-on with real-time cloud projects, learn automation, CI/CD pipelines, and infrastructure as code, all with the guidance of certified trainers who truly care about your progress. We also prepare you for real job roles through weekly mock interviews, resume building, and full placement support.
By the end, you won’t just have an industry-recognized Certification, you’ll have the skills and confidence to take on roles like DevOps Engineer, Cloud Architect, and more. Let’s build your cloud journey together.


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
