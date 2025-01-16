import React from "react";
import { CodeBracketIcon, ServerIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";

const JavaFullStackOverview = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Java Full Stack Developer Course Overview
        </h2>
        <p className="mt-4 text-gray-600">
          Master the art of Full Stack Development with Java, covering frontend,
          backend, and database technologies. Become job-ready with hands-on
          training and real-world projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {/* Card 1 - Frontend */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
          <CodeBracketIcon className="w-16 h-16 text-orange-500 mx-auto" />
          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Frontend Development
          </h3>
          <p className="mt-4 text-gray-600">
            Learn HTML, CSS, JavaScript, React, and TailwindCSS to build
            interactive and responsive user interfaces.
          </p>
        </div>

        {/* Card 2 - Backend */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
          <ServerIcon className="w-16 h-16 text-blue-500 mx-auto" />
          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Backend Development
          </h3>
          <p className="mt-4 text-gray-600">
            Master Java, Spring Boot, REST APIs, and microservices to create
            robust and scalable backend solutions.
          </p>
        </div>

        {/* Card 3 - Database */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
          <ArchiveBoxIcon className="w-16 h-16 text-green-500 mx-auto" />
          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Database Management
          </h3>
          <p className="mt-4 text-gray-600">
            Learn SQL, PostgreSQL, and MongoDB to efficiently manage and
            organize data for modern applications.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-600">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default JavaFullStackOverview;
