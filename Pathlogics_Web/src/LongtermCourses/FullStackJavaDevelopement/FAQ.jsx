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
            Have Any Questions?
          </h2>


          <AccordionItem
            question="1. Is Full stack java developer course in pune suitable for beginner?"
            answer="Yes, the Java course at pathologicis designed for both beginners and experienced developers. The course begins with basic concepts gradually progressing to more advanced topics. No prior knowledge of Java is required."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />


          <AccordionItem
            question="2. How can I enroll in the java Classes in pune? "
            answer=" To enroll, simply fill out the given form. Once we received a request, Our team will contact you ."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. Is there installments Available to pay java full stack developer course fees in pune?"
            answer=" Yes, we provide various payment plans to reduce the financial burden. You may select from a variety of payment options, including our no-cost EMI option. Contact our admissions staff to discuss the best payment plan for your situation"
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Are online classes available for Java classes in Pune?"
            answer=" Yes, online classes for Java are available in Pathlogics, Pune, offer flexible online courses to help you learn from anywhere.
"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            question="5. Will I get hands-on experience with real-time projects?"
            answer="Students enrolling in the pathologics Java Full Stack Developer course in Pune receive hands-on, project-based training focused on real-world industry applications."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
