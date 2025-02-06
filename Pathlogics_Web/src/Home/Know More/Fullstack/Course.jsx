'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const moduleContents = [
  {
    title: "Session 1",
    subtitle: "Introduction to AWS DevOps and Cloud Infrastructure",
    topics: [
      {
        title: "Overview of AWS Services",
      },
      {
        title: "AWS DevOps Basics",
      },
      {
        title: "AWS Cloud Infrastructure Setup",
        subtopics: [
          "EC2 Instances",
          "VPC and Subnets",
          "Security Groups and IAM",
          "S3 Storage",
          "Route 53 and DNS Setup"
        ]
      },
      {
        title: "Continuous Integration and Continuous Deployment (CI/CD)",
        subtopics: [
          "AWS CodePipeline",
          "AWS CodeBuild",
          "AWS CodeDeploy"
        ]
      },
      {
        title: "Monitoring and Logging with AWS CloudWatch",
      },
      {
        title: "Infrastructure as Code with AWS CloudFormation",
      },
      {
        title: "Auto Scaling and Load Balancing in AWS",
      },
      {
        title: "Security Best Practices in AWS DevOps",
      }
    ]
  },
  {
    title: "Session 2",
    subtitle: "Advanced AWS DevOps Practices",
    topics: [
      {
        title: "Automating Infrastructure with Terraform",
      },
      {
        title: "Deploying Containers using AWS ECS & EKS",
      },
      {
        title: "CI/CD with Docker and Kubernetes on AWS",
      },
      {
        title: "AWS Lambda and Serverless Architectures",
      },
      {
        title: "Secrets Management with AWS Secrets Manager",
      },
      {
        title: "Monitoring Distributed Systems with AWS X-Ray",
      }
    ]
  },
  {
    title: "Session 3",
    subtitle: "Optimizing AWS DevOps Pipelines",
    topics: [
      {
        title: "Pipeline Optimization Strategies",
      },
      {
        title: "Cost Optimization for DevOps on AWS",
      },
      {
        title: "Infrastructure Monitoring with AWS CloudWatch Metrics and Logs",
      },
      {
        title: "Implementing Auto Healing and Self-Healing Systems",
      }
    ]
  },
  {
    title: "Session 4",
    subtitle: "AWS Security and Compliance in DevOps",
    topics: [
      {
        title: "AWS Identity and Access Management (IAM) in DevOps",
      },
      {
        title: "Automating Security Compliance with AWS Config",
      },
      {
        title: "Security Auditing with AWS CloudTrail",
      },
      {
        title: "Best Practices for Data Encryption and Backup",
      }
    ]
  }
]

export default function ProgramModules() {
  const [expandedSession, setExpandedSession] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          AWS DevOps Program Modules
        </h1>
        
        <div className="space-y-4">
          {moduleContents.map((session) => (
            <div key={session.title} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setExpandedSession(
                  expandedSession === session.title ? null : session.title
                )}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-xl font-semibold text-gray-900">
                  {session.title}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-orange-500 transform transition-transform duration-200 ${
                    expandedSession === session.title ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedSession === session.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      {session.subtitle && (
                        <div className="text-orange-500 font-medium mb-4">
                          {session.subtitle}
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        {session.topics.map((topic, index) => (
                          <div key={index}>
                            <div className="font-medium text-gray-900">
                              {topic.title}
                            </div>
                            {topic.subtopics && (
                              <ul className="mt-2 ml-6 space-y-1">
                                {topic.subtopics.map((subtopic, subIndex) => (
                                  <li 
                                    key={subIndex}
                                    className="text-gray-600 before:content-['-'] before:mr-2"
                                  >
                                    {subtopic}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
