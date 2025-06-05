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

const NodeFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What is Node.js used for?",
      answer:
        "Node.js is mainly used to build fast, scalable backend applications like APIs, web servers, and real-time apps such as chat systems or live updates. Its non-blocking, event-driven nature makes it perfect for handling multiple requests efficiently.",
    },
    {
      question: "2. Do I need to know backend development before starting the Node.js course?",
      answer:
        "Not at all! This course is designed for beginners in backend development. We start with the basics and guide you step-by-step with hands-on practice.",
    },
    {
      question: "3. Does Node.js have good long-term career scope?",
      answer:
        "Absolutely. Node.js continues to be in high demand for building scalable and high-performance applications. It powers platforms used by Netflix, LinkedIn, Uber, and more, which means long-term relevance and career stability.",
    },
    {
      question: "4. What is the average salary after learning Node.js?",
      answer:
        "Salaries can vary by experience and location. Beginners in India earn between ₹3.5 LPA to ₹6 LPA. With 2–3 years of experience, Node.js developers often make ₹8 LPA or more, and full-stack developers can earn even higher packages.",
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
            Node.js Course FAQ’s
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

export default NodeFaq;
