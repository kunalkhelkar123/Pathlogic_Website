import React, { useRef, useEffect, useState } from 'react';
import dotnetImg from "../../assets/dotnet1.jpg"; // Make sure the filename matches
import { Link } from 'react-router-dom';

export default function DotNetJourney() {
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState("auto");

  // Match image height to the height of the description section
  useEffect(() => {
    if (descRef.current) {
      setDescHeight(`${descRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
      {/* Title */}
      <h2 className="text-[34px] font-bold text-center text-black mb-10">
        Pathlogics: Dot NET with Angular Certification Course in Pune
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <strong>Pathlogics</strong> offers a hands-on Dot NET with Angular Certification Course in Pune,
            designed to turn beginners into job-ready full stack developers. You’ll learn to build complete,
            real-world web apps using ASP.NET Core, C#, Angular, and SQL Server, with expert-led guidance
            every step of the way.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            From live coding sessions to project-based learning, mock interviews, and placement support,
            we've got your journey covered. Whether you're a fresher or a career switcher, this beginner-friendly
            program will boost your confidence and skills.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            You’ll work with essential tools like Postman, Git, and Visual Studio and earn a recognized certification.
            It’s not just a course; it’s a launchpad to a rewarding career in software development.
          </p>

          <Link to="/contact">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              Know More
            </button>
          </Link>
        </div>

        {/* Image Section with matched height */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={dotnetImg}
            alt="Dot NET with Angular Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
