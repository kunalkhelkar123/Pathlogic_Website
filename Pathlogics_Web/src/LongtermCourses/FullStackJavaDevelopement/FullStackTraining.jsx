import React from 'react';
import abc from "../../../src/assets/FullStackTraining.jpg";
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div className="pt-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 -mb-2 sm:mb-[-80px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-[-80px] md:mb-[-80px] lg:mb-[-80px] font-extrabold text-black text-center leading-tight px-2 ">
                Pathologics: Best Java Classes in Pune with Placement Assistance
            </h2>

            <div className="flex flex-col md:flex-row  sm:mt-10 lg:mt-10 md:mt-10   items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  mt-2 sm:-mt-[120px] lg:text-xl text-black leading-relaxed mb-6">
                        Become a certified<strong> Java Full Stack Developer </strong>and secure an internship with a stipend immediately
                        after completing the course. Apply your skills in live projects and boost your professional portfolio.
                        Our <Link to="/PlacementJava"><strong>Full Stack Developer course in Pune with placement</strong> </Link> ensures you gain hands-on experience and are industry-ready to
                        kickstart your career confidently. You’ll master in-demand technologies, work on real-world applications,
                        and gain insights into industry best practices. With a guaranteed placement assistance and comprehensive
                        training, this course sets you on a path toward a high-paying and secure career in tech.
                    </p>

                    <a
                        href="/QuickEnquiry"
                        className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition"
                    >
                        Enroll Today!
                    </a>
                </div>
                {/* Image Section */}
                <div className="md:w-1/2  flex justify-center  ">
                    <img
                        src={abc}
                        alt="Pathlogic Scholarship "
                        className="w-full   sm:mt-0   -mt-[420px]  mb-4 object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
