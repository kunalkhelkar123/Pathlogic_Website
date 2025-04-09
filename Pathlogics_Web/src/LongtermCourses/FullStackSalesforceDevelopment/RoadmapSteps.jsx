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
            title: "Salesforce Developer   ",
            offer:
                " Build, customize, and maintain Salesforce applications using Apex, Visualforce, and Lightning components."
        },
        {
            number: "02",
            title: "Salesforce Administrator",
            offer:
                "Manage users, security settings, workflows, and overall system efficiency.."
        },
        {
            number: "03",
            title: " Salesforce Consultant",
            offer:
                " Provide expert guidance on Salesforce implementation, customization, and business solutions."
        },
        {
            number: "04",
            title: "Salesforce Business Analyst",
            offer:
                " Analyze business needs and translate them into Salesforce-based solutions."
        },
        {
            number: "05",
            title: "Salesforce Technical Architect",
            offer:
                "Design and oversee large-scale Salesforce solutions and integrations"
        },
        {
            number: "06",
            title: "Salesforce AppExchange Developer ",
            offer:
                "Develop and publish custom applications for Salesforce’s AppExchange marketplace.."
        },
        {
            number: "07",
            title: "Salesforce Project Manager",
            offer:
                "Lead and manage Salesforce projects from planning to execution."
        },
        {
            number: "08",
            title: "Salesforce Marketing Cloud Specialist",
            offer:
                "Work with marketing automation tools to drive customer engagement.."
        },
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
                    Top Career Options After Salesforce Course in Pune
                </h3>

                <p className=" text-center iten-center justify-center mt-6 sm:px-40 px-4">
                 
                    After completing a    <strong>Salesforce Developer Course, </strong>you’ll be prepared for exciting career opportunities in the Salesforce ecosystem. You'll gain the skills to develop, customize, and manage Salesforce applications, making you a valuable asset to companies looking for experts in CRM solutions. With growing demand for Salesforce professionals, this course opens doors to roles like,

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