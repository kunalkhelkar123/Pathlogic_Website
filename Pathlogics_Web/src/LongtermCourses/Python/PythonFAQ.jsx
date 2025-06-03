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
            Full Stack Python Development Course FAQ’s
          </h2>

          <AccordionItem
            question="1. What is Python, why it is Demanding?"
            answer="Python is a versatile, beginner-friendly programming language known for its simplicity and wide range of applications. Its demand is high due to its use in web development, data science, automation, AI, and more."

            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. Is python difficult to learn non-programmer?"
            answer="No, Python is one of the most beginner-friendly languages out there. making it a great starting point for non-programmers. Many learners pick it up quickly with basic practice."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What is Python programming used for?"
            answer="From developing apps to automating daily tasks and exploring data science, Python offers flexibility and wide-ranging applications for modern tech needs."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Is there installments Available to pay python full stack developer course fees in pune?"
            answer="Yes, we provide various payment plans to reduce the financial burden. You may select from a variety of payment options, including our no-cost EMI option. Contact our admissions staff to discuss the best payment plan for your situation"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            question="5. What is the average salary of a Full Stack Python Developer in pune?"
            answer="The average salary for a Full Stack Python Developer in India ranges from ₹4.5 to ₹10 LPA, depending on experience, skills, and location."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
