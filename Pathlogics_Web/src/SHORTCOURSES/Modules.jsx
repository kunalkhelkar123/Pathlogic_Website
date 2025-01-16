import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Modules = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const modules = [
    {
      title: "Session 1",
      content: ["Introduction to Programming", "Setup Environment", "Java Basics"],
    },
    {
      title: "Session 2",
      content: [
        "Cryptography",
        "Part 1: History of Cryptography",
        "Part 2: Symmetric Cryptography",
        "Part 3: Asymmetric Cryptography",
        "Part 4: Hash Functions",
      ],
    },
    {
      title: "Session 3",
      content: ["Data Structures", "Algorithms", "Object-Oriented Programming"],
    },
    {
      title: "Session 4",
      content: ["Frontend Basics", "React Introduction", "Hands-on Project"],
    },
    {
        title: "Session 5",
        content: ["Backend Basics", "Spring Boot Introduction", "Hands-on Project"],
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Course Modules
        </h2>
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`border ${
                activeIndex === index ? "border-orange-500" : "border-gray-300"
              } rounded-lg overflow-hidden`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex items-center justify-between w-full px-6 py-4 text-left font-semibold ${
                  activeIndex === index ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                {module.title}
                {activeIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-white" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {/* Accordion Content */}
              {activeIndex === index && (
                <div className="bg-gray-50 px-6 py-4 text-gray-700">
                  <ul className="list-disc pl-6 space-y-2">
                    {module.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
