import React from 'react';

const salesforceRoles = [
  {
    title: 'Salesforce Developer',
    description: 'Build, customize, and maintain Salesforce applications using Apex, Visualforce, and Lightning components.',
  },
  {
    title: 'Salesforce Administrator',
    description: 'Manage users, security settings, workflows, and overall system efficiency.',
  },
  {
    title: 'Salesforce Consultant',
    description: 'Provide expert guidance on Salesforce implementation, customization, and business solutions.',
  },
  {
    title: 'Salesforce Business Analyst',
    description: 'Analyze business needs and translate them into Salesforce-based solutions.',
  },
  {
    title: 'Salesforce Technical Architect',
    description: 'Design and oversee large-scale Salesforce solutions and integrations.',
  },
  {
    title: 'Salesforce AppExchange Developer',
    description: 'Develop and publish custom applications for Salesforce’s AppExchange marketplace.',
  },
  {
    title: 'Salesforce Project Manager',
    description: 'Lead and manage Salesforce projects from planning to execution.',
  },
  {
    title: 'Salesforce Marketing Cloud Specialist',
    description: 'Work with marketing automation tools to drive customer engagement.',
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

export default function SalesOptions() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Options After Salesforce Course in Pune"
        description="After completing a Salesforce Developer Course, you’ll be prepared for exciting career opportunities in the Salesforce ecosystem. You'll gain the skills to develop, customize, and manage Salesforce applications, making you a valuable asset to companies looking for experts in CRM solutions. With growing demand for Salesforce professionals, this course opens doors to roles like,"
        roles={salesforceRoles}
      />
    </div>
  );
}
