import React from 'react';
import abc from "../../../src/assets/webplacement.jpg";

export default function Blogs() {
    return (
        <div className="pt-6 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 ">
                Pathlogics: The Best Full Stack Web Development Training Institute in Pune
            </h2>

            <div className="flex flex-col md:flex-row sm-mt-[-30px] items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  sm:-mt-[120px] lg:text-xl text-black leading-relaxed mb-6">
                        <strong>Pathlogic’s Full Stack Web Development Course in Pune</strong> offers a complete learning experience, covering everything from creating responsive websites to managing databases.
                        You will gain hands-on experience through practical projects, ensuring you are well-prepared for real-world challenges in web development.
                        Pathlogics, also known for offering one of the <strong>Best Java Classes in Pune</strong>, provides step-by-step guidance to help you master key web technologies.
                        This course is designed to equip you with the necessary skills to build a successful career in web development.
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
                        className="w-full   sm:mt-0   -mt-[420px]  mb-4 object-cover rounded-md shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
