import React from 'react';
import { FaJava, FaRocket, FaLaptopCode } from 'react-icons/fa';

const CoreJavaInfo = () => {
  const sections = [
    {
      title: 'What is Core Java?',
      icon: <FaJava className="text-teal-600 text-xl mr-2" />,
      content:
        'Core Java forms the building blocks of the Java language. It includes OOP, data types, exception handling, and multithreading—essential for desktop apps and a base for advanced Java.',
    },
    {
      title: 'Why is Core Java Important?',
      icon: <FaRocket className="text-teal-600 text-xl mr-2" />,
      content:
        'Mastering Core Java is essential for becoming a Java developer. It builds logical thinking and enables you to transition smoothly to Spring, Hibernate, and enterprise frameworks.',
    },
    {
      title: 'Scope of a Core Java Course',
      icon: <FaLaptopCode className="text-teal-600 text-xl mr-2" />,
      content:
        'A full Core Java course opens paths in software, web, and mobile development. It prepares you for full-stack development and a thriving tech career.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
        Why Learn <span className="text-teal-600">Core Java?</span>
      </h2>
      <p className="text-center text-gray-600 text-base sm:text-lg mb-12">
        Build a strong foundation and launch your career with one of the most trusted programming languages.
      </p>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <div key={index} className="flex items-start">
            <div className="mt-1">{section.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{section.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreJavaInfo;
