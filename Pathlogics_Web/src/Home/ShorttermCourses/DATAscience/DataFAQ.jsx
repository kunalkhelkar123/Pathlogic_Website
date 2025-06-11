import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../../../assets/FAQ.jpg";

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 text-left rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
        }`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900 transition-all duration-300 whitespace-pre-line">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Component
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
            Python Data Science Course FAQ’s
          </h2>

          <AccordionItem
            question="1. What is Data Science with Python Certification?"
            answer="The Data Science with Python Certification validates your skills in Python for data analysis, machine learning, and data visualization. It proves your ability to work with real-world datasets, build predictive models, and apply data science techniques to solve business problems."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          />

          <AccordionItem
            question="2. What skills should a Data Science Expert know?"
            answer={`A Data Science Expert should be proficient in:

- Python Programming Concepts
- Data Wrangling & Exploration
- Data Visualization Techniques
- Mathematical & Statistical Computing
- Web Scraping with Python
- Natural Language Processing using Scikit-learn

These skills help in analyzing data, building models, and making data-driven decisions.`}
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. What industries use Data Science most?"
            answer="Data Science is widely used in industries like finance, healthcare, retail, manufacturing, telecom, marketing, logistics, and energy for data-driven decision-making."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Is there placement support?"
            answer="Yes, we offer placement assistance including resume building, mock interviews, and interview scheduling."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
