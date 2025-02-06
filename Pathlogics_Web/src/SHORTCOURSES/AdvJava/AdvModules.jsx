import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-r from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
        onClick={onToggle}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white px-6 py-4 text-gray-700 leading-relaxed">{content}</div>
      </div>
    </div>
  );
};

export default function AdvModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Advanced Java Overview",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Servlets and JSP</li>
          <li>JavaServer Faces (JSF)</li>
          <li>Enterprise JavaBeans (EJB)</li>
          <li>Java Naming and Directory Interface (JNDI)</li>
        </ul>
      )
    },
    {
      title: "Web Development with Java",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Java Web Application Architecture</li>
          <li>Building RESTful APIs with JAX-RS</li>
          <li>Java Servlets and Filters</li>
          <li>Integration with Frontend Frameworks</li>
        </ul>
      )
    },
    {
      title: "Spring Framework",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Spring Core Concepts</li>
          <li>Dependency Injection</li>
          <li>Spring MVC</li>
          <li>Spring Boot Basics</li>
        </ul>
      )
    },
    {
      title: "Hibernate & JPA",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to ORM</li>
          <li>Configuring Hibernate</li>
          <li>Hibernate Annotations</li>
          <li>Working with JPA Queries</li>
        </ul>
      )
    },
    {
      title: "Microservices Development",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Microservices</li>
          <li>Spring Cloud Basics</li>
          <li>Service Discovery and Load Balancing</li>
          <li>API Gateway Implementation</li>
        </ul>
      )
    },
    {
      title: "Testing & Debugging",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>JUnit and Mockito</li>
          <li>Integration Testing</li>
          <li>Debugging with IDE Tools</li>
          <li>Performance Testing</li>
        </ul>
      )
    },
    {
      title: "Advanced Java Project",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building Scalable Applications</li>
          <li>Integrating with Third-Party APIs</li>
          <li>Implementing Security Features</li>
          <li>Final Project Deployment</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Advanced Java Developer Program</h1>
        <div className="space-y-6">
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              title={module.title}
              content={module.content}
              isOpen={openSection === index}
              onToggle={() => setOpenSection(openSection === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
