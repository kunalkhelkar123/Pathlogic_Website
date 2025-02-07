import React from "react";
import { ShoppingCart, Target, Users, TrendingUp } from "lucide-react"; // Updated icons related to Digital Marketing

const TechLogo = ({ children, color }) => (
  <div
    className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function DigitalStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Master the Art of
            <span className="block text-orange-600 text-4xl">Digital Marketing</span>
          </h2>
          <h2 className="text-lg sm:text-3xl md:text-2xl text-orange-300 mt-4">
            Comprehensive learning with theoretical & practical experience.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 mt-12">
          {/* Digital Marketing Basics */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-blue-500">
              <ShoppingCart className="w-16 h-16 text-white" /> {/* Changed to ShoppingCart icon */}
            </TechLogo>
            <span className="text-3xl font-bold text-white">Digital Marketing Basics</span>
          </div>

          {/* SEO */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-gray-800">
              <Target className="w-16 h-16 text-white" /> {/* Changed to Target icon */}
            </TechLogo>
            <span className="text-3xl font-bold text-white">SEO</span>
          </div>

          {/* Social Media Marketing */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-green-500">
              <Users className="w-16 h-16 text-white" /> {/* Social Media icon */}
            </TechLogo>
            <span className="text-3xl font-bold text-white">Social Media</span>
          </div>

          {/* Analytics */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-blue-600">
              <TrendingUp className="w-16 h-16 text-white" /> {/* Changed to TrendingUp icon */}
            </TechLogo>
            <span className="text-3xl font-bold text-white">Analytics</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-orange-400 mb-6">
            Become a Digital Marketing Expert!
          </p>
          <button className="bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
