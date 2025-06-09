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

const PowerBIFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What is Data Visualization?",
      answer:
        "Data visualization is the process of turning raw data into visual formats like charts, graphs, and dashboards. It helps make complex information easier to understand, spot trends quickly, and support better decision-making.",
    },
    {
      question: "2. What is the Power BI course duration and fees?",
      answer:
        "The Power BI course duration is 4 months, providing in-depth knowledge and hands-on experience in data analysis and visualization. The Power BI course fees offer great value for the quality of training. For detailed fee information, please contact us directly or visit our website.",
    },
    {
      question: "3. What is the future scope of Power BI skills?",
      answer:
        "Power BI skills are in high demand as businesses increasingly rely on data to make strategic decisions. With its robust data analysis and visualization capabilities, learning Power BI opens up opportunities in business intelligence, data analysis, and reporting across various industries.",
    },
    {
      question: "4. Is Power BI a good career investment?",
      answer:
        "Yes, Power BI is an excellent career investment. As companies rely on data visualization and analysis for better business outcomes, the demand for Power BI professionals will continue to increase.",
    },
    {
      question: "5. How can I start Power BI Course at Pathlogics?",
      answer:
        "Fill out the form on our website to Enroll. Our career guides will get in touch with you and give you personal counseling about our Power BI training courses.",
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
            Power BI Course FAQ’s
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

export default PowerBIFaq;
