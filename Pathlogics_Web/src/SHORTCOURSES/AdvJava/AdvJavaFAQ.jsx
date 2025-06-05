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

const AdvJavaFAQ = () => {
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
            Have Any Questions?
          </h2>


          <AccordionItem
            question="1. What is Advanced Java and what it is Important to learn?
"
            answer="Advanced Java is used for developing web and enterprise applications using tools like Servlets, JSP, and frameworks like Spring."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />


          <AccordionItem
            question="2. What is the difference between Core Java and Advanced Java?
 "
            answer=" Core Java covers basic programming concepts, while Advanced Java focuses on web, network, and enterprise-level application development."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

           <AccordionItem
            question="3. Can I build real projects with Advanced Java?

"
            answer=" Absolutely! You'll work on dynamic web applications using Servlets, JSP, JDBC, Spring, and Hibernate."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Is Advanced Java course updated as per the latest industry trends?
"
            answer=" Yes, most good institutes update their curriculum to match current job market requirements."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="5. What is the role of Spring Framework in advance java course?
"
            answer=" Spring helps in building scalable, secure, and structured enterprise apps—an essential part of Advanced Java training.

"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          
        </div>
      </div>
    </section>
  );
};

export default AdvJavaFAQ;
