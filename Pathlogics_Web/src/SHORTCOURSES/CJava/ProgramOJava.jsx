import React from 'react';
import { Code, Briefcase, Users, ClipboardCheck } from 'lucide-react';

const features = [
  {
    title: 'Hands-on Coding & Real-world Examples',
    icon: <Code className="h-10 w-10 text-white group-hover:scale-110 transition duration-300" />,
    description: 'Practice Java with real-life examples and regular hands-on coding sessions.',
  },
  {
    title: 'Weekly Mock Interviews',
    icon: <Briefcase className="h-10 w-10 text-white group-hover:scale-110 transition duration-300" />,
    description: 'Simulate real interview scenarios to boost your confidence and job-readiness.',
  },
  {
    title: 'Placement Assistance',
    icon: <ClipboardCheck className="h-10 w-10 text-white group-hover:scale-110 transition duration-300" />,
    description: 'Get help with resume building, interview preparation, and job referrals.',
  },
  {
    title: '1-on-1 Mentorship & Doubt Solving',
    icon: <Users className="h-10 w-10 text-white group-hover:scale-110 transition duration-300" />,
    description: 'Receive personal guidance through one-on-one mentorship and doubt-solving sessions.',
  },
];

const CoreJavaFeatures = () => {
  return (
    <div className="bg-gradient-to-br from-sky-100 via-sky-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Key Features of Core Java Course in Pune
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          From basic syntax to OOPs, master everything with structured modules, live coding sessions, and personal guidance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-sky-800 to-cyan-400 text-white rounded-2xl shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreJavaFeatures;
