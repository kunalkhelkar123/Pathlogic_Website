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
        Software Testing Training in Pune – Everything You Need to Know
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Software Testing?</h3>
            <p>
              Software testing is the process of checking if an app or piece of software works as wanted and identifying bugs before customers do. It's similar to digital product quality control. Software testers ensure that a website, mobile app, or big business system works correctly, looks attractive, and doesn't crash. Even great software might cause serious issues if it isn't tested.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Should You Learn Software Testing?</h3>
            <p>
              If you're someone who enjoys solving problems, paying attention to details, and working with tech, software testing is a great career path. It's beginner-friendly and doesn't require hardcore coding knowledge to start. Testers play a crucial role in every development team, which means you’ll always have a seat at the table. Learning testing opens the door to various IT roles and fast career growth.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Future Demand of Software Testing</h3>
            <p>
              With the world going digital, the demand for reliable, bug-free software is higher than ever. From startups to tech giants, every company needs skilled testers to ensure quality. Automation testing is also booming, making testers even more valuable. In the coming years, software testing will only grow, offering stable jobs, remote opportunities, and great pay.
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
