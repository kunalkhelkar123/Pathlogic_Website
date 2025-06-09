import React from 'react';

const powerBiRoles = [
  {
    title: 'Data Analyst',
    description:
      'As a Data Analyst, you’ll work with numbers and data to help companies understand what’s really going on beneath the surface. With Power BI, you can turn complex datasets into clear, interactive dashboards.',
  },
  {
    title: 'Business Intelligence (BI) Developer',
    description:
      'BI Developers are responsible for designing and implementing BI solutions that transform data into meaningful insights. Using Power BI, you’ll develop scalable dashboards, automate data workflows.',
  },
  {
    title: 'Power BI Developer',
    description:
      'This role focuses on developing, managing, and optimizing Power BI dashboards and reports. You\'ll work closely with business teams to understand reporting needs, ensuring timely delivery of accurate and visually compelling data solutions.',
  },
  {
    title: 'Data Visualization Specialist',
    description:
      'As a specialist in data visualization, your role involves transforming raw data into visually engaging formats that enhance understanding and communication. Power BI equips you with advanced tools to deliver interactive and impactful visual stories.',
  },
  {
    title: 'Freelance Power BI Consultant',
    description:
      'As an independent consultant, you\'ll provide expert guidance to clients on leveraging Power BI for data integration, reporting, and visualization. This role offers flexibility and the opportunity to work across various industries and projects.',
  },
  {
    title: 'Project/Data Coordinator',
    description:
      'In this cross-functional role, you’ll support project teams by managing data, tracking progress, and providing timely reports. Power BI skills enhance your ability to deliver accurate, real-time updates that aid in efficient project execution.',
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

export default function PowerBiRoles() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Opportunities After Microsoft Power BI Course in Pune"
        description="Completing our Power BI course in Pune is more than just learning a data visualization tool — it’s your entry into a future-ready career in business intelligence. As companies increasingly rely on data-driven decisions, skilled Power BI professionals are in high demand for transforming raw data into clear, actionable insights."
        roles={powerBiRoles}
      />
    </div>
  );
}
