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
      title: ".NET Developer",
      offer:
        "Build fast, secure, and scalable web applications using .NET Core. You’ll work on both frontend and backend, making you a well-rounded team member.",
    },
    {
      number: "02",
      title: "Backend Developer",
      offer:
        "Write powerful server-side code and APIs with ASP.NET Core and Entity Framework. Ideal for those who love backend logic.",
    },
    {
      number: "03",
      title: "Full Stack Developer (.NET + JS)",
      offer:
        "Work with both backend in .NET Core and frontend using React or Angular. A versatile and high-demand role.",
    },
    {
      number: "04",
      title: "Software Engineer",
      offer:
        "Design, build, and test business-critical applications. You’ll solve real-world problems for companies using .NET technologies.",
    },
    {
      number: "05",
      title: "Cloud Developer (Azure/.NET)",
      offer:
        "Use .NET Core with Microsoft Azure to build and deploy cloud-native applications for global users.",
    },
    {
      number: "06",
      title: "Technical Consultant (.NET Solutions)",
      offer:
        "Advise companies on building efficient .NET-based systems while recommending best practices and improvements.",
    },
    {
      number: "07",
      title: "DevOps Engineer (with .NET)",
      offer:
        "Streamline builds and deployments using tools like Docker and Azure DevOps. Automate and optimize workflows.",
    },
    {
      number: "08",
      title: "QA Automation Engineer (C# & Selenium)",
      offer:
        "Create automated test scripts with C# and Selenium to ensure apps are bug-free and reliable before launch.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto sm:px-7 py-6 mb-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-extrabold px-4 text-black">
          Top Career Options After Dot Net Core Developer Course in Pune
        </h3>
        <p className="text-center mt-6 sm:px-40 px-4">
          Finishing our Dot Net Core course is more than just learning how to build web apps—it’s your first real step toward a rewarding career in tech. As more companies move to modern, scalable solutions, the demand for .NET Core developers is growing fast. Whether it’s a startup, an MNC, or a product-based company, this skill opens doors to exciting opportunities and meaningful work in today’s digital world.
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
