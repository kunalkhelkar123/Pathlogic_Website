import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ManualTestingInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Manual Testing Course: Your First Step Into the World of Quality Assurance
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Manual Testing?</h3>
            <p>
              Manual testing is a process where software applications are tested manually by a tester without the use of automated tools.
              Testers execute test cases based on requirements and report bugs or issues in the system.
              It involves validating the software’s functionality, usability, and performance from a user’s point of view.
              Manual testing ensures that the application behaves as expected in real-world usage, especially during the early stages of development or when rapid changes occur.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is the Importance of Manual Testing?</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Detects bugs that automation may miss</li>
              <li>Ideal for exploratory and usability testing</li>
              <li>Validates real-world user scenarios</li>
              <li>Offers flexibility and human intuition in QA</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Growing Demand of Manual Testing</h3>
            <p>
              The demand for manual testing continues to grow due to its critical role in ensuring a high-quality user experience.
              While automation handles repetitive tasks, manual testing excels in verifying UI/UX, performing exploratory tests, and managing complex test scenarios.
              Industries like healthcare, finance, and e-commerce rely heavily on manual testers to ensure their software products meet quality standards before release.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/manualtesting")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default ManualTestingInfo;
