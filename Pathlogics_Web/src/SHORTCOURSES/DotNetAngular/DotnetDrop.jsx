import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculum = [
  {
    title: "Introduction to .NET & Angular Frameworks",
    content:
      "Understand the fundamentals of .NET and Angular, architecture overview, development environment setup, and first app creation.",
  },
  {
    title: "Building Components with Angular and Services with .NET Core",
    content:
      "Dive into Angular components, modules, and services while building backend APIs using .NET Core controllers and dependency injection.",
  },
  {
    title: "State Management, Routing & API Communication",
    content:
      "Learn Angular routing and .NET Web API communication using HTTPClient. Understand services, guards, and API integration.",
  },
  {
    title: "Database Integration with SQL Server & Entity Framework",
    content:
      "Master CRUD operations using Entity Framework with SQL Server. Connect backend logic with frontend forms and data displays.",
  },
  {
    title: "Real-Time Project, Hosting & Career Support",
    content:
      "Build a full-stack project integrating Angular frontend and .NET backend. Learn deployment using IIS/Azure and get job readiness training.",
  },
];

export default function DotnetDrop() {
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
            alt=".NET Angular Curriculum Illustration"
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8">
            Dot Net with Angular.js Course Curriculum
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
