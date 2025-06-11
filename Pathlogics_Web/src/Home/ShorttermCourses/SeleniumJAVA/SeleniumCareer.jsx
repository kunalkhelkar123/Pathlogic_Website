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
    title: "Automation Test Engineer",
    offer:
      "Design and implement automated test scripts using Selenium and Java. Improve test coverage, efficiency, and reduce manual testing efforts.",
  },
  {
    number: "02",
    title: "Quality Assurance (QA) Engineer",
    offer:
      "Perform comprehensive testing with both manual and automation methods. Track issues and improve software stability and quality.",
  },
  {
    number: "03",
    title: "SDET (Software Development Engineer in Test)",
    offer:
      "Combine development and testing skills to build advanced automation frameworks and ensure top-tier software quality.",
  },
  {
    number: "04",
    title: "Performance Tester",
    offer:
      "Use tools like JMeter to test application performance, scalability, and reliability under different load conditions.",
  },
  {
    number: "05",
    title: "DevOps Tester",
    offer:
      "Work with CI/CD tools like Jenkins, Git, and Docker to integrate automated tests and streamline the development lifecycle.",
  },
  {
    number: "06",
    title: "Freelance Automation Tester",
    offer:
      "Take on global projects independently, offering automation expertise on a flexible, project-by-project basis.",
  },
];

  return (
    <div className="max-w-8xl mx-auto sm:px-7 py-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold px-4 text-black">
          Top Career Opportunities After Software Testing Course in Pune
        </h3>
        <p className="text-center mt-6 sm:px-40 px-4">
          Finishing our software testing course is more than just learning how to find bugs, it’s your gateway to a thriving career in the tech world. As companies continue to focus on delivering high-quality software, the demand for skilled testers is skyrocketing. Whether you're into manual or automation testing, this course sets you up for success in a field that’s essential to every tech team.
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
