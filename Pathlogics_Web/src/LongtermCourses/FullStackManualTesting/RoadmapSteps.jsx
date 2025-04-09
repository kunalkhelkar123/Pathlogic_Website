import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoadmapCard = ({ number, title, offer, get }) => {
    return (
        <div className="min-w-[280px] sm:min-w-[390px]  bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 text-xl font-bold">
                {number}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm mt-2"><strong className="text-lg mt-2"></strong> {offer}</p>
            {/* <p className="text-sm mt-2"><strong className="text-lg mt-2">What you get:</strong> {get}</p> */}
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
            title: "Software Tester / QA Engineer   ",
            offer:
                "Primary role will be to test applications, find defects, and ensure software quality. Responsibilities include writing test cases, executing tests, and reporting bugs."
        },
        {
            number: "02",
            title: "Test Analyst",
            offer:
                "Designing detailed test plans and strategies. Responsible for improving testing processes and ensuring test coverage.."
        },
        {
            number: "03",
            title: " Quality Assurance (QA) Engineer",
            offer:
                "Focus on maintaining software quality standards.Collaborate with developers to prevent defects and enhance user experience."
        },
        {
            number: "04",
            title: "Performance Tester",
            offer:
                "Analyze speed, responsiveness, and scalability of application. Tools like LoadRunner and JMeter are commonly used in this role."
        },
        {
            number: "05",
            title: "Mobile App Tester",
            offer:
                "Mobile testing has become a lucrative field.  You’ll test mobile apps for functionality, usability, and compatibility across different devices."
        },
        // {
        //     number: "06",
        //     title: "Smoke Testing",
        //     offer:
        //         "Smoke testing is a quick test to check whether the major functions of the software are working. It’s like a preliminary check to ensure that the build is stable enough for more detailed testing."
        // },
        // {
        //     number: "07",
        //     title: "Acceptance Testing",
        //     offer:
        //         "Acceptance testing ensures that the software meets the business requirements and is ready for use. It’s often the final check before the software is released to users."
        // },
        // {
        //     number: "08",
        //     title: "API and Web Services Testing",
        //     offer:
        //         "API testing focuses on testing the application programming interfaces (APIs) that allow different software systems to communicate with each other. Web services testing ensures that web-based services (like RESTful APIs) interact correctly with other systems and provide the expected responses."
        // },
        // {
        //     number: "09",
        //     title: "Cloud Testing",
        //     offer:
        //         "Cloud testing involves testing applications in a cloud environment. It helps ensure that the software works efficiently on various cloud platforms."
        // }
    ];

    return (
        <div className="max-w-8xl mx-auto sm:px-7 py-6 mb-6">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold px-4 text-black">
                    Career Options After a Manual Testing Course in Pune
                </h3>

                <p className=" text-center iten-center justify-center mt-6 sm:px-40 px-4">

                    Completing a Manual Testing Course opens up multiple career opportunities in the software testing and quality assurance domain. Here are some promising career paths you can explore:

                </p>
            </div>

            {/* <p className=" text-center  text-lg iten-center justify-center mt-6 font-bold sm:px-40"   >Types of Automation Testing: </p> */}
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