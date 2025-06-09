import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculum = [
  {
    title: "Power BI Introduction & Overview",
    content:
      "Understand the basics of manual testing, SDLC and STLC lifecycle models, testing types, and the importance of QA in software development.",
  },
  {
    title: "Power BI Data Visualization Techniques",
    content:
      "Learn to write effective test cases, identify and report bugs using tools like JIRA, and follow proper documentation practices.",
  },
  {
    title: "Power BI Data Modeling Concepts",
    content:
      "Explore functional, regression, smoke, sanity, and exploratory testing with real-time examples and practical exercises.",
  },
  {
    title: "Power BI Data Transformation & Power Query",
    content:
      "Get hands-on exposure to tools such as TestLink, Bugzilla, and JIRA for test management and defect tracking.",
  },
  {
    title: "Power BI Capstone Project & Career Preparation",
    content:
      "Work on a capstone testing project, participate in mock interviews, resume building sessions, and get career support.",
  },
];

export default function PowerbiDrop() {
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
            alt="Manual Testing Curriculum Illustration"
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8">
          Power BI Full Course Curriculum
          </h3>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            Boost your career with our Manual Testing Certification Course,
            crafted to teach you the fundamentals of manual testing, bug
            identification, test case creation, and quality assurance
            practices. Ready to begin? Explore all the details about our
            admission process and eligibility criteria.
          </p>

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
