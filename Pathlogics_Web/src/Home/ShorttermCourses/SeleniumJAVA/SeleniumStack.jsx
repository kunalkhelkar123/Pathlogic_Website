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
       Selenium with Java – Everything You Need to Launch Your Career in Test Automation
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Selenium?</h3>
            <p>
             Selenium is a powerful, open-source tool that helps automate web applications across different browsers and platforms. It’s a favorite among software testers because it saves time, reduces manual effort, and ensures more accurate results.

What makes Selenium even more flexible is that you can write test scripts in popular programming languages like Java, Python, or C#. Among these, Java is the most commonly used, making Selenium training with Java a great choice for beginners and professionals alike.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Selenium with Java?</h3>
            <p>
              Selenium with Java is one of the most trusted and widely used combinations in the world of automation testing. Selenium, being an open-source tool, helps testers automate tasks and interactions on web browsers, saving time and reducing errors.
When paired with Java, a powerful and easy-to-learn programming language, Selenium becomes even more effective. This duo allows testers to build strong, flexible, and scalable automation frameworks that work across different browsers and platforms.
</p>
          </div>
        </div>

        {/* <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Future Demand of Software Testing</h3>
            <p>
              With the world going digital, the demand for reliable, bug-free software is higher than ever. From startups to tech giants, every company needs skilled testers to ensure quality. Automation testing is also booming, making testers even more valuable. In the coming years, software testing will only grow, offering stable jobs, remote opportunities, and great pay.
            </p>
          </div>
        </div> */}
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
