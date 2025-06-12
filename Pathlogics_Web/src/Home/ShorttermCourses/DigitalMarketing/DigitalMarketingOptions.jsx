import React from 'react';

const digitalMarketingRoles = [
  {
    title: 'Digital Marketing Executive / Specialist',
    description:
      'Manage end-to-end digital strategies including SEO, social media, and paid ads for brands.',
  },
  {
    title: 'SEO Executive / Specialist',
    description:
      'Optimize websites to rank higher on search engines like Google and drive organic traffic.',
  },
  {
    title: 'Social Media Manager',
    description:
      'Create and manage content, strategy, and campaigns across platforms like Instagram, Facebook, LinkedIn, and more.',
  },
  {
    title: 'Google Ads / PPC Expert',
    description:
      'Plan and manage paid advertising campaigns on Google and other platforms for maximum ROI.',
  },
  {
    title: 'Content Marketing Specialist',
    description:
      'Develop engaging blog posts, videos, and marketing content to attract and retain customers.',
  },
  {
    title: 'Email Marketing Executive',
    description:
      'Build and manage email campaigns to nurture leads and drive conversions.',
  },
  {
    title: 'Affiliate Marketing Manager',
    description:
      'Work with affiliate partners to drive sales and leads through commission-based marketing.',
  },
  {
    title: 'Digital Marketing Freelancer',
    description:
      'Work independently with multiple clients or agencies, offering flexible services across various domains.',
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

export default function DigitalMarketingOptions() {
  return (
    <div className="bg-white px-4 md:px-10">
      <CareerSection
        title="Top Career Options After Digital Marketing Course in Pune"
        description="After completing a Digital Marketing course, you'll be ready to explore a wide range of exciting career opportunities in the digital space. From managing social media to running ad campaigns and optimizing websites, you'll have the practical skills that businesses are actively looking for. As a digital marketer, you’ll be a key player in helping brands grow online and reach the right audience."
        roles={digitalMarketingRoles}
      />
    </div>
  );
}
