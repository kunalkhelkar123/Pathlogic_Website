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
            Software Testing Course in Pune FAQ’s
          </h2>

          <AccordionItem
            question="1. What is the duration of the Software Testing course?"
            answer="The course spans 4 months, providing a detailed understanding of both manual and automation testing methodologies. You will gain hands-on experience with various testing tools, bug tracking, and quality assurance strategies."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. Will I get practical exposure to real-world projects?"
            answer="Yes, our course includes hands-on training with real-world projects. You will work on live test cases, using the latest tools and techniques that are commonly used in the industry."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. Can I take a software testing course online?"
            answer="Yes, we offer both online and classroom training to give you flexibility. You can attend live sessions from the comfort of your home or join in-person classes for a more interactive experience."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. How do I register for the course?"
            answer="You can get started by contacting our admissions team, visiting our website to fill the contact form on our website. Our team will get in touch with you for more details."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
