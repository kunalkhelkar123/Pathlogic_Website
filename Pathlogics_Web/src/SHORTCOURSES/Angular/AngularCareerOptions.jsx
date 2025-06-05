import React from 'react';

const angularRoles = [
  {
    title: 'Frontend Developer',
    description: 'Turn creative ideas into functional, responsive web interfaces. With AngularJS in your toolkit, you’ll build smooth, interactive user experiences that work across all devices.',
  },
  {
    title: 'UI/UX Developer',
    description: 'Bridge the gap between design and code by building interfaces that are not just beautiful—but also intuitive. AngularJS helps you bring user-friendly designs to life with dynamic functionality.',
  },
  {
    title: 'JavaScript Developer',
    description: 'Dive deep into JavaScript and its frameworks like AngularJS to create high-performing, maintainable apps. Your role will focus on writing clean code and solving real user problems.',
  },
  {
    title: 'Full Stack Developer',
    description: 'Be the all-rounder every tech team needs! Pair your AngularJS skills with backend tools to create full-fledged web apps from scratch—and understand the complete development lifecycle.',
  },
  {
    title: 'Web Application Developer',
    description: 'Specialize in building single-page applications (SPAs) that are fast, responsive, and scalable. You’ll be the brain behind apps people use every day—across industries.',
  },
  {
    title: 'Technical Consultant',
    description: 'Help teams and businesses make the most of AngularJS. Whether it\'s advising on architecture or solving tricky bugs, you’ll guide projects toward smarter, faster solutions.',
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

export default function AngularAdvisor() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Options After AngularJS Course in Pune"
        description="Completing an AngularJS course doesn’t just add a skill to your resume, it opens up a whole new world of career opportunities in the web development space. With strong demand for skilled professionals in frameworks like AngularJS, you’ll have plenty of exciting roles to explore."
        roles={angularRoles}
      />
    </div>
  );
}
