import React from 'react';
import roadmap from "../../assets/roadmap.jpg";


export default function Accordian() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 mb-4">
        How Does Dot Net Full Stack Development program Works?
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black text-center leading-relaxed sm:mb-2">
        Pathlogics’s Roadmap to become Dot Net Full Stack Developer
      </p>
      <div className="flex justify-center">
        <img
          className="w-full max-w-4xl h-auto object-contain"
          src={roadmap}
          alt="roadmap"
        />
      </div>
    </div>
  );
}
