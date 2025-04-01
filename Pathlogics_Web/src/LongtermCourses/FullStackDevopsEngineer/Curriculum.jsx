import React, { useState } from 'react';
import curriculam from  "../../assets/devops.jpg"


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
      title: "Linux Fundamentals & Shell Scripting",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Linux Operating System Basics</li>
          <li>File Management & Permissions</li>
          <li>Shell Scripting (Bash, Zsh)</li>
          <li>System Monitoring & Performance Tuning</li>
        </ul>
      )
    },
    {
      title: "Version Control with Git & GitHub",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Git Basics & Commands</li>
          <li>Branching & Merging</li>
          <li>Collaboration with GitHub</li>
          <li>Version Control Workflows</li>
        </ul>
      )
    },
    {
      title: "Containerization with Docker",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Docker Architecture & Concepts</li>
          <li>Creating & Managing Docker Containers</li>
          <li>Docker Compose & Multi-Container Setup</li>
          <li>Container Orchestration with Docker Swarm</li>
        </ul>
      )
    },
    {
      title: "CI/CD & Jenkins Automation",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Continuous Integration & Continuous Deployment</li>
          <li>Jenkins Pipeline Setup</li>
          <li>Automation with Groovy Scripting</li>
          <li>Integrating with Docker & Kubernetes</li>
        </ul>
      )
    },
    {
      title: "Cloud Computing with AWS & Azure",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Cloud Concepts & Services</li>
          <li>Virtual Machines & Networking in AWS/Azure</li>
          <li>Cloud Storage & Databases</li>
          <li>Infrastructure as Code with Terraform</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen  bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20  py-10 px-4 sm:px-8 lg:px-20">
     {/* image section */}
        <div className=''>
          <img className="sm:h-[550px] rounded-md " src={curriculam}></img>
        </div>
     
     
     {/* Course Curriculum section */}

      <div className="max-w-5xl mx-auto sm:mt-0 mt-[-50px]">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-12"> DevOps Training Course Curriculum</h1>
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
