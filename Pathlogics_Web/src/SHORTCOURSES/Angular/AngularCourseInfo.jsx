import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const AngularCourseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        AngularJS Course – Build Powerful and Interactive Web Apps
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is AngularJS?</h3>
            <p>
              AngularJS is a popular JavaScript framework created by Google to help developers build fast and interactive websites. Instead of writing tons of code from scratch, AngularJS gives you ready-to-use features that make building web apps much easier.
              <br /><br />
              Whether it’s creating dynamic pages, reusing components, or syncing your data in real time, AngularJS takes care of the heavy lifting so you can focus on building cool, user-friendly apps that actually work smoothly.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn AngularJS?</h3>
            <p className="mb-2">
              If you’re thinking about a career in web development, AngularJS is a great skill to have in your toolkit. It’s trusted by companies around the world to build fast, modern web apps and it’s beginner-friendly too.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Perfect for aspiring frontend or full-stack developers</li>
              <li>Learn real-world skills by building actual projects</li>
              <li>Boosts your resume with job-ready tech experience</li>
              <li>Strong foundation in modern app development</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">AngularJS vs. Angular – What’s the Difference?</h3>
            <p>
              It’s easy to get confused between AngularJS and Angular — they sound almost the same! But here’s the deal: AngularJS is the original version, built using JavaScript. Angular (2 and above) is the newer version, built with TypeScript.
              <br /><br />
              While they work a bit differently, learning AngularJS first gives you a strong foundation. It helps you understand the core concepts, so moving to modern Angular later becomes way easier.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/fullstack")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default AngularCourseInfo;
