import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculum = [
  {
    title: "Introduction to Node.js & JavaScript Runtime",
    content:
      "Understand what Node.js is, its architecture, and how it enables server-side JavaScript execution. Learn the basics of setting up a Node.js environment and writing your first server.",
  },
  {
    title: "Working with File System, Events & Streams",
    content:
      "Explore core modules like fs, events, and stream. Learn how to read/write files, handle asynchronous events, and use streams for large-scale file processing.",
  },
  {
    title: "Express.js Framework & RESTful APIs",
    content:
      "Dive into Express.js for building robust web applications. Understand routing, middleware, and build RESTful APIs to connect frontend and backend.",
  },
  {
    title: "Database Integration: MongoDB & Mongoose",
    content:
      "Learn to integrate MongoDB using Mongoose. Understand schemas, models, and CRUD operations to manage dynamic data effectively.",
  },
  {
    title: "Authentication, Deployment & Career Guidance",
    content:
      "Implement user authentication using JWT or Passport.js, deploy your app using platforms like Heroku or Render, and receive career tips and interview guidance.",
  },
];

export default function NodeDrop() {
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
            alt="Curriculum Illustration"
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8">
            Node JS Course In Pune Curriculum
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
