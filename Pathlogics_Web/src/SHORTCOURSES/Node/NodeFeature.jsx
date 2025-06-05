import React from 'react';
import { Users, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-friendly',
    label: 'and industry-aligned curriculum',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Hands-on',
    label: 'coding sessions & real-world examples',
  },
  {
    icon: <DollarSign className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Weekly',
    label: 'mock interviews for job readiness',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement',
    label: 'assistance & resume prep',
  },
];

const NodeFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Feature of Node.Js Course in Pune
          </h3>
          <p className="text-gray-700 text-lg">
            With our Node JS Course in Pune, you’ll level up your backend skills in a way that’s easy to follow and actually useful. From setting up servers with Express.js to working with MongoDB, creating APIs, and adding real-time features with Socket.IO, you’ll learn it all, step by step. It’s practical, job-focused learning that helps you build real projects and gain real confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h4 className="text-xl font-semibold text-gray-900">{feature.count}</h4>
                <p className="text-gray-600 mt-1">{feature.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NodeFeatures;
