import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../../assets/FAQ.jpg";

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
        }`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900 transition-all duration-300 whitespace-pre-line">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Component
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
            AWS DevOps Course in Pune FAQ’s
          </h2>

          <AccordionItem
            question="1. Is AWS with DevOps a good career in 2025?"
            answer="Yes, AWS with DevOps is an excellent career choice in 2025. As businesses continue to move to the cloud and embrace automation, the demand for AWS DevOps professionals is growing rapidly."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. How much does the AWS DevOps Certification Cost?"
            answer="The cost of the AWS DevOps Certification exam varies depending on the region and exam level. For the most accurate and up-to-date pricing, feel free to contact us directly for the latest fee details."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. How do I know if the AWS DevOps Engineer Course is the best fit for me?"
            answer="You can assess your interest and career goals in DevOps and AWS technology. Additionally, consulting with career counselors or instructors at Pathlogics can provide valuable insights."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. What is the average salary of an AWS DevOps Engineer in Pune?"
            answer="As of 2025, AWS DevOps Engineers in Pune earn an average annual salary ranging from ₹6.5 to ₹16 lakhs, depending on experience."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
