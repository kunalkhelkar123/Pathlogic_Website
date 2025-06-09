import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/FAQ.jpg";

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

const ManualFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. Why should I choose Manual Testing over Automation Testing?",
      answer:
        "Manual testing is ideal for projects that require human intuition, exploratory testing, and validation of user-centric features. It is also essential for validating UI/UX behavior and performing ad-hoc tests.",
    },
    {
      question: "2. What is the duration of the Manual Testing course?",
      answer:
        "The course duration is 4 months, offering comprehensive training in manual testing techniques, bug identification, test case creation, and quality assurance.",
    },
    {
      question: "3. Do you offer any career support or job assistance?",
      answer:
        "Yes, we provide placement assistance, including job referrals, resume building, and interview preparation. We partner with top organizations to help you secure your first job in software testing.",
    },
    {
      question: "4. How do I stay updated with the latest trends in Manual Testing?",
      answer:
        "We provide access to a community of professionals and offer continuous learning opportunities through webinars, workshops, and industry news updates.",
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
            Manual Testing Training In Pune FAQ’s
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

export default ManualFaq;
