import React from 'react';

const dotNetAngularRoles = [
  {
    title: 'Full Stack Developer',
    description: 'Work on both front-end and back-end of web apps, using .NET for backend and Angular for frontend, creating complete end-to-end solutions.',
  },
  {
    title: 'Web Developer (Specializing in .NET & Angular)',
    description: 'Build interactive, high-performance web applications by leveraging .NET for backend and Angular for frontend, ensuring smooth user experiences.',
  },
  {
    title: 'Backend Developer (.NET)',
    description: 'Focus on developing server-side logic and managing databases using .NET Core, building secure and efficient backend systems for web apps.',
  },
  {
    title: 'Frontend Developer (Angular)',
    description: 'Create responsive, dynamic user interfaces with Angular, integrating APIs to ensure seamless data flow between frontend and backend.',
  },
  {
    title: 'API Developer',
    description: 'Design and develop APIs using .NET and Angular, ensuring smooth data exchange between the frontend and backend for optimal performance.',
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

export default function DotNetAngularRoles() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Options After Dot Net with Angular Training Course in Pune."
        description="Completing a Dot Net with Angular course opens up dynamic career opportunities in both backend and frontend development. With strong command over .NET Core and Angular, you'll be prepared to build robust, scalable, and modern web applications — making you a valuable asset to any development team."
        roles={dotNetAngularRoles}
      />
    </div>
  );
}
