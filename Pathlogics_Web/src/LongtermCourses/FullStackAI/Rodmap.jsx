import React from 'react';
import roadmap from "../../assets/roadmap.jpg";

export default function Roadmap() {
  return (
    <div className="px-4 py-10 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
        How Does Java Full Stack Development Program Work?
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Pathlogics’s Roadmap to Becoming a Full Stack Java Developer
      </p>

      <div className="flex justify-center bg-white">
        <img
          src={roadmap}
          alt="Java Full Stack Roadmap"
          className="w-full max-w-5xl h-auto object-contain bg-white"
        />
      </div>
    </div>
  );
}
