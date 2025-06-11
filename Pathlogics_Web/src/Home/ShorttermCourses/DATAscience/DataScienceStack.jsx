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
        Data Science with Python: From Basics to Real-World Projects
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Data Science With Python?</h3>
            <p>
              Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. Python, a versatile programming language, plays a critical role in data science due to its simplicity, extensive libraries, and ability to handle large datasets efficiently. Combining Python with data science techniques enables you to solve complex problems across industries such as finance, healthcare, marketing, and technology.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Python for Data Science?</h3>
            <p className="mb-2">
              Python has become the go-to language for data science for many reasons:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Ease of Use:</strong> Python is beginner-friendly, allowing you to focus on solving data problems without worrying about complicated syntax.</li>
              <li><strong>Comprehensive Libraries:</strong> Python offers powerful libraries such as Pandas, NumPy, SciPy, Scikit-learn, Matplotlib, and Seaborn that simplify data manipulation, analysis, and visualization.</li>
              <li><strong>Versatility:</strong> From data cleaning and exploratory analysis to machine learning and artificial intelligence, Python covers every aspect of the data science workflow.</li>
              <li><strong>Community Support:</strong> Python has a vast community of data scientists and developers contributing to tutorials, open-source libraries, and solutions, making it easier to learn and grow.</li>
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
              Throughout the course, you'll not only learn theoretical concepts but also apply your knowledge to real-world datasets. Projects will cover topics such as customer segmentation, sales forecasting, fraud detection, and predictive modeling—helping you gain practical, job-ready skills.
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
