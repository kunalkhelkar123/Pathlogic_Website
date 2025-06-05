import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left justify-start rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between p-4 text-sm font-semibold transition-all duration-300 ${isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
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

const DigitalFaqs = () => {
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

          {/* Digital Marketing FAQs */}
          <AccordionItem
            question="1. How can I join & start Digital Marketing courses in Pune?"
            answer="Just reach out to our website and fill out the registration form to get started. Learn top digital skills and become job-ready in a few months."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. What is the scope of Digital Marketing?"
            answer="The digital marketing industry in India is set to generate over 20 lakh jobs by 2025, driven by the rapid shift of businesses online. With growing demand for roles like SEO specialist, social media manager, and performance marketer, the career scope is massive and future-proof."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What is the average salary package after doing Digital Marketing classes in Pune?"
            answer="The average salary after completing Digital Marketing classes in Pune ranges from ₹3 LPA to ₹6 LPA for freshers. With 2–3 years of experience, professionals can earn ₹6 LPA to ₹12 LPA or more, depending on skills and certifications."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Do you provide 100% job placement in your Digital Marketing Training Institute in Pune?"
            answer="Yes, at Pathlogics, we provide 100% placement assistance to all our Digital Marketing students. From resume building to mock interviews and connecting with hiring partners, we support you every step of the way until you land your first job!"
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalFaqs;
