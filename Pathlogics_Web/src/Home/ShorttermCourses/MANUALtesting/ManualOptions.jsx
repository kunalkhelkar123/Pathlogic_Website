import React from 'react';

const manualTestingRoles = [
  {
    title: 'Software Tester / QA Engineer',
    description:
      'Primary role will be to test applications, find defects, and ensure software quality. Responsibilities include writing test cases, executing tests, and reporting bugs.',
  },
  {
    title: 'Test Analyst',
    description:
      'Designing detailed test plans and strategies. Responsible for improving testing processes and ensuring test coverage.',
  },
  {
    title: 'Quality Assurance (QA) Engineer',
    description:
      'Focus on maintaining software quality standards. Collaborate with developers to prevent defects and enhance user experience.',
  },
  {
    title: 'Performance Tester',
    description:
      'Analyze speed, responsiveness, and scalability of applications. Tools like LoadRunner and JMeter are commonly used in this role.',
  },
  {
    title: 'Mobile App Tester',
    description:
      'Mobile testing has become a lucrative field. You’ll test mobile apps for functionality, usability, and compatibility across different devices.',
  },
];

const CareerSection = ({ title, description, roles }) => (
  <div className="mb-20">
    <div className="text-center mb-14">
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">{description}</p>
    </div>

    <div className="overflow-x-auto">
      <div className="flex space-x-6 min-w-[1000px] pb-2">
        {roles.map((role, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[280px] bg-gradient-to-br from-gray-900 to-teal-600 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-green-400 text-gray-900 w-10 h-10 flex items-center justify-center font-bold rounded-full mb-4">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h4 className="text-lg font-bold mb-2">{role.title}</h4>
            <p className="text-sm">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ManualOptions() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Options After Manual Testing Course In Pune"
        description="Completing a Manual Testing Course opens up multiple career opportunities in the software testing and quality assurance domain. Here are some promising career paths you can explore:"
        roles={manualTestingRoles}
      />
    </div>
  );
}
