import React, { useState, useEffect } from "react";
import image from "./../assets/banner1.jpg"; // Ensure the path to the image is correct

function Logo() {
  const [visibleWords, setVisibleWords] = useState(0);

  const hiringWords = [
    "Explore top talent. Hire the best professionals. Grow your business with us.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < hiringWords.length ? prev + 1 : prev));
    }, 1000); // Adds a new word every second

    return () => clearInterval(interval);
  }, [hiringWords.length]);

  return (
    <div
      className="relative h-screen w-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Ensures the image covers the entire screen
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
      }}
    >
      {/* Text content */}
      <div
        className="flex flex-col justify-center h-full text-left pl-10"
        style={{
          color: "white", // Sets text color to white for main heading
        }}
      >
        <h1
          className="font-bold mb-4"
          style={{
            fontSize: "4rem", // Adjust font size
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Maintains text visibility
          }}
        >
          Corporate - Hire From Us
        </h1>
        <div className="mt-6 text-lg font-medium">
          {hiringWords.slice(0, visibleWords).map((word, index) => (
            <p
              key={index}
              className="animate-fade-in"
              style={{
                animation: "fade-in 1s ease-in",
                opacity: 1,
                marginTop: "-10px",
                color: "orange", // Changes text color to orange
              }}
            >
              {word}
            </p>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-in;
          }
        `}
      </style>
    </div>
  );
}

export default Logo;
