import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left rounded-lg mb-4 overflow-hidden shadow-sm">
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
        <div className="p-4 bg-gray-100 text-gray-900 transition-all duration-300">
          <p className="leading-relaxed">{answer}</p>
          {children}
        </div>
      )}
    </div>
  );
};

const AngularFAQ = () => {
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
            Angular JS Course in Pune FAQ’s
          </h2>

          <AccordionItem
            question="1. What is Angular?"
            answer="Angular is a powerful, TypeScript-based frontend framework developed by Google. It's used to build dynamic, single-page web applications with clean, scalable, and high-performance code. It’s the modern successor to AngularJS, offering advanced features like reactive forms, routing, and component-based architecture."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. What are the advantages of learning Angular?"
            answer="Learning Angular gives you the skills to build fast, responsive web applications that scale easily. It’s backed by Google, widely used in the industry, and offers powerful features like two-way data binding, reusable components, and strong community support, making you a valuable asset to any development team."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What are the key highlights of AngularJS?"
            answer="Key highlights of AngularJS include two-way data binding, built-in directives, dependency injection, modular architecture, and easy integration with RESTful APIs—making development faster, cleaner, and more efficient."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. What is the average salary after learning AngularJS course in Pune?"
            answer="The average salary beginners can expect is ₹3.5–6 LPA, while experienced developers often earn ₹8–15+ LPA. With strong skills and project experience, AngularJS developers are in high demand across startups and tech companies."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default AngularFAQ;
