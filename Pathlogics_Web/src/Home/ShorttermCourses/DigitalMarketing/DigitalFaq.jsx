import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/FAQ.jpg";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between p-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
        }`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const DigitalFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What is Search Engine Optimisation (SEO)?",
      answer:
        "Search Engine Optimization (SEO) is the process of improving a website’s visibility on search engines like Google to attract more organic (unpaid) traffic. It involves optimizing content, keywords, and technical aspects of a site.",
    },
    {
      question: "2. What is the importance of Google My Business?",
      answer:
        "Google My Business is essential for improving your local visibility online. It helps businesses appear in local search results and on Google Maps, making it easier for customers to find and contact you.",
    },
    {
      question: "3. Why is Digital Marketing skill in high demand?",
      answer:
        "As more businesses move online, there’s a growing need for professionals who can help them reach and engage customers digitally. It’s a skill valued across all industries for brand growth and lead generation.",
    },
    {
      question: "4. Can I start a career in Digital Marketing without a background in marketing?",
      answer:
        "Absolutely! Digital marketing is open to individuals from all backgrounds. The course is designed to help you learn key concepts and strategies, regardless of your prior experience.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="FAQ"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side FAQ */}
        <div className="w-full">
          <h2
            className="text-3xl font-bold mb-6 text-orange-600 text-center md:text-left"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Best Digital Marketing Courses in Pune FAQ’s
          </h2>

          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalFaq;
