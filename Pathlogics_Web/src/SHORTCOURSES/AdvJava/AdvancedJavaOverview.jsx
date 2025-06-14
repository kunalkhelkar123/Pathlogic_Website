import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const AdvancedJavaOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Understanding Advanced Java & Its Career Impact
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              What is Advanced Java and Why Should You Learn It?
            </h3>
            <p>
              Advanced Java refers to the next level of Java programming after Core Java. It focuses on building web-based, enterprise-level applications using technologies like Servlets, JSP, JDBC, and frameworks like Spring and Hibernate. It’s widely used for creating powerful backend systems and dynamic websites.
              <br /><br />
              Learning Advanced Java helps you build real-world applications, improves your job prospects, and opens doors to roles in software development, web development, and enterprise tech. If you already know Core Java, this is your next step toward becoming a full-fledged Java developer.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Scope of Advanced Java?</h3>
            <p>
              The Scope of Advanced Java is vast and growing! It’s widely used in enterprise-level applications, especially for building dynamic web apps, APIs, and backend systems. With frameworks like Spring, Hibernate, and Struts, developers can build scalable and secure solutions.
              <br /><br />
              Advanced Java skills are in high demand in sectors like banking, e-commerce, healthcare, and IT services. It also forms the backbone of many Android and cloud-based applications. So if you're aiming for a career in software development, mastering Advanced Java gives you a strong edge.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Career-Oriented Training</h3>
            <p>
              Students work on hands-on projects, attend mock interviews, and receive personalized career support including one-on-one doubt-solving sessions and placement assistance. This course prepares you to confidently face technical interviews and step into the software development world as a job-ready Java developer.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/fullstack-java-development")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default AdvancedJavaOverview;
