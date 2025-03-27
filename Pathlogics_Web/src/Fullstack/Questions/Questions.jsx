import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left  justify-start rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full text-left  justify-start flex justify-between  p-4 text-sm font-semibold transition-all duration-300 ${
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

const Accordion = () => {
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
            question="1. What is a full Stack development course?"
            answer="A Full Stack Development course teaches you how to create complete websites and web apps, covering both the front-end (client-side) and back-end (server-side)."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />


          <AccordionItem
            question="2. Is full stack developer a good job?"
            answer="Yes, being a Full Stack Developer is a great job because you can work on both the front and back ends of websites or apps. It's a high-demand role with good pay and many career opportunities."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. Can a non-IT person learn Full stack development?"
            answer="Absolutely! Full Stack Development can be learned by anyone with the dedication and interest to build web applications. With consistent effort, non-IT individuals can excel in this field."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. What is the salary of Full Stack Developer in Pune?"
            answer="The salary of a Full Stack Developer in Pune can range starting from 5 LPA to 12 LPA depending on experience, skills, and the company."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            question="5. What types of projects will I work on during a course?"
            answer="During a Full Stack Development course, you’ll work on hands-on projects such as building responsive websites, creating APIs, developing databases, and combining back-end and front-end features. These Real time projects will  help you build a strong portfolio.."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
