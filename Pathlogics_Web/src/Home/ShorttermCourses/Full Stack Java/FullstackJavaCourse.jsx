import React from 'react';
import abc from "../../../assets/salesforcetraingng.jpg"
export default function FullstackJavaCourse() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
          Pathlogics Full Stack Java Course in Pune with Placement Assistance
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Pathlogics offers a comprehensive Full Stack Java Developer Course in Pune with certification and placement assistance. This job-oriented program is ideal for beginners and professionals aiming to master both front-end and back-end development using Java, Spring Boot, MySQL, and Hibernate. The course includes real-time projects, personal mentorship, mock interviews, and live doubt-solving sessions. 

Students gain hands-on experience in web application development, covering technologies like HTML, CSS, JavaScript, and RESTful APIs. The curriculum is tailored to meet industry demands, making graduates job-ready for roles such as Full Stack Developer, Backend Developer, and API Developer. Join now to learn full stack Java in Pune and accelerate your software development career.

            </p>

            <a
              href="/contact"
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
                alt="Pathlogics Full Stack Java Training"
                className="w-[450px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
