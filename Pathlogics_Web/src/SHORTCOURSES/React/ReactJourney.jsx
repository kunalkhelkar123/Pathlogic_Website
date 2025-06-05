import React, { useRef, useEffect, useState } from 'react';
import foldimg from "../../assets/foldimg.jpg";
import { Link } from 'react-router-dom';

export default function ReactJourney() {
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
        Pathologics React JS Training In Pune - From Basics to Advanced
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <strong>Pathlogics</strong> offers a comprehensive React JS course in Pune, designed for both beginners
            and those looking to level up their web development skills. The course covers everything
            from the basics to advanced topics, with hands-on coding, real-world projects, and personalized
            mentorship from industry professionals.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Students will gain expertise in components, hooks, state management, and routing, and will
            build live projects that prepare them for a career in front-end development. The course also
            provides job placement assistance, resume building, and mock interviews to ensure students are
            ready for the job market.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            With a certification of completion, Pathlogics prepares you with the skills to become a desired
            React developer in today's tech industry.
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
            src={foldimg}
            alt="React JS Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
