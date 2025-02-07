import React from "react";
import { motion } from "framer-motion";
import docker from "../../assets/docker.png";
import kubernetes from "../../assets/Kubernetes.png";
import terraform from "../../assets/Terraform.png";
import aws from "../../assets/aws.png";

const TechCard = ({ logo, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center space-y-4"
  >
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg`}
    >
      {logo}
    </div>
    <motion.span
      whileHover={{ color: "#4A90E2" }}
      className="text-2xl md:text-3xl font-bold text-gray-800"
    >
      {label}
    </motion.span>
  </motion.div>
);

export default function DevStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Learn Modern
            <span className="block text-indigo-600">DevOps Engineering</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mt-4">
            Master cloud, automation, and CI/CD with industry-leading tools and technologies.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-12 item-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TechCard
            logo={<img src={docker} alt="Docker Logo" className="w-16 h-16" />}
            label="Docker"
            color="bg-gradient-to-br from-blue-600 to-blue-400" // Blue gradient for Docker
          />
          <TechCard
            logo={<img src={kubernetes} alt="Kubernetes Logo" className="w-16 h-16" />}
            label="Kubernetes"
            color="bg-gradient-to-br from-green-600 to-green-400" // Green gradient for Kubernetes
          />
          <TechCard
            logo={<img src={terraform} alt="Terraform Logo" className="w-24 h-24 object-fit text-white" />}
            label="Terraform"
            color="bg-gradient-to-br from-purple-700 to-orange-600" // Purple/Indigo for Terraform
          />
          <TechCard
            logo={<img src={aws} alt="AWS Logo" className="w-16 h-16" />}
            label="AWS"
            color="bg-gradient-to-br from-orange-500 to-red-500" // Orange/Yellow gradient for AWS
          />
        </motion.div>

        <div className="mt-16 text-center">
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Build scalable and automated infrastructure with cutting-edge tools.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700"
          >
            Start Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
