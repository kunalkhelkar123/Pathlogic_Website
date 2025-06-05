import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fullstackImg from "../../assets/fullstack.jpg"; // replace with your actual image path

export default function AiBlogs() {
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState("auto");

  // Sync image height with the height of description
  useEffect(() => {
    if (descRef.current) {
      setDescHeight(`${descRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* Centered Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mx-auto mb-10">
        Full Stack AI Course with 100% Placement Assistance
      </h2>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Description */}
        <div ref={descRef} className="md:w-1/2">
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Join <strong>Pathlogics</strong> and dive into the world of artificial intelligence with a
            career-focused program designed for real-world impact. This comprehensive{" "}
            <Link to="/full-stack-development" className="text-blue-600 underline hover:text-blue-800">
              Full Stack AI Development course in Pune
            </Link>{" "}
            is tailored to equip learners with the expertise needed to build end-to-end AI solutions.
            The curriculum integrates foundational theory with real-world applications, ensuring a balanced
            learning experience. Students will gain hands-on skills in data handling, model building,
            training, and deployment. From data preprocessing to AI system integration, this course prepares
            you to manage the complete AI development lifecycle.
          </p>
          <Link to="/QuickEnquiry">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
              Enroll Today!
            </button>
          </Link>
        </div>

        {/* Right Image with matched height */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={fullstackImg}
            alt="Full Stack AI Course"
            className="rounded-xl shadow-lg object-cover"
            style={{ width: "420px", height: descHeight }}
          />
        </div>
      </div>
    </div>
  );
}
