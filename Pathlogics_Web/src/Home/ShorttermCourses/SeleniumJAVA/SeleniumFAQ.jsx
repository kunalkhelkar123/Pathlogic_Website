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
            Selenium Using Java Course in Pune – FAQ’s
          </h2>

          <AccordionItem
            question="1. What is Selenium with Java?"
            answer="Selenium is an open-source tool for automating web browsers, and when combined with Java, it enables developers and testers to write powerful test scripts for web applications. This combination is widely used for automation testing in the software industry."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. What is Selenium automation testing?"
            answer="Selenium automation testing is the process of using the Selenium tool to automate the testing of web applications. It allows testers to write scripts that simulate real user interactions like clicking buttons, filling forms, and navigating pages to ensure the application works correctly across different browsers."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What is the Selenium with Java course in Pune fees?"
            answer="The course fee varies depending on the duration, training mode (online/offline). We recommend reaching out to our team for the latest details and available offers tailored to your learning needs."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. What is the salary of a Selenium Tester?"
            answer="The salary of a Selenium Tester can vary based on experience. On average, a fresher can earn between ₹3.5 to ₹5 LPA in Pune, while an experienced professional can earn between ₹6 to ₹12 LPA or more."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
