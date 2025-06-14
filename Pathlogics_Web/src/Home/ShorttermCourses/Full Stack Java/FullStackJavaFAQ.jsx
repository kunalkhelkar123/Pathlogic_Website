import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/FAQ.jpg";

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

const FullStackJavaFAQ = () => {
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
            Full Stack Java Developer Course In Pune FAQ’s
          </h2>

          <AccordionItem
            question="1. Is prior programming knowledge required to join Full Stack Java course?"
            answer="No, prior programming knowledge is not mandatory. This course is designed for beginners, and we start with the basics of Java and gradually progress to advanced topics."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. What is the Full Stack Java Developer course duration?"
            answer="The Full Stack Java Developer course at Pathlogics is designed to be completed in 4 months. It allows students to gain in-depth knowledge of both front-end and back-end development."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. How do I get started?"
            answer="You can get started by contacting our admissions team or visiting our website to learn more about the course."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Why is there a high demand for Full Stack Java Developers?"
            answer="Full Stack Java Developers are in high demand because they possess the skills to work on both the front-end and back-end of web applications. The need for versatile developers who can handle all aspects of application development is growing rapidly."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FullStackJavaFAQ;
