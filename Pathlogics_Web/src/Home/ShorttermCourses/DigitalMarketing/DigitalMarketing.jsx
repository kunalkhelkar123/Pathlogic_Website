import React, { useRef, useEffect, useState } from 'react';
import digitalImg from "../../../assets/digitalmarketing.jpg";
import { Link } from 'react-router-dom';

export default function DigitalMarketing() {
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
        Pathlogics: Best Institute for Digital Marketing
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Text Section */}
        <div ref={descRef} className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            <strong>Pathlogics</strong> offers the Best Digital Marketing Course in Pune, designed for students, job seekers,
            freelancers, and entrepreneurs. This industry-focused program includes 15+ certifications and hands-on training in
            SEO, SEM, social media marketing, content creation, email marketing, and more. With a practical curriculum,
            real-time projects, and expert mentorship, learners gain job-ready skills.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            The course also covers essential tools like Google Analytics, Meta Ads Manager, Mailchimp, Canva, and Google Ads.
            Resume building, mock interviews, and placement assistance are included. Whether you're switching careers or
            upskilling, this course provides in-demand digital marketing skills to thrive in today’s competitive landscape.
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
            src={digitalImg}
            alt="Digital Marketing Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ height: descHeight, width: "100%", maxWidth: "480px" }}
          />
        </div>
      </div>
    </div>
  );
}
