import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculum = [
  {
    title: "Introduction to AngularJS & MVC Architecture",
    content:
      "Learn the fundamentals of AngularJS and the MVC pattern that powers dynamic, single-page applications.",
  },
  {
    title: "Data Binding, Directives & Controllers",
    content:
      "Dive into two-way data binding, built-in directives, and how to manage application logic using controllers.",
  },
  {
    title: "Services, Dependency Injection & Filters",
    content:
      "Understand the power of Angular services, dependency injection patterns, and custom filters for transforming data.",
  },
  {
    title: "Routing, Views & SPA Navigation",
    content:
      "Build seamless single-page navigation using AngularJS routing to handle multiple views and nested routes.",
  },
  {
    title: "RESTful APIs, Firebase Integration & Deployment",
    content:
      "Learn how to connect your app to real APIs, use Firebase for real-time data, and deploy your finished AngularJS project.",
  },
];

export default function AngularDrop() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8f9fb] py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div>
          <img
            src="https://pathlogics.in/assets/javacurriculam-D7xrI25A.jpg"
            alt="AngularJS Curriculum Illustration"
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8">
            AngularJS Developer Course Curriculum
          </h3>

          {curriculum.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-gradient-to-r from-teal-700 to-teal-900 text-white rounded-md shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-semibold">{item.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-100">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
