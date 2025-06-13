import React from 'react';
import { MdCloudDone } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const DotNetInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        DevOps + AWS = Your Shortcut to High-Paying Cloud Jobs
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdCloudDone className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why DevOps with AWS?</h3>
            <p>
              Combining DevOps practices with Amazon Web Services (AWS) empowers organizations to deliver applications faster, with better reliability, scalability, and security. Companies across industries are adopting DevOps and cloud technologies, driving a huge demand for skilled professionals.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">High-Paying Career Opportunities</h3>
            <p>
              Mastering DevOps tools (like Docker, Kubernetes, Jenkins, Terraform, Ansible) along with AWS cloud services opens doors to roles such as DevOps Engineer, Cloud Architect, Site Reliability Engineer, and Cloud Consultant — all offering excellent salary packages.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Hands-On Real-World Projects</h3>
            <p>
              This course includes practical, project-based learning. You'll work on real-world cloud deployment scenarios, CI/CD pipelines, infrastructure automation, monitoring solutions, and much more — making you job-ready from day one.
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
