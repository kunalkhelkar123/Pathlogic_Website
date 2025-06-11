import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left justify-start rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full text-left justify-start flex justify-between p-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
        }`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900 transition-all duration-300">
          <p className="leading-relaxed">{answer}</p>
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        React Native Course FAQ’s
      </h2>

      <AccordionItem
        question="1. What is React Native and what is the scope of it?"
        answer="React Native is a popular framework by Facebook used to build mobile apps for both Android and iOS using a single JavaScript codebase. Its scope is huge, with high demand for developers in startups and top tech companies due to its speed, flexibility, and cross-platform efficiency."
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      />

      <AccordionItem
        question="2. Will I get a certificate after completing the course?"
        answer="Yes, you’ll receive an industry-recognized React Native certification that proves your skills and helps boost your career opportunities."
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      />

      <AccordionItem
        question="3. How will this React Native certification help my career?"
        answer="The React Native developer certificate from Pathlogics proves your practical skills and can give you an edge during job applications and interviews."
        isOpen={openIndex === 3}
        onClick={() => toggleAccordion(3)}
      />

      <AccordionItem
        question="4. What programming language should I know before learning React Native?"
        answer="A basic understanding of JavaScript is helpful, but we also cover the essentials so you can start even if you’re not a pro yet."
        isOpen={openIndex === 4}
        onClick={() => toggleAccordion(4)}
      />
    </div>
  </div>
</section>

  );
};

export default FAQ;
