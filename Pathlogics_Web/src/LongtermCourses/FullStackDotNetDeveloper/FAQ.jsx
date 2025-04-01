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
          Best DevOps Classes in Pune FAQ’s:
          </h2>


          <AccordionItem
            question="1. What is a Full Stack .NET Developer Course?"
            answer=" A Full Stack .NET Developer course covers both front-end and back-end development using the Microsoft .NET framework."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />


          <AccordionItem
            question="2. What makes Pathlogics different from other IT training institutes in Pune? "
            answer="Pathlogics sets itself apart by offering internships with a stipend of ₹7,000-₹10,000 immediately after certification. To ensures students gain practical experience, right from the start. "
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What is the expected salary after completing full Stack .Net course in Pune?"
            answer=" After completing full Stack .Net course in Pune?, the average expected salary is around ₹3.5 LPA, with top performers earning as high as ₹16 LPA, depending on skills, experience."
            isOpen={openIndex === 3}  
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Do we have doubt support in this program?"
            answer="  Yes, doubt support is provided throughout the program. Students can get their queries resolved through expert guidance.   
"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          {/* <AccordionItem
            question="5. What industries require DevOps skills?"
            answer="DevOps skills are highly in demand across various industries, including IT, finance, healthcare,
             e-commerce, retail, telecommunications, and more."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
