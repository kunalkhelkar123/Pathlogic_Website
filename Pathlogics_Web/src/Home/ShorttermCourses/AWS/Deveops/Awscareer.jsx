import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoadmapCard = ({ number, title, offer }) => (
  <div className="min-w-[280px] sm:min-w-[390px] bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
    <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 text-xl font-bold">
      {number}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm mt-2">{offer}</p>
  </div>
);

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
      title: "Data Scientist",
      offer:
        "Data scientists analyze large datasets, build machine learning models, and apply statistical techniques to extract meaningful insights and drive data-driven decision-making.",
    },
    {
      number: "02",
      title: "Data Analyst",
      offer:
        "Data analysts interpret data to uncover trends and patterns, create reports, and help businesses make data-driven decisions by presenting actionable insights.",
    },
    {
      number: "03",
      title: "Machine Learning Engineer",
      offer:
        "Machine learning engineers design and implement algorithms and models that allow systems to automatically improve through experience, typically working with large datasets.",
    },
    {
      number: "04",
      title: "Business Intelligence Analyst",
      offer:
        "Business intelligence analysts use data to create reports, dashboards, and visualizations that help businesses understand trends and make informed decisions.",
    },
    {
      number: "05",
      title: "Data Engineer",
      offer:
        "Data engineers design and maintain systems for collecting, storing, and processing data, ensuring that data pipelines are efficient and scalable for analysis.",
    },
    {
      number: "06",
      title: "Data Architect",
      offer:
        "Data architects design and structure databases and data management systems, ensuring that they meet the needs of business intelligence, data analysis, and machine learning tasks.",
    },
    {
      number: "07",
      title: "AI/Deep Learning Engineer",
      offer:
        "AI/deep learning engineers build advanced AI models, including neural networks, to solve complex tasks like image recognition, natural language processing, and autonomous decision-making.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto sm:px-7 py-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold px-4 text-black">
          Top Career Opportunities After Python Data Science Course in Pune
        </h3>
        <p className="text-center mt-6 sm:px-40 px-4">
          Completing our Data Science course in Pune means more than just mastering Python and analytics, it means stepping into one of the most in-demand tech careers today. With industries relying heavily on data for innovation and strategy, skilled data scientists are needed to turn complex data into valuable business solutions.
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
