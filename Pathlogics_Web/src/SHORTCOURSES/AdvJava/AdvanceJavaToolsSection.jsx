import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "JDBC (Java Database Connectivity)",
    description:
      "JDBC is a key API used to connect Java applications with relational databases. You'll learn how to write SQL queries in Java, handle database operations like insert, update, delete, and manage result sets.",
    points: [
      "Connect Java apps to MySQL, Oracle, and more",
      "Execute and manage SQL queries through Java",
      "Handle transactions and error management",
    ],
  },
  {
    title: "Servlets",
    description:
      "Servlets let your Java code talk to web browsers, making your apps interactive and dynamic. You’ll learn how to build smart, server-side features that respond to user actions.",
    points: [
      "Handle form inputs and user requests",
      "Manage sessions using cookies or URL rewriting",
      "Build reusable backend components for web apps",
    ],
  },
  {
    title: "JSP (JavaServer Pages)",
    description:
      "JSP makes it easy to build dynamic websites by mixing Java with HTML. You'll learn how to keep design and logic separate, making your code cleaner and easier to manage.",
    points: [
      "Build interactive and user-friendly pages",
      "Use simple tags and Java expressions",
      "Connect seamlessly with Servlets and databases",
    ],
  },
  {
    title: "Spring Framework (Spring Core + Spring MVC)",
    description:
      "Spring makes it easier to build clean, flexible apps by reducing tight code dependencies. You'll learn how to manage components smartly and build structured web applications.",
    points: [
      "Set up and manage Spring Beans effortlessly",
      "Build responsive web apps with Spring MVC",
      "Handle forms, validations, and errors smoothly",
    ],
  },
  {
    title: "Hibernate (ORM Tool)",
    description:
      "Hibernate makes it easier to work with databases by reducing repetitive code. You'll learn how to link Java classes to database tables and handle data smoothly.",
    points: [
      "Work with databases using little to no SQL",
      "Map classes with annotations or XML",
      "Handle data relationships like OneToMany, ManyToOne, etc.",
    ],
  },
];

const AdvanceJavaToolsSection = () => {
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
          Essential Tools Covered in the Advanced Java Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          In our Advanced Java course, you'll dive deeper into real-world application development using powerful tools and frameworks like  <strong>JDBC, Servlets, JSP, Spring, and Hibernate</strong>. You'll get hands-on experience in building dynamic web apps, connecting databases, and managing backend logic, just like professionals do. This course equips you with the practical skills needed to develop enterprise-level solutions and prepares you for job-ready roles in software development.
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

export default AdvanceJavaToolsSection;
