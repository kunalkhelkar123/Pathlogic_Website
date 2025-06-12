import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const SalesforceInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Salesforce Development Course: Everything You Need to Build on the Cloud
      </h2>

      <div className="space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <MdComputer className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">What is Salesforce?</h3>
            <p>
              Salesforce is the world’s leading Customer Relationship Management (CRM) platform, empowering businesses to build stronger
              connections with their customers. Trusted by top companies globally, Salesforce helps manage sales, marketing, service,
              and customer interactions in a seamless, cloud-based environment. From small startups to multinational corporations,
              Salesforce revolutionizes how companies engage and retain customers.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <FiTrendingUp className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Why Learn Salesforce?</h3>
            <p className="mb-2">
              As businesses embrace digital transformation, Salesforce plays a key role in delivering connected customer experiences.
              Learning Salesforce opens doors to career opportunities in:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>CRM Administration</li>
              <li>Salesforce Development</li>
              <li>Data Management & Analytics</li>
            </ul>
            <p className="mt-2">
              With high demand in the job market, Salesforce skills offer a competitive edge, especially in roles focused on customer-centric
              technology. Whether you're a fresher or a tech professional, this course equips you for a rewarding future in cloud-based CRM.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <HiOutlineSparkles className="text-teal-600 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Build a Cloud Career with Salesforce</h3>
            <p>
              This course doesn’t just teach you a platform—it trains you to build scalable, secure, and cloud-native business solutions.
              With hands-on projects and real-world scenarios, you'll be prepared for jobs in one of the fastest-growing tech domains.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/salesforce-developer")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default SalesforceInfo;
