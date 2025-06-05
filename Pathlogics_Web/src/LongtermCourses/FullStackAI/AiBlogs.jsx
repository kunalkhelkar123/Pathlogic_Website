import React from 'react';
import moved from "../../assets/moved.png"
import { Link } from 'react-router-dom';

export default function AiBlogs() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-black mb-10 leading-tight">
        Join Pathlogics—Full Stack AI Course with 100% Placement Assistance
      </h2>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
            Join <strong>Pathlogics</strong> and dive into the world of artificial intelligence with a
            career-focused program designed for real-world impact. This comprehensive{" "}
            <strong>Full Stack AI Development course in Pune</strong> is tailored to equip learners
            with the expertise needed to build end-to-end AI solutions. The curriculum integrates
            foundational theory with real-world applications, ensuring a balanced learning experience.
            Students will gain hands-on skills in data handling, model building, training, and deployment.
            From data preprocessing to AI system integration, this course prepares you to manage the complete
            AI development lifecycle.
          </p>

          <Link to="/QuickEnquiry">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              Enroll Today!
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={moved}
            alt="Full Stack AI Course"
            className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
