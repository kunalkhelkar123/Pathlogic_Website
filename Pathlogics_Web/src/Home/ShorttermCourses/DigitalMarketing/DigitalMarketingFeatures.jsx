import React from 'react';
import { Users, Briefcase, ClipboardCheck, BookOpenCheck, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-friendly,',
    label: 'industry-focused curriculum',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Hands-on training',
    label: 'with real-time tools & projects',
  },
  {
    icon: <ClipboardCheck className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Weekly assignments',
    label: '& mock interviews',
  },
  {
    icon: <BookOpenCheck className="text-blue-600 w-10 h-10 mb-3" />,
    count: '15+ certifications',
    label: 'from top platforms',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Resume building',
    label: '& placement assistance',
  },
];

const DigitalMarketingFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Features of Pathlogics Digital Marketing Course in Pune
          </h3>
          <p className="text-gray-700 text-lg">
            Our Digital Marketing Course in Pune is ideal for students, freshers, entrepreneurs, and working professionals aiming to build or upgrade their careers in the digital space. This course provides in-depth training in SEO, SEM, social media marketing, content strategy, email marketing, and more, combined with live projects and expert mentorship to make you job-ready.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
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

export default DigitalMarketingFeatures;
