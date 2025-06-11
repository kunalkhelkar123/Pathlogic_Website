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
    count: 'Real-time',
    label: 'Salesforce projects and admin/dev tasks',
  },
  {
    icon: <DollarSign className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Weekly',
    label: 'mock interviews to build confidence',
  },
  {
    icon: <GraduationCap className="text-blue-600 w-10 h-10 mb-3" />,
    count: 'Placement',
    label: 'support with resume and interview prep',
  },
];

const SalesforceFeatures = () => {
  return (
    <section className="w-full py-12 px-4 bg-gray-100">
      {/* Content wrapper to limit max width and center */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Key Features of Pathologic Salesforce Certification Course in Pune
          </h3>
          <p className="text-gray-700 text-lg">
            Our Salesforce Training Course in Pune is designed for aspiring CRM professionals, freshers, and working individuals who want to build a strong foundation in Salesforce. The training includes hands-on CRM setup, workflow automation, and personalized guidance to prepare you for high-demand roles in Salesforce administration and development.
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

export default SalesforceFeatures;
