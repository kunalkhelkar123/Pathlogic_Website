import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DotNetAngularInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        .NET with Angular: Power Your Career with Two Industry-Favorite Technologies
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Dot Net with Angular?</h3>
            <p>
              Dot Net with Angular is a powerful combination used to build dynamic, scalable, and secure web applications.
              <br />
              <strong>.NET (ASP.NET Core)</strong> is a popular backend framework by Microsoft used for developing APIs and web services using C#.
              <br />
              <strong>Angular</strong> is a front-end framework by Google used to build responsive and interactive single-page applications (SPAs).
              <br />
              Together, they allow developers to build complete web applications, from a robust backend to a modern, user-friendly interface.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Dot Net with Angular?</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>High Demand in the IT Industry:</strong> Companies prefer developers who can work on both frontend and backend. Knowledge of .NET with Angular opens doors to many job roles.</li>
              <li><strong>Strong Backend + Dynamic Frontend:</strong> .NET provides excellent security and performance for the backend, while Angular ensures a seamless and fast user experience.</li>
              <li><strong>Career-Focused Skills:</strong> Learning this stack equips you with real-world development skills required by software companies, especially for web and enterprise applications.</li>
              <li><strong>Microsoft + Google Technologies:</strong> Get trained in two of the most trusted technologies in the world, supported by a huge community and regular updates.</li>
              <li><strong>Easy to Learn for Beginners:</strong> With proper guidance, even freshers or non-IT graduates can pick up .NET and Angular quickly and build professional-level applications.</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Build Real-World Projects</h3>
            <p>
              During the course, you’ll not only understand the concepts but also work on real-world applications that integrate .NET APIs with Angular frontends, giving you practical job-ready experience.
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

export default DotNetAngularInfo;
