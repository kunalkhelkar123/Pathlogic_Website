'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courseModules = [
  { id: "devops-overview", title: "Introduction to DevOps", description: "Learn the fundamentals of DevOps and its importance in cloud computing" },
  { id: "aws-devops-tools", title: "AWS DevOps Tools and Services", description: "Explore various AWS tools and services used in DevOps practices" },
  { id: "cloud-computing", title: "Cloud Computing Fundamentals", description: "Learn about cloud architecture, cloud computing models, and AWS services" },
  { id: "ci-cd-pipeline", title: "CI/CD Pipeline with AWS", description: "Master Continuous Integration and Continuous Deployment using AWS tools" },
  { id: "infrastructure-as-code", title: "Infrastructure as Code (IaC)", description: "Learn to automate infrastructure deployment using IaC principles on AWS" },
  { id: "monitoring-logging", title: "Monitoring and Logging in AWS", description: "Set up monitoring and logging systems to ensure application health on AWS" },
  { id: "aws-security", title: "Security in AWS DevOps", description: "Learn best practices for ensuring security in DevOps pipelines on AWS" },
  { id: "scaling-performance", title: "Scaling and Performance Optimization", description: "Understand how to scale your infrastructure and optimize performance in the cloud" },
  { id: "containerization", title: "Containers and Kubernetes on AWS", description: "Learn how to deploy and manage containers using Kubernetes and AWS services" },
  { id: "serverless-architecture", title: "Serverless Architecture with AWS", description: "Dive into serverless computing and AWS Lambda for scalable applications" },
  { id: "automation", title: "Automation and Configuration Management", description: "Automate configuration and system management using AWS tools like CloudFormation and Terraform" }
]

export default function CourseOverview() {
  const [selectedModule, setSelectedModule] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AWS DevOps Course Overview</h1>
          <p className="text-lg text-gray-600">Comprehensive training program covering essential AWS DevOps concepts</p>
        </div>

        {/* Course Modules - Circuit Board Design */}
        <div className="relative">
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center z-10">
            <div className="text-lg font-bold text-center text-gray-800">
              AWS DEVOPS
              <br />
              COURSE
              <br />
              OVERVIEW
            </div>
          </div>

          {/* Circuit Lines */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 600">
            <g className="text-gray-300" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M500 50 L500 230" />
              <path d="M500 370 L500 550" />
              <path d="M180 300 L420 300" />
              <path d="M580 300 L820 300" />
              {courseModules.map((_, index) => {
                const angle = (index / courseModules.length) * 2 * Math.PI
                const x = 500 + 250 * Math.cos(angle)
                const y = 300 + 250 * Math.sin(angle)
                return <path key={index} d={`M500 300 L${x} ${y}`} />
              })}
            </g>
          </svg>

          {/* Module Circles */}
          <div className="relative max-w-[80vw] h-[600px]">
            {courseModules.map((module, index) => {
              const angle = (index / courseModules.length) * 2 * Math.PI
              const x = 50 + 45 * Math.cos(angle)
              const y = 50 + 45 * Math.sin(angle)
              return (
                <motion.div
                  key={module.id}
                  style={{
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    // transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}  // Moves the circle down by 10% on hover
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="w-24 h-24 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center p-2 hover:bg-orange-50 transition-colors duration-200 group"
                  >
                    <span className="text-xs font-medium text-gray-800 text-center group-hover:text-orange-600">
                      {module.title}
                    </span>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Module Details Modal */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedModule.title}</h2>
              <p className="text-gray-600 mb-6">{selectedModule.description}</p>
              <button
  onClick={() => setSelectedModule(null)}
  className="bg-orange-500 text-white px-6 py-3 text-lg rounded hover:bg-orange-600 transition-colors duration-200"
>
  Close
</button>

            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
