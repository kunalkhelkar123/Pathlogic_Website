

import React, { useRef, useEffect } from "react";
import { Wrench , Cloud , Monitor, Zap , ShieldCheck , Repeat  } from "lucide-react";

const RoadmapCard = ({ icon: Icon, title, offer }) => {
    return (
        <div className="min-w-[250px] sm:h-64  md:h-64 lg:h-64 sm:mx-12 md:mx-12 lg:mx-12   sm:min-w-[280px]  hover:scale-105 bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-4 sm:p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
                <Icon size={28} />
            </div>
            <h3 className="text-sm sm:text-lg font-semibold">{title}</h3>
            <p className="text-xs sm:text-sm mt-2">{offer}</p>
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

    const roadmapSteps = [
        { icon: Wrench , title: "DevOps Engineer", offer: "One of the most demanding role combining development and operations skills to automate and streamline software delivery." },
        { icon: Cloud , title: "Cloud Engineer", offer: "High demand for professionals skilled in cloud platforms like AWS, Azure, and Google Cloud to manage scalable infrastructure and services." },
        { icon: Monitor, title: "Site Reliability Engineer", offer: "Growing need for SREs to ensure application reliability, optimize performance, and manage large-scale systems. " },
        { icon: Zap , title: "Automation Engineer", offer: "Increasing demand for professionals who can automate CI/CD pipelines, testing, and deployment processes." },
        { icon: ShieldCheck , title: "DevSecOps Engineer", offer: "A key role that combines security with DevOps processes, making sure security is built into the development and deployment of applications from the start. " },
        { icon: Repeat , title: "CI/CD Pipeline Engineer", offer: "Responsible for designing, implementing, and maintaining continuous integration and continuous delivery (CI/CD) pipelines, ensuring faster software releases." },

    ];
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-7 py-6">
            <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black leading-tight px-2">
                Most In-Demand Career Options After a DevOps Course in Pune
                </h3>
                <p className="text-lg md:text-xl text-black mt-4 max-w-4xl mx-auto leading-relaxed">
                Complete a <strong>DevOps</strong> course and bridge the gap between development & operations! Optimize workflows, automate deployments, and drive innovation. you’ll be ready to take on exciting roles in the tech world.  </p>
            </div>
            <div className="relative w-full flex flex-col  overflow-x-auto sm:flex-row items-center  px-1  space-y-4 sm:space-y-0 sm:space-x-6 py-4 sm:py-6"
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
