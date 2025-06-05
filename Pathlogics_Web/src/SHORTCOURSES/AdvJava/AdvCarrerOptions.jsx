import React, { useRef, useEffect } from "react";
import {
  FaLaptopCode,         // Java Developer
  FaServer,             // Backend Developer
  FaCodeBranch,         // Full Stack Developer
  FaGlobe,              // Web Application Developer
  FaCogs,               // Software Engineer
  FaProjectDiagram,     // API Developer
  FaAndroid,            // Android Developer
  FaLifeRing            // Java Support Engineer
} from "react-icons/fa";

const RoadmapCard = ({ icon: Icon, title, offer }) => {
  return (
    <div className="min-w-[250px] sm:h-60 md:h-60 lg:h-60 sm:mx-12 md:mx-12 lg:mx-12 sm:min-w-[280px] hover:scale-105 bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-4 sm:p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-sm sm:text-lg font-semibold">{title}</h3>
      <p className="text-xs sm:text-sm mt-2">{offer}</p>
    </div>
  );
};

export default function AdvCarrerOptions() {
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

  const roadmapSteps = [
    {
      icon: FaLaptopCode,
      title: "Java Developer",
      offer:
        "Design, develop, and maintain robust Java-based applications. You'll work on web apps, desktop software, or enterprise systems using tools like Spring and Hibernate.",
    },
    {
      icon: FaServer,
      title: "Backend Developer",
      offer:
        "Focus on the server-side of applications, handling business logic, APIs, and databases. Advanced Java skills are essential for building scalable backend services.",
    },
    {
      icon: FaCodeBranch,
      title: "Full Stack Developer (Java)",
      offer:
        "Work on both frontend and backend development using Java, along with web technologies like HTML, CSS, JavaScript, and frameworks like Spring Boot.",
    },
    {
      icon: FaGlobe,
      title: "Web Application Developer",
      offer:
        "Build dynamic websites and online platforms using Servlets, JSP, and database connectivity. Perfect for those who enjoy both coding and design logic.",
    },
    {
      icon: FaCogs,
      title: "Software Engineer",
      offer:
        "Take part in the complete software development lifecycle—coding, testing, and deploying high-performance applications in various industries.",
    },
    {
      icon: FaProjectDiagram,
      title: "API Developer",
      offer:
        "Design and develop RESTful APIs using Java and Spring frameworks. You’ll enable seamless communication between apps and services.",
    },
    {
      icon: FaAndroid,
      title: "Android Developer (with Java)",
      offer:
        "Use your Java skills to build Android mobile apps. Many native Android applications still rely heavily on Java-based development.",
    },
    {
      icon: FaLifeRing,
      title: "Java Support Engineer",
      offer:
        "Troubleshoot and maintain existing Java applications, fix bugs, optimize performance, and support development teams in delivering smooth user experiences.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-7 py-6">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black leading-tight px-2">
          Top Career Options After Advanced Java Course in Pune.
        </h3>
        <p className="text-lg md:text-xl text-black mt-4 max-w-4xl mx-auto leading-relaxed">
          Completing an <strong>Advanced Java</strong> course takes your programming skills to a professional level and unlocks even more career opportunities in the tech world. With expertise in web technologies, frameworks, and backend development, you're ready to take on specialized roles that are in high demand and offer great growth potential.
        </p>
      </div>
      <div
        className="relative w-full flex flex-col overflow-x-auto sm:flex-row items-center px-1 space-y-4 sm:space-y-0 sm:space-x-6 py-4 sm:py-6"
        ref={scrollRef}
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
    </div>
  );
}
