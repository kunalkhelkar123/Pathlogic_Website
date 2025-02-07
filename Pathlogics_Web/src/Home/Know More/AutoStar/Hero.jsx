import React from "react";
import { motion } from 'framer-motion';
import hero from '../../../assets/Awss.png'

function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path
            d="M-200 400C100 300 400 600 800 500C1200 400 1400 600 1600 400"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-200 600C100 500 400 800 800 700C1200 600 1400 800 1600 600"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Top Label */}
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-sm font-semibold tracking-wider">
                GAIN IN-DEMAND SKILLS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering AutoStar Training in Pune
            </h1>

            {/* Subheading */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-orange-400">
                Online | Offline Batches - Autostar.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 shadow-lg"
            >
              Enroll Now!
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full hidden lg:block"
          >
            <img
              src={hero}
              alt="AWS DevOps Training"
              className="bg-fixed bg-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
