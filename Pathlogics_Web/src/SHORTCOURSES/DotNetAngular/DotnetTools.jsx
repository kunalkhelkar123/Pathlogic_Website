import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Visual Studio / VS Code",
    description: `These are the go-to IDEs (Integrated Development Environments) for developers working with .NET and Angular. Visual Studio is feature-rich, perfect for .NET development, while VS Code is a lightweight, fast editor that’s great for Angular. Both tools are highly customizable to suit your workflow.`,
    points: [
      "Visual Studio: Ideal for large-scale applications and full-fledged .NET projects.",
      "VS Code: Lightweight, fast, and perfect for Angular frontend development.",
      "Both have extensions and debugging tools that make coding more efficient.",
    ],
  },
  {
    title: "SQL Server",
    description: `SQL Server is a powerful relational database management system that integrates smoothly with .NET applications. It helps store and manage your data, ensuring that your applications perform well and are scalable.`,
    points: [
      "Secure, scalable database for enterprise applications.",
      "Seamless integration with .NET using Entity Framework.",
      "Strong support for complex queries and transactions.",
    ],
  },
  {
    title: "Postman for API Testing",
    description: `Postman is your go-to tool for testing APIs. It allows you to send requests to your web services, check responses, and debug your code easily. It’s essential for making sure your .NET backend is communicating perfectly with the Angular frontend.`,
    points: [
      "Easy to use for sending API requests and checking responses.",
      "Helps ensure your APIs are working as expected before deployment.",
      "Useful for debugging and validating data flow between frontend and backend.",
    ],
  },
  {
    title: "Git / GitHub",
    description: `Git is a version control system that tracks changes to your code, while GitHub is a platform for hosting and sharing your code. Whether you’re working solo or in a team, GitHub makes collaboration smooth, and Git ensures you never lose your work.`,
    points: [
      "Git helps track changes, so you always know what’s updated.",
      "GitHub allows for collaboration and sharing with others.",
      "Essential for team-based development and code versioning.",
    ],
  },
];

const DotnetTools = () => {
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
          Essential Tools Covered In Our Dot Net with Angular Course
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Building powerful web applications with .NET Core and Angular goes beyond mastering C# code or understanding MVC architecture. It's about transforming real-world ideas into dynamic, scalable applications by leveraging the right tools and industry best practices.
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

export default DotnetTools;
