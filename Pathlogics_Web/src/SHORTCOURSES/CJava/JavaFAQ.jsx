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
           Core Java Training in Pune FAQ’s 

          </h2>

          <AccordionItem
            question="1. What is Core Java and why should I learn it?"
            answer="Core Java is the foundation of all Java-based technologies, covering basics like OOPs, data types, and loops. It's essential for building a career in software development or advancing to frameworks"

            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. Who can join this Core Java course?"
            answer="Anyone with a basic understanding of computers and logic can enroll. This course is perfect for students, recent graduates, working professionals, or anyone looking to switch to a career in programming."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3.  Do I need any prior programming knowledge?"
            answer="No prior programming knowledge is required. We start from the basics and gradually cover advanced topics with practical examples and mentorship"
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Can I switch to a Full Stack Java Development course later?"
            answer="Absolutely! This Core Java course is a great foundation and aligns perfectly with our Full Stack Java Development course."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
