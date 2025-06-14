import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Java",
    description:
      "Java is a powerful, object-oriented programming language used for developing robust, scalable back-end applications. It's widely known for its portability across different platforms and is a trusted choice for enterprise-level solutions.",
    points: [
      "Core language for server-side logic and application development.",
      "Known for its platform independence, running on any system with Java Virtual Machine (JVM).",
      "Ideal for large-scale applications requiring high performance and security.",
    ],
  },
  {
    title: "Spring",
    description:
      "Spring is a comprehensive Java framework used to build enterprise-level applications. It provides powerful tools for dependency injection, transaction management, and security, helping developers create efficient and maintainable applications.",
    points: [
      "Spring Boot simplifies the creation of microservices and web apps.",
      "Manages application components and their lifecycle using dependency injection.",
      "Offers built-in support for security, data access, and web services.",
    ],
  },
  {
    title: "MySQL",
    description:
      "MySQL is a reliable and fast relational database management system widely used to store structured data. It’s an open-source solution known for its scalability, making it ideal for web applications that require efficient data handling and management.",
    points: [
      "Relational database management system (RDBMS) for structured data.",
      "Supports SQL queries to interact with and manipulate data.",
      "Ideal for applications requiring consistent, fast data retrieval.",
    ],
  },
  {
    title: "Hibernate",
    description:
      "Hibernate is an ORM (Object-Relational Mapping) tool that simplifies database interactions in Java applications. It converts Java objects to database tables and vice versa, reducing the need for complex SQL and making it easier to manage database transactions.",
    points: [
      "ORM tool that maps Java objects to database tables.",
      "Simplifies database queries and transaction management.",
      "Supports automatic generation of SQL queries, reducing development time.",
    ],
  },
];

const FullsatckJavaTools = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleTools = showMore ? toolsData : toolsData.slice(0, 2);

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Essential Tools/ Frameworks Covered in Our Salesforce Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Our Salesforce course in Pune covers core programming and frameworks such as <strong>Java, Spring, MySQL, and Hibernate</strong>. These tools form the backbone of enterprise-level software development and equip you with the knowledge to work on scalable and secure web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {visibleTools.map((tool, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 text-2xl font-semibold mb-2">{tool.title}</h4>
              <p className="text-black mb-3">{tool.description}</p>
              <ul className="list-disc list-inside text-black space-y-1">
                {tool.points.map((point, i) => (
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

export default  FullsatckJavaTools;
