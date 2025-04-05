import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoadmapCard = ({ number, title, offer, get }) => {
    return (
        <div className="min-w-[280px] sm:min-w-[390px]  bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-green-400 text-black flex items-center justify-center mb-4 text-xl font-bold">
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
            title: "Unit Testing",
            offer:
                "Unit testing checks individual components or functions of the software to make sure each part works as expected. It’s often done by developers to catch issues early in the coding process."
        },
        {
            number: "02",
            title: "Integration Testing",
            offer:
                "Integration testing ensures that different modules or components of the software work well together. It helps identify issues that might occur when combining separate parts of the system."
        },
        {
            number: "03",
            title: "Functional Testing",
            offer:
                "Functional testing verifies that the software functions as intended. It checks whether the software’s features meet the requirements and perform correctly in different scenarios."
        },
        {
            number: "04",
            title: "Regression Testing",
            offer:
                "Regression testing ensures that new changes or updates don’t affect the existing functionality of the software. It’s repeated after every software update to ensure stability."
        },
        {
            number: "05",
            title: "Performance Testing",
            offer:
                "Performance testing evaluates how well the software performs under heavy load or stress. It helps identify slowdowns or bottlenecks in the system, ensuring the software runs smoothly even with high user activity."
        },
        {
            number: "06",
            title: "Smoke Testing",
            offer:
                "Smoke testing is a quick test to check whether the major functions of the software are working. It’s like a preliminary check to ensure that the build is stable enough for more detailed testing."
        },
        {
            number: "07",
            title: "Acceptance Testing",
            offer:
                "Acceptance testing ensures that the software meets the business requirements and is ready for use. It’s often the final check before the software is released to users."
        },
        {
            number: "08",
            title: "API and Web Services Testing",
            offer:
                "API testing focuses on testing the application programming interfaces (APIs) that allow different software systems to communicate with each other. Web services testing ensures that web-based services (like RESTful APIs) interact correctly with other systems and provide the expected responses."
        },
        {
            number: "09",
            title: "Cloud Testing",
            offer:
                "Cloud testing involves testing applications in a cloud environment. It helps ensure that the software works efficiently on various cloud platforms."
        }
    ];

    return (
        <div className="max-w-8xl mx-auto sm:px-7 py-6">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold px-4 text-black">
                    What is Automation Testing? A Complete Overview
                </h3>

                <p className=" text-center iten-center justify-center mt-6 sm:px-40 px-4">
                    Automation testing is the practice of performing software tests automatically without the need for human interaction by using specialized tools and scripts. It ensures consistent results, improves accuracy, and speeds up recurring test cases. By automating tests, teams can focus on more complex scenarios while reducing the risk of human error. Tools like Selenium, QTP, and TestComplete are commonly used to streamline the testing process and enhance software quality.

                </p>
            </div>

            <p className=" text-center  text-lg iten-center justify-center mt-6 font-bold sm:px-40"   >Types of Automation Testing: </p>
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