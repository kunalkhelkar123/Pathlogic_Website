'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    question: "What is AWS DevOps?",
    answer: "AWS DevOps is a set of practices and tools that combine software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality."
  },
  {
    question: "How do I get started with AWS DevOps?",
    answer: "Start by understanding the basic AWS services like EC2, S3, IAM, and VPC. Then, explore DevOps tools such as AWS CodePipeline, CodeDeploy, and CodeBuild for CI/CD pipelines."
  },
  {
    question: "What are the benefits of using AWS DevOps?",
    answer: "AWS DevOps offers faster time to market, improved collaboration between development and operations teams, continuous integration, scalability, and automation of infrastructure."
  },
  {
    question: "What is the role of CloudFormation in AWS DevOps?",
    answer: "AWS CloudFormation allows you to define your cloud resources in code and manage your infrastructure as code, making it easier to automate and scale your DevOps pipelines."
  },
  {
    question: "What is AWS CodePipeline?",
    answer: "AWS CodePipeline is a fully managed continuous delivery service that automates the build, test, and deployment phases of your release process."
  },
  {
    question: "How does AWS CodeBuild help in DevOps?",
    answer: "AWS CodeBuild automates the building of code, running tests, and generating artifacts. It integrates with other AWS services like CodePipeline for a fully automated build process."
  },
  {
    question: "What is the use of AWS Elastic Beanstalk?",
    answer: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. It automatically handles the deployment, from capacity provisioning to load balancing."
  },
  {
    question: "How do I secure my AWS DevOps environment?",
    answer: "Use IAM roles and policies to restrict access, enable encryption for sensitive data, monitor logs with AWS CloudTrail, and ensure continuous security practices with AWS security tools."
  },
  {
    question: "What is Infrastructure as Code (IaC)?",
    answer: "Infrastructure as Code is a DevOps practice where infrastructure is managed and provisioned through code, allowing automated and repeatable deployments using tools like AWS CloudFormation or Terraform."
  },
  {
    question: "What is AWS Lambda and how does it fit into DevOps?",
    answer: "AWS Lambda is a serverless compute service that automatically runs code in response to events. It is used in DevOps for building scalable, event-driven architectures with no need to manage servers."
  }
]

export default function Douts() {
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [viewMore, setViewMore] = useState(false)

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Have Any Questions?
        </h1>
        
        <div className="space-y-4">
          {questions.slice(0, viewMore ? questions.length : 10).map((qa, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {qa.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${
                    expandedQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-orange-100 border-t border-orange-500">
                      <div className="text-gray-600">
                        {qa.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <button
          onClick={() => setViewMore(!viewMore)}
          className="mt-6 py-2 px-4 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors duration-200 mx-auto block"
        >
          {viewMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}
