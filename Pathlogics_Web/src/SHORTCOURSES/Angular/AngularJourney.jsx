import React, { useRef, useEffect, useState } from 'react';
import htmlimg from "../../assets/html.jpg";
import { Link } from 'react-router-dom';

export default function AngularJourney() {
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState("auto");

  useEffect(() => {
    if (descRef.current) {
      setDescHeight(`${descRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
      {/* Title */}
      <h2 className="text-[34px] font-bold text-center text-black mb-10">
        Pathologics Angular JS Training in Pune – Modules, Tools & Career Skills
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <strong>Pathlogics</strong> offers the best AngularJS course in Pune, designed for beginners and professionals
            who want to master this popular JavaScript framework. Live coding sessions, hands-on training with
            real-world projects, and a focus on in-demand skills like components, directives, routing, and services
            are all included in the course.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Weekly mock interviews, one-on-one guidance, and career assistance like resume building and job placement
            help students gain real-world experience. Pathlogics also covers essential tools like Karma, UI-Router,
            Restangular, and AngularFire to streamline development.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            This course prepares you for success in the growing web development companies with an industry-recognized
            certification and excellent job opportunities as a Frontend Developer, UI/UX Developer, and Full Stack Developer.
            Enroll Now!
          </p>

          <Link to="/contact">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              Know More
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={htmlimg}
            alt="Angular JS Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
