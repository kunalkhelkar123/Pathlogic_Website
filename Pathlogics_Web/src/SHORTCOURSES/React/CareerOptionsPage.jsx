import React from 'react';

const reactRoles = [
  {
    title: 'Front-End Developer (React)',
    description: 'Build dynamic, responsive UIs using React JS for fast, interactive apps.',
  },
  {
    title: 'UI Developer',
    description: 'Convert design mockups into functional websites using React.',
  },
  {
    title: 'React JS Developer',
    description: 'Specialize in scalable single-page applications (SPAs) with React.',
  },
  {
    title: 'React Native Developer',
    description: 'Build cross-platform mobile apps with React Native for Android and iOS.',
  },
  {
    title: 'JavaScript Developer',
    description: 'Use your strong JS foundation to build modern front-end solutions.',
  },
  {
    title: 'Web Application Developer',
    description: 'Build and optimize web apps focused on performance and usability.',
  },
  {
    title: 'UI/UX Engineer',
    description: 'Bridge UI development with UX design to create engaging experiences.',
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

export default function CareerOptionsPage() {
  return (
    <div className="bg-white px-4 md:px-10">
      {/* Uncomment and define aiRoles if needed
      <CareerSection
        title="Top Career Options After Full Stack AI Developer Course in Pune"
        description="After completing a Full Stack AI Developer course, you’ll be equipped to tackle dynamic roles in the ever-evolving tech landscape. With expertise in both AI model development and full-stack integration, you’ll be capable of building intelligent, end-to-end applications. This makes you a sought-after professional for companies seeking innovative, data-driven solutions powered by artificial intelligence."
        roles={aiRoles}
      /> */}

      <CareerSection
        title="Top Career Options After React JS Course in Pune"
        description="Completing a React JS course opens the door to a world of exciting front-end development careers. With hands-on skills in building dynamic user interfaces, working with components, and managing app state, you'll be ready to take on in-demand roles in top tech companies. Whether you’re aiming to be a front-end developer or a full-stack pro, React expertise gives you a competitive edge in today’s job market."
        roles={reactRoles}
      />
    </div>
  );
}
