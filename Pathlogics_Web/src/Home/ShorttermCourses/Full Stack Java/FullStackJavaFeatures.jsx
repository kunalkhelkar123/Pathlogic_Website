import React from 'react';
import {
  Users,
  Code2,
  CalendarCheck2,
  Briefcase,
} from 'lucide-react';

const features = [
  {
    icon: <Users className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Beginner-friendly',
    label: 'Beginner-friendly and industry-oriented curriculum',
  },
  {
    icon: <Code2 className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Project-Based',
    label: 'Real-time full-stack development projects with tool-based tasks',
  },
  {
    icon: <CalendarCheck2 className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Weekly Practice',
    label: 'Weekly mock interviews to enhance job readiness',
  },
  {
    icon: <Briefcase className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement Support',
    label: 'Placement support with resume building and interview preparation',
  },
];

const FullStackJavaFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Features of Pathlogics Full Stack Java Course in Pune
          </h3>
          <p className="text-gray-700 text-lg">
            Our Full Stack Java Developer Training Course in Pune is perfect for aspiring developers, freshers, and working professionals looking to master Java and full-stack development. The course covers everything from backend Java programming to front-end frameworks, offering hands-on project experience and personalized mentorship to prepare you for in-demand roles in software development.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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

export default FullStackJavaFeatures;
