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

const DotnetFaq= () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What is the duration of the Dot Net with Angular course?",
      answer:
        "The course duration is 4 months, allowing students to gain in-depth knowledge of both front-end and back-end development.",
    },
    {
      question: "2. Will I get placement assistance after completing the course?",
      answer:
        "Yes, we offer placement support, including resume building, mock interviews, and job referrals to help you start your career.",
    },
    {
      question: "3. Will I get help if I face doubts during the course?",
      answer:
        "Definitely! Our trainers provide personalized doubt-clearing sessions, and you’ll also get access to learning resources.",
    },
    {
      question: "4. What’s the difference between this course and other web development courses?",
      answer:
        "This course uniquely combines Microsoft’s .NET backend with Google’s Angular frontend, making it a powerful and in-demand combination for modern enterprise applications.",
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
            Dot NET with Angular Course in Pune FAQ’s
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

export default DotnetFaq;
