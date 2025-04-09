import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left  justify-start rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full text-left  justify-start flex justify-between  p-4 text-sm font-semibold transition-all duration-300 ${isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
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
            Salesforce Training Institute in Pune FAQ’s
          </h2>

          <AccordionItem
            question="1. How do I get started?"
            answer="You can get started by contacting our admissions team, visiting our website to learn more about the course."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. Is this course available online or in-person?"
            answer="We offer both online and classroom training options, allowing you to choose the mode that suits you best."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. How much can I earn as a Salesforce Developer?"
            answer="Entry-level Salesforce Developers can earn between ₹5-8 LPA, while experienced professionals can earn ₹12+ LPA, depending on skills and experience."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. What is the job market like for Salesforce Developers?"
            answer="Salesforce is one of the most in-demand skills globally, with high-paying job opportunities in industries like IT, healthcare, finance, and e-commerce."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          {/* <AccordionItem
            question="5.  How can I enroll in the Software testing course in pune?"
            answer="To enroll, simply fill out the given form. Once we received a request, Our team will contact you ."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
