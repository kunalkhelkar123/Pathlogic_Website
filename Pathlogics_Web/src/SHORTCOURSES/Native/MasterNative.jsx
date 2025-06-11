import React from 'react';
import { MdPhoneIphone } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';

const NativeInfo = () => {
  const sections = [
    {
      title: 'What is React Native?',
      icon: <MdPhoneIphone className="text-teal-600 text-xl mr-2" />,
      content: (
        <>
          <p className="mb-2">
            React Native is a powerful, open-source framework created by Facebook that makes mobile app development faster and more efficient. Instead of writing separate code for Android and iOS, you can use one codebase to build apps for both platforms using JavaScript and React.
          </p>
          <p>
            What makes React Native really stand out is how it uses native components so the apps don’t just look good, they actually perform like fully native apps. Whether you're working on a small startup idea or building a complex app for a big audience, React Native gives you the tools to move fast and build high-quality mobile experiences.
          </p>
        </>
      )
    },
    {
      title: 'Why Learn React Native?',
      icon: <FiTrendingUp className="text-teal-600 text-xl mr-2" />,
      content: (
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>Cross-platform development: Build apps for iOS and Android with one codebase.</li>
          <li>Fast and efficient: Hot Reloading lets you see changes instantly, making development smoother.</li>
          <li>In-demand skill: React Native developers are highly sought after across industries.</li>
          <li>Strong community support: Backed by Facebook and a large developer community.</li>
          <li>Trusted by top companies: Used by Instagram, Facebook, UberEats, and many more.</li>
        </ul>
      )
    },
    {
      title: 'What Makes React Native Unique?',
      icon: <HiOutlineSparkles className="text-teal-600 text-xl mr-2" />,
      content: (
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li><strong>Single Codebase, Multiple Platforms:</strong> Write once and deploy on both Android and iOS, reducing development time and cost.</li>
          <li><strong>Native Performance:</strong> Uses native components for smooth performance and responsiveness, unlike typical hybrid apps.</li>
          <li><strong>Live & Hot Reloading:</strong> See code changes in real time without rebuilding—great for rapid testing and iteration.</li>
          <li><strong>Large Ecosystem & Libraries:</strong> Vast plugin support and a large developer community make development faster and easier.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Complete Guide to Learning React Native Course with Pathlogics
      </h2>
      <p className="text-center text-gray-600 text-base sm:text-lg mb-12">
        Build a strong foundation and launch your career with one of the most trusted mobile development frameworks.
      </p>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start">
            <div className="mt-1">{section.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h3>
              <div className="text-base leading-relaxed">{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NativeInfo;
