import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DotNetInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Dot Net Core Training in Pune – Everything You Need to Know
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Dot Net Core?</h3>
            <p>
              Dot Net Core is a modern, open-source development framework from Microsoft that lets you build high-performance apps across multiple platforms, whether it’s web, desktop, mobile, cloud, or even IoT.
              What makes it stand out is its flexibility—you can develop and run your applications on Windows, macOS, or Linux. It’s fast, secure, and trusted by companies worldwide, which is why it’s become such a popular choice among developers today.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Dot Net Core?</h3>
            <p>
              If you're looking to step into the world of software development, Dot Net Core is a smart place to start.
              It’s widely used by startups and top MNCs to build everything from web apps to enterprise-level software.
              With its growing demand, learning Dot Net Core not only gives you strong technical skills but also opens doors to exciting job opportunities in the tech industry.
              Whether you're a fresher or someone upgrading your skills, this is a technology worth mastering.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default DotNetInfo;
