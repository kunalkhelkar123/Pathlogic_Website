import React, { useState } from 'react';
import { motion } from 'framer-motion';

const practicesData = [
  {
    title: 'Infrastructure as Code (IaC)',
    description:
      'Infrastructure as Code (IaC) allows you to automate and manage your cloud infrastructure through code, eliminating the need for manual configurations. This practice ensures consistency, reduces errors, and speeds up deployment.',
    points: [
      'Automates infrastructure provisioning',
      'Reduces manual setup errors',
      'Ensures consistent and repeatable deployments',
      'Tools: AWS CloudFormation, Terraform, Ansible',
    ],
  },
  {
    title: 'Monitoring and Logging',
    description:
      'Monitoring and Logging are essential for tracking the health and performance of your cloud-based applications. Monitoring tools provide real-time insights, while logging helps diagnose issues by storing detailed event data.',
    points: [
      'Monitors system health in real-time',
      'Provides insights for troubleshooting and optimization',
      'Logs application activities and errors',
      'Tools: AWS CloudWatch, AWS CloudTrail, ELK Stack',
    ],
  },
  {
    title: 'CI/CD Pipeline',
    description:
      'A CI/CD pipeline automates the process of integrating, testing, and deploying code changes, ensuring faster and more reliable software delivery. It streamlines development by automating workflows from code commit to deployment.',
    points: [
      'Automates testing and deployment',
      'Speeds up development cycles',
      'Reduces human error in code integration',
      'Tools: AWS CodePipeline, Jenkins, GitLab CI',
    ],
  },
  {
    title: 'AWS Cloud Development Kit (CDK)',
    description:
      'The AWS Cloud Development Kit (CDK) simplifies cloud infrastructure management by allowing developers to define AWS resources using familiar programming languages like Python, JavaScript, or TypeScript.',
    points: [
      'Defines cloud resources in code',
      'Reduces manual configuration',
      'Integrates seamlessly with AWS services',
      'Languages: Python, TypeScript, Java, C#',
    ],
  },
];

const DotNetTools = () => {
  const [showMore, setShowMore] = useState(false);
  const visiblePractices = showMore ? practicesData : practicesData.slice(0, 2);

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Essentials Practices Covered in AWS DevOps Course in Pune
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {visiblePractices.map((practice, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 text-2xl font-semibold mb-2">{practice.title}</h4>
              <p className="text-black mb-3">{practice.description}</p>
              <ul className="list-disc list-inside text-black space-y-1">
                {practice.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition"
          >
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DotNetTools;
