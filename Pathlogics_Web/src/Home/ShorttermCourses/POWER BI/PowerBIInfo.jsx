import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const PowerBIInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Power BI Training: Everything You Need to Become a Data Visualization Pro
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Power BI?</h3>
            <p>
              Microsoft Power BI is a powerful business intelligence tool that transforms raw data into actionable insights.
              It allows users to create interactive dashboards, detailed reports, and data visualizations to support data-driven decision-making.
              Whether you're handling large datasets or complex statistics, Power BI simplifies the process by making data both understandable and visually engaging.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Should You Learn Power BI?</h3>
            <p className="mb-2">
              Power BI is highly sought after across industries that rely on data for informed decision-making. By learning Power BI, you unlock job roles in:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Data analysis and business intelligence</li>
              <li>Marketing and financial reporting</li>
              <li>Operations and strategic planning</li>
            </ul>
            <p className="mt-2">
              Power BI enables the creation of engaging dashboards and data stories, helping users interpret data quickly and effectively.
              Its real-time data access and user-friendly interface make it ideal for both beginners and professionals.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Make Smarter Decisions With Data</h3>
            <p>
              Power BI gives you the tools to turn data into compelling visual stories. With drag-and-drop features, real-time updates,
              and customizable dashboards, Power BI empowers professionals to gain and present insights that drive success in any business.
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

export default PowerBIInfo;
