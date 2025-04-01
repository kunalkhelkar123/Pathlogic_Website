import React from 'react';
import abc from "../../../src/assets/placementdevops.jpg";
import { Link } from 'react-router-dom';

export default function Blogs() {
    return (
        <div className="pt-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 sm:mb-[-80px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-[-80px] md:mb-[-80px] lg:mb-[-80px] font-extrabold text-black text-center leading-tight px-2 ">
                Why Pathlogics is the Best Devops Training Institute in Pune
            </h2>


            <div className="flex flex-col md:flex-row sm:mt-20 lg:mt-20 md:mt-10 items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center  md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  mt-2 sm:-mt-[120px] lg:text-xl text-black leading-relaxed mb-6">
                        Pathlogics stands out as the top choice for <strong>DevOps Training in Pune</strong> due to its comprehensive,
                        hands-on approach. Our DevOps certification course is designed to equip you with real-world skills,
                        focusing on automation, cloud management, and CI/CD pipelines. We prioritize practical learning, offering
                        projects that mirror industry scenarios, so you're prepared for the challenges of a DevOps role. With
                        expert trainers and personalized mentorship, we ensure you stay ahead of industry trends. Completing
                        the <strong>DevOps Certification Course at Pathlogics</strong> not only enhances your expertise but also boosts your
                        career prospects in today’s competitive IT market.

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
                        className="w-full   sm:-mt-10   -mt-[420px]  mb-4 object-cover rounded-md shadow-md"
                    />
                </div>
            </div>

        </div>
    );
}
