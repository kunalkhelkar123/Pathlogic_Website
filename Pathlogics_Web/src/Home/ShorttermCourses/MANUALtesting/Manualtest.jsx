import React, { useRef, useEffect, useState } from 'react';
import manualImg from "../../../assets/Manualpic.jpg";
import { Link } from 'react-router-dom';

export default function Manualtest() {
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
        Pathlogics: Manual Testing Course in Pune with Placement Assistance
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <strong>Pathlogics</strong> offers the best Manual Testing Training in Pune with certification and 100% placement assistance.
            This beginner-friendly course covers core testing fundamentals, real-world scenarios, bug tracking, and test case writing.
            Learners benefit from hands-on projects, expert mentorship, mock interviews, and live doubt-solving sessions.
            The training is ideal for those aiming to build a career as a QA Engineer, Test Analyst, or Mobile App Tester.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Industry-recognized certification boosts your resume and career prospects.
            The course spans 4 months with both online and classroom options.
            With rising demand for manual testing across industries, now is the right time to enroll and launch your career in software testing.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Flexible batch timings, affordable fees, and career support make Pathlogics the top choice for manual testing training in Pune.
            Talk to our advisors today and take the first step toward becoming a Certified Manual Tester.
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
            src={manualImg}
            alt="Manual Testing Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
