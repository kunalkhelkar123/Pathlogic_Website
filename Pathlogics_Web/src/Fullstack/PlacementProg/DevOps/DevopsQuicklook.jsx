import React from 'react';
import { DiDocker } from "react-icons/di";
import { AiOutlineDocker } from "react-icons/ai";
import { FaJenkins } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
const TechLogo = ({ children, color }) => (
  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}>
    {children}
  </div>
);

export default function DevopsQuicklook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            A comprehensive Full Stack
            <span className="block text-orange-600">DevOps Program</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mt-4">
            Master DevOps practices, Automation, CI/CD pipelines, and Cloud Infrastructure with hands-on projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-blue-500">
              {/* <img src="/logos/docker.svg" alt="Docker" className="w-20 h-20" /> */}
              {/* <DiDocker className="w-20 h-20" /> */}
              <AiOutlineDocker className="w-20 h-20"/>
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Docker</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-yellow-500">
              {/* <img src="/logos/jenkins.svg" alt="Jenkins" className="w-20 h-20" /> */}
              <FaJenkins className="w-20 h-20" />
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Jenkins</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-red-500">
              {/* <img src="/logos/kubernetes.svg" alt="Kubernetes" className="w-20 h-20" /> */}
              <SiKubernetes className="w-20 h-20" />
            </TechLogo>
            <span className='text-2xl font-bold text-white'>kubernetes</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-gray-300">
              {/* <img src="/logos/aws.svg" alt="AWS" className="w-20 h-20" /> */}
              <FaAws className="w-20 h-20" />

            </TechLogo>
            <span className='text-2xl font-bold text-white'>aws</span>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl text-white mb-8">Become a Full Stack DevOps Expert</p>
          <button className="bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
