import React, { useRef, useEffect, useState } from 'react';
import salesforceImg from "../../assets/salesforce.jpg";
import { Link } from 'react-router-dom';

export default function SaleTwo() {
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
        Pathlogics: Best Salesforce Training Institute in Pune
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Start your Salesforce career with <strong>Pathlogics'</strong> Salesforce course in Pune, the best Salesforce training institute with certification and placement support.
            Our industry-oriented course covers Salesforce Admin, Apex programming, Lightning components, and real-world projects, designed to prepare you for high-demand roles in CRM development.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            With weekly mock interviews, personalized mentorship, and hands-on training, you'll gain the skills to excel in Salesforce administration and development.
            Benefit from flexible fee structures, certification, and career guidance.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Join today and start your journey toward becoming a certified Salesforce professional with Pathlogics.
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
            src={salesforceImg}
            alt="Salesforce Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
