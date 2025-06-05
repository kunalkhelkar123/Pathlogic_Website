import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../assets/FAQ.jpg";

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

const ReactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How does React JS work?",
      answer:
        "React JS works behind the scenes using a virtual DOM, which makes updates super fast and smooth. Instead of reloading the whole page, it only changes what’s needed. It’s built around reusable components, so you can build user interfaces in a clean, organized way.",
    },
    {
      question: "2. What is a Higher-Order Component (HOC) in React?",
      answer:
        "A Higher-Order Component (HOC) is like a special function in React that takes one component and returns another, enhanced component. It’s a smart way to reuse logic between components without repeating code.",
    },
    {
      question: "3. Why should I learn ReactJS?",
      answer:
        "ReactJS is one of the most popular tools for building modern, fast, and interactive web apps, and it's used by tech giants like Facebook, Netflix, and Airbnb. Learning React opens doors to high-demand front-end jobs and lets you build impressive user interfaces.",
    },
    {
      question:
        "4. Are there any job placement assistance or career counseling provided by the institute?",
      answer:
        "Yes! At Pathlogics, we don’t just teach you — you get full support even after the course. We offer job placement assistance, help you build your resume, and even prep you for interviews. Our team also provides career counseling to guide you toward the right opportunities based on your goals and skills.",
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
            React JS Course FAQ’s
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

export default ReactFaq;
