import React from 'react';
import { SiGoogleads } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
//import { SiHootsuite } from "react-icons/si";
import { IoBriefcaseOutline } from "react-icons/io5";

const TechLogo = ({ children, color }) => (
  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}>
    {children}
  </div>
);

export default function DigitalMQuicklook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            A comprehensive Digital Marketing
            <span className="block text-orange-600">Mastery Program</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mt-4">
            Master SEO, Social Media Marketing, Content Strategy, PPC, and more with hands-on experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16">
          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-blue-500">
              {/* <img src="/logos/google-ads.svg" alt="Google Ads" className="w-20 h-20" /> */}
              <SiGoogleads className="w-20 h-20" />
              
            </TechLogo>
            <span className='text-2xl font-bold text-white'>google-ads</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-yellow-500">
              {/* <img src="/logos/facebook-ads.svg" alt="Facebook Ads" className="w-20 h-20" /> */}
              <FaFacebookSquare className="w-20 h-20"/>
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Facebook</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-green-500">
              {/* <img src="/logos/semrush.svg" alt="SEMrush" className="w-20 h-20" /> */}
              <FaMeta className="w-20 h-20"/>
            </TechLogo>
            <span className='text-2xl font-bold text-white'>Meta-ads</span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <TechLogo color="bg-gray-300">
              {/* <img src="/logos/hootsuite.svg" alt="Hootsuite" className="w-20 h-20" /> */
              <IoBriefcaseOutline className="w-20 h-20"/>}
            </TechLogo>
            <span className='text-2xl font-bold text-white'>SEO-Wrap</span>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl text-white mb-8">Become a Digital Marketing Expert</p>
          <button className="bg-orange-600 text-white text-xl font-semibold py-4 px-8 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
