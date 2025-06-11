import React, { useState } from 'react';
import { motion } from 'framer-motion';

const frameworksData = [
  {
    title: "Apex Framework",
    description: `Apex is Salesforce’s proprietary programming language used to write custom logic like triggers and classes. It’s ideal for building complex, scalable business solutions.`,
    points: [
      "Used for triggers, classes, and controllers",
      "Strongly typed and object-oriented",
      "Integrated with Salesforce database",
    ],
  },
  {
    title: "Lightning Component Framework (Aura + LWC)",
    description: `This framework powers modern, dynamic Salesforce UIs. You’ll work with Aura (legacy) and Lightning Web Components (LWC) to build fast, reusable, and mobile-friendly components.`,
    points: [
      "Build interactive UI in Salesforce",
      "Aura for legacy systems, LWC for modern apps",
      "Follows component-based architecture",
    ],
  },
  {
    title: "Aura Framework",
    description: `Aura is Salesforce’s original UI framework for building dynamic web applications. Though gradually being replaced by Lightning Web Components (LWC), Aura is still widely used in existing Salesforce orgs.`,
    points: [
      "Build reusable, interactive components",
      "Uses event-based communication model",
      "Essential for supporting older Salesforce apps",
    ],
  },
  {
    title: "API & Integration Frameworks",
    description: `Salesforce supports integration with external systems using REST and SOAP APIs. You’ll learn how to send, receive, and sync data securely.`,
    points: [
      "Build connected apps",
      "Use tools like Postman & Workbench",
      "Essential for real-time data exchange",
    ],
  },
];

const SalesforceFrameworks = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleFrameworks = showMore ? frameworksData : frameworksData.slice(0, 2);

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Essential Frameworks Covered in Our Salesforce Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Our Salesforce course covers powerful frameworks like Apex, LWC, Aura, and APIs. These tools are essential for building scalable business logic, responsive UIs, and real-time integrations within the Salesforce ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {visibleFrameworks.map((framework, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 text-2xl font-semibold mb-2">{framework.title}</h4>
              <p className="text-black mb-3">{framework.description}</p>
              <ul className="list-disc list-inside text-black space-y-1">
                {framework.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalesforceFrameworks;
