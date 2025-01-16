import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What technologies do you use for full-stack development?",
    answer:
      "We utilize a modern tech stack including React.js for frontend development, Node.js with Express for backend services, and MongoDB/PostgreSQL for database management. We also implement RESTful APIs and GraphQL where appropriate.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    question: "How do you handle responsive design and mobile optimization?",
    answer:
      "We employ Tailwind CSS for responsive design, following a mobile-first approach. Our components are built to be adaptive across all device sizes, ensuring a consistent user experience on desktop, tablet, and mobile devices.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    question: "What's your approach to database design and management?",
    answer:
      "Our database architecture follows best practices for scalability and performance. We use both SQL and NoSQL databases depending on the project requirements, implementing proper indexing, normalization, and query optimization.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    question: "How do you ensure backend security and performance?",
    answer:
      "We implement robust security measures including JWT authentication, input validation, and SQL injection prevention. For performance, we utilize caching strategies, load balancing, and database optimization techniques.",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
];

const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-orange-100 p-2 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800">{question}</h3>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-gray-200 px-6 py-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const Answer = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Have Any Questions?
        </h2>
        <p className="mt-4 text-gray-600">
          Find answers to common questions about our full-stack development
          process
        </p>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition duration-300">
          View More Questions
        </button>
      </div>
    </div>
  );
};

export default Answer;
