import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DigitalMarketingInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Digital Marketing Mastery: From Basics to Advanced Growth Tactics
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Digital Marketing?</h3>
            <p>
              Digital marketing is all about connecting with people where they spend most of their time—online.
              Whether it’s through search engines, social media, emails, or websites, it helps businesses reach the right audience
              at the right time using data-driven strategies and creative communication.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Digital Marketing?</h3>
            <p className="mb-2">
              In today’s digital world, marketing isn’t just for big brands—it’s for everyone.
              Whether you're a student exploring career options, a job seeker trying to stand out,
              a freelancer looking for clients, or a business owner wanting more visibility, digital marketing opens up new opportunities.
            </p>
            <p>
              From running paid ads to ranking on Google, it offers a unique blend of creativity, analysis, and strategy that’s in high demand.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What You'll Learn in this Course</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>SEO (Search Engine Optimization):</strong> Improve website visibility on Google</li>
              <li><strong>SEM (Search Engine Marketing):</strong> Run effective Google Ads campaigns</li>
              <li><strong>Social Media Marketing:</strong> Build brand presence on Instagram, Facebook, LinkedIn</li>
              <li><strong>Content Marketing:</strong> Create content that engages and converts</li>
              <li><strong>Email Marketing:</strong> Design campaigns that build trust and drive action</li>
              <li><strong>Analytics & Tools:</strong> Use tools like Google Analytics, Meta Business Suite, Canva, and more</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/digital-marketing")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingInfo;
