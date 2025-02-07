import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <button
        className="w-full bg-gradient-to-r from-gray-900 to-teal-600 text-white px-6 py-4 flex justify-between items-center hover:from-teal-600 hover:to-gray-800 transition-all duration-300"
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

export default function DevopsModules() {
  const [openSection, setOpenSection] = useState(null);

  const modules = [
    {
      title: "Continuous Integration & Continuous Deployment (CI/CD)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to CI/CD concepts</li>
          <li>Setting Up CI/CD Pipelines (GitHub Actions, Jenkins, Travis CI)</li>
          <li>Automating Testing in CI/CD</li>
          <li>Deployment to Staging & Production Environments</li>
        </ul>
      )
    },
    {
      title: "Containerization with Docker",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Docker and Containers</li>
          <li>Creating and Managing Docker Images</li>
          <li>Docker Compose for Multi-Container Applications</li>
          <li>Best Practices for Docker in DevOps</li>
        </ul>
      )
    },
    {
      title: "Orchestration with Kubernetes",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Kubernetes and Containers Orchestration</li>
          <li>Setting Up Kubernetes Clusters</li>
          <li>Deploying Applications in Kubernetes</li>
          <li>Scaling and Managing Kubernetes Resources</li>
        </ul>
      )
    },
    {
      title: "Infrastructure as Code (IaC) with Terraform",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Introduction to Infrastructure as Code</li>
          <li>Writing Terraform Configurations</li>
          <li>Provisioning Infrastructure on Cloud Providers (AWS, Azure, GCP)</li>
          <li>Versioning and Managing Infrastructure with Git</li>
        </ul>
      )
    },
    {
      title: "Cloud Deployment with AWS & Azure",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up and Managing Cloud Infrastructure (AWS & Azure)</li>
          <li>Automating Cloud Deployments</li>
          <li>Managing Cloud Resources with Terraform</li>
          <li>Security and Cost Optimization in Cloud Deployments</li>
        </ul>
      )
    },
    {
      title: "Monitoring & Logging with Prometheus and Grafana",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up Monitoring for Applications and Infrastructure</li>
          <li>Configuring Prometheus for Metrics Collection</li>
          <li>Visualizing Metrics and Logs with Grafana</li>
          <li>Alerting and Troubleshooting DevOps Pipelines</li>
        </ul>
      )
    },
    {
      title: "Security in DevOps (DevSecOps)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding DevSecOps Principles</li>
          <li>Integrating Security in CI/CD Pipelines</li>
          <li>Automating Security Testing and Vulnerability Scanning</li>
          <li>OWASP Top 10 Security Risks and Mitigations</li>
        </ul>
      )
    },
    {
      title: "Automation with Jenkins & Ansible",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Setting Up Jenkins for Automation Tasks</li>
          <li>Creating and Managing Jenkins Pipelines</li>
          <li>Automating Infrastructure with Ansible</li>
          <li>CI/CD Pipeline Automation Best Practices</li>
        </ul>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-12">Full Stack DevOps Program</h1>
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
