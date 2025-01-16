import React from 'react';
import image2 from './../assets/Trainingimage.jpg';

const Trains = () => {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2})` // Correct way to use imported image in inline style
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            <span className="block">Corporate Training</span>
            <span className="block">&amp; Development</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mt-4"></div>
          
          <p className="mt-6 text-lg md:text-xl text-white opacity-90 max-w-2xl leading-relaxed">
            Unlock your team's full potential 
            <br className="hidden md:inline" />
            with our application-oriented
            <br className="hidden md:inline" />
            training program!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trains;
