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
            question="1. Will i get placement after completing full stack web development course in pune ?"
            answer="Yes. Once you complete your Full-Stack Web Training in Pune, pathlogics will provide 100% Placement Assistance."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />


          <AccordionItem
            question="2. What is full stack web developer course fees in pune? "
            answer=" Pathologics Provides you with the most affordable fee structure of anyone in India for the Full-Stack Web developer course in Pune and Certification program."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. How can i start full stack web development course  ?"
            answer=" Fill out the  form to Enroll. our career guides will get in touch with you and give you personal counseling about our courses such as Full stack web development , java developer, .Net developer course in pune."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4.What are the different payment methods available?"
            answer=" The different payment methods accepted by us are Cash, Net Banking, Cheque, Debit Card, Credit Card.
"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            question="5. Will I Get A Full Stack Development Course Completion Certification From Pathlogics?"
            answer="Yes, after successfully completing the course you will be awarded a course completion certificate from Pathlogics."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
