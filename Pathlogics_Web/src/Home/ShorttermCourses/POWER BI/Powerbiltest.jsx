import React, { useRef, useEffect, useState } from 'react';
import powerbipic from "../../../assets/powerbipic.jpg";
import { Link } from 'react-router-dom';

export default function Powerbiltest() {
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
        Pathlogics Power BI Certification Course In Pune - Training and Placement
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            At <strong>Pathlogics</strong>, we offer a comprehensive Microsoft Power BI course in Pune that equips you with the skills needed to thrive in data analysis and business intelligence. Whether you're a beginner or a professional looking to enhance your expertise, our 4-month program is designed for all levels. You’ll work on real-time projects, build interactive dashboards, participate in mock interviews, and receive personalized mentorship to ensure you're job-ready.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Our expert trainers will guide you through every aspect of Power BI, from data visualization and modeling to transforming complex data. After completing the course, exciting career opportunities await you, including roles like Data Analyst, BI Developer, and Power BI Consultant.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            You’ll earn an industry-recognized Power BI course certification, proudly awarded at our special ceremony. Ready to take the next step? Enroll today, and our team will be there to support you every step of the way!
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
            src={powerbipic}
            alt="Power BI Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
