import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoadmapCard = ({ number, title, offer }) => {
  return (
    <div className="min-w-[280px] sm:min-w-[390px] bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
      <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2">{offer}</p>
    </div>
  );
};

export default function Roadmap() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const scrollLeftHandler = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

 const roadmapSteps = [
 
  
  {
    number: "01",
    title: "React Native Developer",
    offer: "Build mobile apps for both Android and iOS using one codebase, making development faster and more efficient. High demand due to its time-saving power.",
  },
  {
    number: "02",
    title: "Mobile App Developer (Cross-Platform)",
    offer: "Use React Native to create sleek, high-performing apps that run smoothly on multiple devices. Perfect for reaching wide audiences with one app.",
  },
  {
    number: "03",
    title: "Frontend Developer (Mobile Focused)",
    offer: "Work on user interfaces and mobile experiences. Use React Native to bring beautiful, interactive mobile screens to life.",
  },
  {
    number: "04",
    title: "Full Stack Developer (with React Native)",
    offer: "Combine React Native with backend tools like Node.js or Firebase to build complete applications. Ideal for freelancing or flexible product teams.",
  },
  {
    number: "05",
    title: "UI/UX Engineer (Mobile)",
    offer: "Blend design and development to create intuitive, smooth app experiences. React Native allows for fast prototyping and iteration.",
  },
];


  return (
    <div className="max-w-8xl mx-auto sm:px-7 py-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold px-4 text-black">
          Top Career Options After Best React Native Course in Pune

        </h3>

        <p className="text-center mt-6 sm:px-40 px-4">
          Finishing a React Native course goes beyond learning how to build mobile apps, it sets you up for a future in cross-platform development. As more companies look to streamline mobile app creation, skilled React Native developers are in high demand, opening doors to dynamic roles in product-based companies, startups, and tech giants alike.

        </p>
      </div>

      <div className="relative w-full flex items-center">
        <button
          onClick={scrollLeftHandler}
          className="bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft size={18} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide w-full sm:px-6 py-6 flex-nowrap cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {roadmapSteps.map((step, index) => (
            <RoadmapCard key={index} {...step} />
          ))}
        </div>
        <button
          onClick={scrollRightHandler}
          className="bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
