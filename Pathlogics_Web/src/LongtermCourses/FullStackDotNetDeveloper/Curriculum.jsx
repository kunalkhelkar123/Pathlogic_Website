import React, { useState } from 'react';
import curriculam from  "../../assets/donetplacement.jpg"


const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-br from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-gray-800 hover:to-teal-500 transition-all duration-300"
        onClick={onToggle}
      >
        <h3 className="text-sm  font-semibold">{title}</h3>
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

export default function Accordian() {
  const [openSection, setOpenSection] = useState(null);
  const modules = [
    {
      title: "C# Programming Fundamentals",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Core C# (Syntax, OOP, Collections)</li>
          <li>Object-Oriented Programming (OOP)</li>
          <li>Data Structures & Algorithms in C#</li>
          <li>Asynchronous Programming with C#</li>
        </ul>
      )
    },
    {
      title: "ASP.NET Core & MVC",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>ASP.NET Core Application Development</li>
          <li>Building REST APIs with ASP.NET Core</li>
          <li>ASP.NET MVC Framework</li>
          <li>Authentication & Authorization (JWT, OAuth)</li>
        </ul>
      )
    },
    {
      title: "Database Management with .NET",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Relational Databases (SQL Server)</li>
          <li>Database Design & Schema Modeling</li>
          <li>ORM with Entity Framework</li>
          <li>Database Transactions & Optimization</li>
        </ul>
      )
    },
    {
      title: "Back-End Development with .NET Core",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Building RESTful APIs with .NET Core</li>
          <li>Microservices Architecture with .NET</li>
          <li>Service Layer & Repository Pattern</li>
          <li>Real-time Web Apps with SignalR</li>
        </ul>
      )
    },
    {
      title: "Career Support & Placements",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Live Projects & Hands-on Training</li>
          <li>Soft Skills & Resume Building</li>
          <li>Mock Interviews & Coding Challenges</li>
          <li>100% Job Assistance & Placement Support</li>
        </ul>
      )
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20  sm:pt-10   px-4 sm:px-6 lg:px-8">
     {/* image section */}
        <div className=''>
          <img className="rounded-md  sm:h-[550px]  " src={curriculam}></img>
        </div>
     
     
     {/* Course Curriculum section */}

      <div className="max-w-5xl mx-auto -mt-10 sm:mt-0">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12"> Dot Net Full stack development course curriculum</h1>
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
