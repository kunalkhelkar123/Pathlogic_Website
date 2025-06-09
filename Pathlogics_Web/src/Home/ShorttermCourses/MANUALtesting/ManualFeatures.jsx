import React from 'react';
import { Users, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-friendly curriculum',
    label: 'focused on core manual testing concepts',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Hands-on practice',
    label: 'with real-world scenarios, test cases, and bug reporting',
  },
  {
    icon: <DollarSign className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Weekly mock interviews',
    label: 'to sharpen your confidence and job readiness',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement support',
    label: 'including resume building, interview training, and job referrals',
  },
];

const ManualFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Features of Pathlogics Manual Testing Training in Pune
          </h3>
          <p className="text-gray-700 text-lg">
            Our Manual Testing course is designed to help you develop solid testing skills through practical
            learning, expert guidance, and career-focused training. Here’s what makes this course unique:
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
                <h4 className="text-lg font-semibold text-gray-900 text-center">{feature.count}</h4>
                <p className="text-gray-600 mt-1 text-sm">{feature.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManualFeatures;
