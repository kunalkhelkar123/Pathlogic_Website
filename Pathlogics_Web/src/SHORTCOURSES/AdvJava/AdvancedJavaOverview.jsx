import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // or replace with <a> if not using React Router

const AdvancedJavaOverview = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Understanding Advanced Java & Its Career Impact
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* What is Advanced Java */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600 dark:text-orange-400 mb-4">
              What is Advanced Java and Why Should You Learn It?
            </h4>
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
              Advanced Java refers to the next level of Java programming after Core Java. It focuses on building web-based, enterprise-level applications using technologies like Servlets, JSP, JDBC, and frameworks like Spring and Hibernate. It’s widely used for creating powerful backend systems and dynamic websites. Learning Advanced Java helps you build real-world applications, improves your job prospects, and opens doors to roles in software development, web development, and enterprise tech. If you already know Core Java, this is your next step toward becoming a full-fledged Java developer.
            </p>
          </div>

          {/* Scope of Advanced Java */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600 dark:text-orange-400 mb-4">
              What is Scope of Advanced Java?
            </h4>
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
              The Scope of Advanced Java is vast and growing! It’s widely used in enterprise-level applications, especially for building dynamic web apps, APIs, and backend systems. With frameworks like Spring, Hibernate, and Struts, developers can build scalable and secure solutions. Advanced Java skills are in high demand in sectors like banking, e-commerce, healthcare, and IT services. It also forms the backbone of many Android and cloud-based applications. So if you're aiming for a career in software development, mastering Advanced Java gives you a strong edge.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            to="/java-full-stack-developer-course-in-pune" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition duration-300"
          >
            
            Know More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvancedJavaOverview;
