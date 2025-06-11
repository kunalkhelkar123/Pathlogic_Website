import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../assets/FAQ.jpg";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm">
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
        <div className="p-4 bg-gray-100 text-gray-900">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const SalesforceFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How long is the Salesforce course duration?",
      answer:
        "The course duration is 4 months, providing in-depth knowledge and hands-on experience in CRM development.",
    },
    {
      question: "2. What is Salesforce course fees in Pune?",
      answer:
        "At Pathlogics, we offer flexible fee structures with EMI options and occasional discounts to make learning more accessible. Feel free to contact us directly for the latest fee details and special offers.",
    },
    {
      question: "3. Will I get a certificate after completing the Salesforce course?",
      answer:
        "Yes, you’ll receive a certification from Pathlogics upon successful completion, along with guidance to help you prepare for your first job.",
    },
    {
      question: "4. How much can I earn as a Salesforce Developer?",
      answer:
        "Entry-level Salesforce Developers can earn between ₹5-8 LPA, while experienced professionals can earn ₹12+ LPA, depending on skills and experience.",
    },
  ];

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
            Salesforce Course in Pune FAQ’s
          </h2>

          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceFaq;
