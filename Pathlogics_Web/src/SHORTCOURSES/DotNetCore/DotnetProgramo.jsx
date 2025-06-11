import React from 'react';
// import { Users, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

import { Users, Briefcase, DollarSign, GraduationCap, HelpCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-Friendly',
    label: 'and professional-level learning paths',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Real-World Projects',
    label: 'and hands-on practical training',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Mock Interviews',
    label: 'soft skills, aptitude, and resume prep',
  },
  {
    icon: <DollarSign className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement Support',
    label: 'with interview preparation and referrals',
  },
  
];


const ReactFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
         
Key Features of Pathlogics Dot Net CoreTraining in Pune

          </h3>
          <p className="text-gray-700 text-lg">
       Our Dot Net Core training program is designed with a focus on practical learning, expert guidance, and career readiness. Here are the key features that set us apart.

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

export default ReactFeatures;