import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoadmapCard = ({ number, title, offer, get }) => {
    return (
        <div className="min-w-[280px] sm:min-w-[390px]  bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-green-400 text-black flex items-center justify-center mb-4 text-xl font-bold">
                {number}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm mt-2"><strong className="text-lg mt-2">What we offer:</strong> {offer}</p>
            <p className="text-sm mt-2"><strong className="text-lg mt-2">What you get:</strong> {get}</p>
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
        { number: "01", title: "Hands-on Learning with Real-World Projects", offer: "You’ll work on real-world projects, helping you apply what you've learned.", get: "Gain experience, preparing you to tackle real challenges in the workplace." },
        { number: "02", title: "Mentorship and Expert Guidance", offer: "Personalized mentorship from industry experts who provide guidance and support throughout your journey.", get: "Access to expert knowledge and direct interaction with experienced developers." },
        { number: "03", title: "Career-Oriented Development", offer: "Soft skills development and interview preparation are integrated into the program. We focus on resume building, mock interviews.", get: "You'll be job-ready with the necessary technical and non-technical skills to succeed in interviews." },
        { number: "04", title: "Collaboration in Team Projects", offer: "Collaborate with team-based projects to understand real-world work environments and the importance of teamwork.", get: "Develop collaboration skills and experience working in a team." },
        { number: "05", title: "Continuous Learning and Post-Course Support", offer: "Even after completing the course, Pathlogics provides continued learning resources.", get: "Stay updated with industry trends and advancements, ensuring you remain competitive." }
    ];

    return (
        <div className="max-w-8xl mx-auto sm:px-7 py-6">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold px-4 text-black">
                    Pathlogics’s Roadmap to Become an Expert in Full Stack Web Development
                </h3>
            </div>
            <div className="relative w-full flex items-center">
                <button onClick={scrollLeftHandler} className="bg-gray-200 rounded-full hover:bg-gray-300 transition">
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
                <button onClick={scrollRightHandler} className=" bg-gray-200  rounded-full hover:bg-gray-300 transition">
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}