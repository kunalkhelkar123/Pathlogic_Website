import React, { useRef, useEffect, useState } from 'react';
import nodeimg from "../../assets/nodeimg.jpg";
import { Link } from 'react-router-dom';

export default function NodeJourney() {
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
        Pathlogics Node JS Training in Pune: Master Backend Tools & Real Projects
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Pathlogics’ Node.js course in Pune is designed to help you master backend development with hands-on experience. Whether you're a Node.js beginner or looking to enhance your skills, this course teaches you the useful tools you need to create scalable, real-time apps using technologies like Express.js, MongoDB, and Socket.IO through practical projects that prepare you proficient in the job market.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            You'll explore building chat apps, web servers, and APIs. We offer a job-focused, beginner-friendly program that includes resume support, mock interviews, and mentorship. You may proudly add your industry-recognized Node.js certification to your resume after completion.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            With Pathlogics, you’re not just learning code, you're preparing for a successful career in web development. Join us today and take the first step toward becoming a skilled backend developer!
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
            src={nodeimg}
            alt="Node JS Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
