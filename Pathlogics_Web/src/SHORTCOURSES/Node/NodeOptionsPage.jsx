import React from 'react';

const nodeRoles = [
  {
    title: 'Backend Developer',
    description:
      'Design and build the logic behind powerful web applications. Handle APIs, databases, and performance with Node.js.',
  },
  {
    title: 'Full-Stack Developer',
    description:
      'Work across the entire stack using JavaScript. Node.js makes switching between frontend and backend seamless.',
  },
  {
    title: 'API Developer / Integration Specialist',
    description:
      'Create efficient, scalable APIs that connect apps and services. Ideal for logical thinkers who enjoy solving real-world challenges.',
  },
  {
    title: 'Real-Time App Developer',
    description:
      'Build apps like WhatsApp or Slack using Socket.IO with Node.js for live chat, notifications, and more.',
  },
  {
    title: 'DevOps Engineer (Node.js Focused)',
    description:
      'Manage deployments, optimize performance, and maintain Node-based environments for smooth backend operations.',
  },
  {
    title: 'Technical Support Engineer',
    description:
      'Dive into problem-solving, debugging, and keeping Node.js applications running smoothly. A great start toward deeper backend roles.',
  },
  {
    title: 'Freelance Web Developer / Consultant',
    description:
      'Offer backend services using Node.js to clients across the globe. Perfect for independent developers building their own path.',
  },
];

const CareerSection = ({ title, description, roles }) => (
  <div className="mb-20 w-full">
    <div className="text-center mb-14 px-4">
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{title}</h3>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">{description}</p>
    </div>

    <div className="overflow-x-auto">
      <div className="flex gap-6 min-w-[1000px] pb-4 px-4">
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

export default function NodeOptionPage() {
  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <CareerSection
        title="Top Career Options After Node.js Course in Pune"
        description="Completing a Node.js course isn’t just about learning backend development — it’s your launchpad into the world of fast, scalable web apps. With Node.js in your toolkit, you’ll be ready for high-impact roles in both startups and top tech companies, working on real-world projects that matter."
        roles={nodeRoles}
      />
    </div>
  );
}
