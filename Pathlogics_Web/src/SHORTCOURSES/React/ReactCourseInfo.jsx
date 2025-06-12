import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ReactCourseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        React JS Course – Everything You Need to Succeed as a UI Developer
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is React JS?</h3>
            <p>
              React JS is a super popular JavaScript library developed by Facebook in 2013 and has quickly become one of the most widely used front-end libraries in the world. It is designed to help developers build fast, interactive, and user-friendly web interfaces.
              <br /><br />
              Instead of writing a ton of code from scratch, React lets you build reusable pieces called components that make development faster and more organized. One of the coolest things about React is how it manages data and updates only the parts of a web page that change, ensuring smoother performance and a better user experience. That’s why it’s the go-to tool for building single-page applications and modern websites.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Where is React JS Used?</h3>
            <p className="mb-2">
              React JS is used to build modern, scalable, and efficient front-end applications. You’ll find React powering:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Social media platforms (e.g., Facebook, Instagram)</li>
              <li>Video streaming apps (e.g., Netflix)</li>
              <li>E-commerce websites (e.g., Shopify, Flipkart)</li>
              <li>SaaS platforms and dashboards</li>
              <li>Portfolio websites and blogs</li>
              <li>Admin panels and CMS interfaces</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn React JS?</h3>
            <p className="mb-2">
              Learning React JS means you're learning how the web works today. With its reusable components and huge community support, React makes building user-friendly apps easier and more efficient.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>High demand in the job market</li>
              <li>Easy to learn with JavaScript knowledge</li>
              <li>Reusable components save development time</li>
              <li>Perfect for building responsive SPAs</li>
              <li>Strong community and ecosystem (React Router, Redux, Next.js, etc.)</li>
            </ul>
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

export default ReactCourseInfo;
