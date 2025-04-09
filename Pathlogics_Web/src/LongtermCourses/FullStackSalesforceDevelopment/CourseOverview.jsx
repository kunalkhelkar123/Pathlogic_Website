import React, { useState, useEffect } from "react";
import curriculam from "../../assets/curriculam.jpg"
import { Link } from "react-router-dom";
const CourseModule = ({ title, icon, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 150);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
        >
            <div className="bg-orange-500 rounded-lg shadow-lg p-2 py-4 h-full flex flex-col items-center justify-center hover:shadow-2xl hover:bg-gradient-to-br from-gray-400 to-teal-600 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                    <span className="text-orange-600 text-2xl">{icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-white text-center">{title}</h3>
            </div>
        </div>
    );
};

export default function EnhancedCourseOverview() {
    const courseModules = [
        // { title: "Problem Solving", icon: "🧠" },
        { title: "Salesforce Fundamentals", icon: "💡" },  // Updated for Salesforce
        { title: "Apex Programming", icon: "⚙️" },  // Updated for Salesforce
        { title: "Salesforce Lightning", icon: "⚡" },  // Updated for Salesforce
        // { title: "Version Control (Git)", icon: "🔀" },
        { title: "Salesforce Integration", icon: "🔗" },  // Updated for Salesforce
        { title: "Cloud Computing (AWS, Azure)", icon: "☁️" },  // Updated for Cloud
        { title: "Salesforce Security & Testing", icon: "🔐" },  // Updated for Salesforce
      ];
    

    return (
        <div className="min-h-[100px] bg-gradient-to-br from-gray-900 to-teal-600 py-8  px-4 sm:px-2 lg:px-2 flex flex-col items-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                {/* Left Section - Curriculum Modules */}
                <div className=" rounded-xl shadow-lg">
                    {/* <h2 className="text-3xl font-bold text-white mb-6 text-center">Curriculum</h2> */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {courseModules.map((module, index) => (
                            <CourseModule key={index} {...module} index={index} />
                        ))}
                    </div>
                </div>


                {/* 
        <div>

          <img className="rounded-md" src={curriculam}></img>


        </div> */}
                {/* Right Section - Course Overview */}
                <div className="text-center sm:py-6 text-right  justify-end  rounded-xl ">
                    <h3 className="text-2xl  sm:mt-0 -mt-10 font-extrabold text-white sm:text-3xl">
                    Salesforce Developer Course Overview
                    </h3>
                    <p className="mt-4 text-white text-[16px] text-right flex justify-end leading-relaxed">

                    In our Salesforce Developer Course, you'll learn to design, develop, and customize Salesforce applications, managing everything from data models to automation and integrations. You'll work with key technologies like Apex, Visualforce, Lightning Web Components, and Salesforce APIs. Through practical exercises, you'll gain hands-on experience and develop the skills needed for a successful career in Salesforce development, all with guidance from experienced instructors.


                    </p>
                    <Link to="/QuickEnquiry"> <button className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-orange-700 transition-all duration-300 hover:scale-105">
                        Enroll Now
                    </button></Link>
                </div>
            </div>
        </div>
    );
}
