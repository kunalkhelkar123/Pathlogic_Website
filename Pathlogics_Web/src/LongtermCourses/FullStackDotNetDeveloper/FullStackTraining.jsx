import React from 'react';
import abc from "../../../src/assets/dotnetcurriculum.jpg";
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div className="pt-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 sm:mb-[-80px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-[-80px] md:mb-[-80px] lg:mb-[-80px] font-extrabold text-black text-center leading-tight px-2 ">
                Pathologics : Best Dot Net Full Stack Developer Course in Pune with Placement Assistance
            </h2>
            <div className="flex flex-col md:flex-row sm-mt-[-20px] items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  mt-2 sm:-mt-[110px] lg:text-xl text-black leading-relaxed mb-6">
                        Our <strong>Dot NET Full Stack Developer course in Pune</strong>, Designed to simplify learning, the course
                        covers everything from essential coding practices to deploying robust applications, all while
                        keeping things engaging and easy to follow. After completing the course, you can join a paid
                        internship at Pathlogics, where you’ll work on live projects. This complete <Link to="/full-stack-web-development-course-in-pune" ><strong>Full Stack Training
                            in Pune</strong></Link> prepares you for
                        success in your tech profession by offering the ideal balance of theory and practice.


                    </p>

                    <a
                        href="/QuickEnquiry"
                        className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition"
                    >
                        Enroll Today!
                    </a>
                </div>
                {/* Image Section */}
                <div className="md:w-1/2 sm:h-[450px]  flex justify-center  ">
                    <img
                        src={abc}
                        alt="Pathlogic Scholarship "
                        className="w-full   sm:mt-0  sm:h-[450px]  -mt-[430px]  mb-4 object-cover rounded-md shadow-md"
                    />
                </div>
            </div>

        </div>
    );
}




