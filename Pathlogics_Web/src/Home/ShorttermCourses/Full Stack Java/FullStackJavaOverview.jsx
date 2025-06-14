import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const FullStackJavaOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Learn Java Full Stack: Frontend, Backend & Everything In Between
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              What is Full Stack Java?
            </h3>
            <p>
              Full Stack Java is the art of developing both the front-end and back-end of a web application using Java and other technologies. It means you can build everything from the user interface that people interact with to the server-side code that powers the app.
              <br /><br />
              In full-stack Java development, Java is used to handle the logic, data, and server-side processes, while tools like HTML, CSS, and JavaScript shape the user experience. It's a skill set that blends creativity and technical expertise, offering endless possibilities in web development.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Why Learn Full-Stack Java Development?
            </h3>
            <p>
              Full Stack Java developers are in high demand as businesses continue to shift online. With a versatile skill set, you’ll be able to handle everything from building user interfaces to managing server-side operations, making you a valuable asset to any team.
              <br /><br />
              Java, a proven and reliable language, combined with modern tools, ensures that your skills remain relevant in an ever-changing tech world. Also, this expertise opens up endless career opportunities across industries like e-commerce, fintech, and healthcare, all while offering strong earning potential.
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
              This course goes beyond just learning—students work on hands-on projects, attend mock interviews, and receive personalized support through one-on-one doubt-solving sessions and placement assistance. It's the ultimate preparation to confidently step into a full-stack development role.
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

export default FullStackJavaOverview;
