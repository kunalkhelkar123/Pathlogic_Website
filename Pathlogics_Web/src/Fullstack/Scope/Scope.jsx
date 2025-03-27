import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScopeCard = ({ title, description, icon }) => {
    return (
        <div className="min-w-[280px] sm:min-w-[320px] bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-3xl">{icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
    );
};

export default function FullStackScope() {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const velocity = useRef(0);
    const isScrolling = useRef(false);
    const frame = useRef(null);

    useEffect(() => {
        const applyMomentum = () => {
            if (!isScrolling.current) return;
            scrollRef.current.scrollLeft += velocity.current;
            velocity.current *= 0.95; // Apply friction
            if (Math.abs(velocity.current) < 0.5) {
                isScrolling.current = false;
                cancelAnimationFrame(frame.current);
                return;
            }
            frame.current = requestAnimationFrame(applyMomentum);
        };

        return () => cancelAnimationFrame(frame.current);
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        velocity.current = 0;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = (e) => {
        isDragging.current = false;
        const x = e.pageX - scrollRef.current.offsetLeft;
        velocity.current = (x - startX.current) * 0.3;
        isScrolling.current = true;
        frame.current = requestAnimationFrame(() => {
            velocity.current *= 0.95;
        });
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        velocity.current = 0;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        isScrolling.current = true;
        requestAnimationFrame(() => {
            velocity.current *= 0.95;
        });
    };

    const scrollLeftHandler = () => {
        scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    };

    const scrollRightHandler = () => {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    };

    return (
        <div className="max-w-8xl mx-auto px-8 py-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-start gap-10">
                {/* Left Section */}
                <div className="lg:w-1/3 text-center lg:text-left">
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Scope of Full Stack Development
                    </h3>
                    <p className="text-gray-600">
                        Full Stack Development has a broad footprint that keeps expanding as technology advances.
                        From startups to multinational corporations, companies of every size are looking for full stack engineers.
                    </p>
                </div>

                {/* Right Section - Scrollable Cards */}
                <div className="relative w-full lg:w-2/3">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide w-full px-2  flex-nowrap cursor-grab select-none"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {[
                            { title: "High Demand Across Industries", icon: "🌍", description: "Full stack developers are needed in IT, finance, healthcare, e-commerce, and education." },
                            { title: "Multicareer Opportunities", icon: "🚀", description: "You can work as a web developer, software engineer, front-end/back-end developer." },
                            { title: "Startups & Innovation", icon: "💡", description: "Startups hire full stack developers to reduce hiring costs and increase efficiency." },
                            { title: "Freelance & Remote Work", icon: "🌎", description: "Full stack developers can work remotely and take freelance projects globally." },
                            { title: "Competitive Salaries", icon: "💰", description: "Full stack developers earn high salaries, with competitive pay that increases with experience." },
                            { title: "High Demand Across Industries", icon: "🌍", description: "Full stack developers are needed in IT, finance, healthcare, e-commerce, and education." },
                           
                            { title: "Career Growth & Opportunities", icon: "📈", description: "With continuous learning, you can progress to senior developer roles, team leads, or CTO positions." },
                        ].map((item, index) => (
                            <ScopeCard key={index} {...item} />
                        ))}
                    </div>

                    {/* Scroll Buttons */}
                    <div className="absolute top-1/2 sm:-left-10 transform -translate-y-1/2">
                        <button onClick={scrollLeftHandler} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                            <ChevronLeft size={14} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 sm:-right-10 transform -translate-y-1/2">
                        <button onClick={scrollRightHandler} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
