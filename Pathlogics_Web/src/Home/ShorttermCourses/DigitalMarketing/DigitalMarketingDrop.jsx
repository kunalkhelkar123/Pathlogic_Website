import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const curriculum = [
  {
    title: "Introduction to Digital Marketing",
    content:
      "Understand the fundamentals of digital marketing, its evolution, key channels like SEO, SEM, and social media, and the impact of digital strategies in today’s business world.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    content:
      "Learn on-page and off-page SEO techniques, keyword research, technical SEO, and how to improve website visibility on search engines.",
  },
  {
    title: "Social Media & Content Marketing",
    content:
      "Create compelling content strategies, manage campaigns on platforms like Facebook, Instagram, and LinkedIn, and learn how to engage and grow an online audience.",
  },
  {
    title: "Google Ads & PPC Advertising",
    content:
      "Get hands-on with Google Ads to create and optimize search, display, and video campaigns. Understand bidding, budgeting, and ad performance analysis.",
  },
  {
    title: "Email Marketing & Analytics",
    content:
      "Design email campaigns, build subscriber lists, and track performance using tools like Mailchimp and Google Analytics. Learn to refine campaigns based on data insights.",
  },
];

export default function DigitalMarketingDrop() {
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
            alt="Digital Marketing Curriculum Illustration"
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8">
            Digital Marketing Course Curriculum
          </h3>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            This curriculum is crafted for individuals who want to build or
            upgrade their digital marketing careers. Whether you're a fresher,
            student, entrepreneur, or working professional, this course
            delivers practical skills across SEO, Google Ads, social media, and
            more to help you succeed in today’s digital-first world.
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
