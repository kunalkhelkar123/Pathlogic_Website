import React from 'react';
import {
  BookOpenCheck,
  Code2,
  UsersRound,
  Briefcase,
  UserCheck,
} from 'lucide-react';

const features = [
  {
    icon: <BookOpenCheck className="text-blue-600 dark:text-orange-400" size={28} />,
    text: "Beginner-friendly and industry-aligned curriculum",
  },
  {
    icon: <Code2 className="text-blue-600 dark:text-orange-400" size={28} />,
    text: "Hands-on coding sessions and real-world examples",
  },
  {
    icon: <UsersRound className="text-blue-600 dark:text-orange-400" size={28} />,
    text: "Weekly mock interviews for job readiness",
  },
  {
    icon: <Briefcase className="text-blue-600 dark:text-orange-400" size={28} />,
    text: "Placement assistance with resume building and interview prep",
  },
  {
    icon: <UserCheck className="text-blue-600 dark:text-orange-400" size={28} />,
    text: "Doubt-solving sessions and one-on-one mentorship",
  },
];

const AdvanceJavaFeatureCards = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Key Features of Advanced Java Course in Pune
        </h3>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-100 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <p className="text-gray-800 dark:text-gray-100 text-sm font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvanceJavaFeatureCards;
