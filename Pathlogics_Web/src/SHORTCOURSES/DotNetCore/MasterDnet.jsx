import React from "react";
import { FileCode, Anchor, Database, MapPin } from "lucide-react"; // Updated icons

const TechLogo = ({ children, color }) => (
  <div
    className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}
  >
    {children}
  </div>
);

export default function MasterDnet() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-teal-600 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Master the Art of
            <span className="block text-orange-600 text-4xl">.NET Core</span> Development
          </h2>
          <h2 className="text-lg sm:text-3xl md:text-2xl text-orange-300 mt-4">
            Comprehensive learning with theoretical & practical experience.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12">
          {/* .NET Core MVC */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-blue-500">
              <FileCode className="w-12 h-12 text-white" /> {/* FileCode icon for .NET Core MVC */}
            </TechLogo>
            <span className="text-2xl font-bold text-white">.NET Core MVC</span>
          </div>

          {/* Entity Framework Core */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-gray-800">
              <Anchor className="w-12 h-12 text-white" /> {/* Anchor icon for Entity Framework Core */}
            </TechLogo>
            <span className="text-2xl font-bold text-white">Entity Framework Core</span>
          </div>

          {/* Web API Development */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-green-500">
              <Database className="w-12 h-12 text-white" /> {/* Database icon for Web API Development */}
            </TechLogo>
            <span className="text-2xl font-bold text-white">Web API Development</span>
          </div>

          {/* Dependency Injection */}
          <div className="flex flex-col items-center space-y-3">
            <TechLogo color="bg-blue-600">
              <MapPin className="w-12 h-12 text-white" /> {/* MapPin icon for Dependency Injection */}
            </TechLogo>
            <span className="text-2xl font-bold text-white">Dependency Injection</span>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-orange-400 mb-6">
            Become a .NET Core Development Expert!
          </p>
          <button className="bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-[5px] shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
            Start Learning Now
          </button>
        </div>
      </div>
    </div>
  );
}
