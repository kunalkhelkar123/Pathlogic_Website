import React from 'react';
import abc from "../../../src/assets/FullStackTraining.jpg";
import { Link } from 'react-router-dom';

export default function AdvancedJavaCourseSection() {
    return (
        <div className="pt-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 -mb-2 sm:mb-[-80px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:mb-[-80px] md:mb-[-80px] lg:mb-[-80px] font-extrabold text-black text-center leading-tight px-2 ">
                Pathologics: Best Java Classes in Pune with Placement Assistance
            </h2>

            <div className="flex flex-col md:flex-row  sm:mt-10 lg:mt-10 md:mt-10   items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-gray-800  text-lg md:text-xl leading-relaxed mb-6">
          For learners who are already skilled in Core Java and want to enhance
           their knowledge of practical tools like <strong>Servlets
            </strong>, <strong>JSP</strong>, and <strong>JDBC</strong>, 
            Pathologics offers an <strong>Advanced Java Course in Pune</strong>. 
            The course provides a practical, fundamental approach with industry-aligned curriculum and expert guidance.
        </p>

        <p className="text-gray-800  text-lg md:text-xl leading-relaxed mb-6">
          This course smoothly guides you from Java <strong>basics to advanced concepts</strong> in a hands-on, 
          beginner-friendly way. Students work on practical projects, attend mock interviews, 
          and receive career support including placement assistance and resume building.
        </p>

        <p className="text-gray-800  text-lg md:text-xl leading-relaxed">
          With structured modules and one-on-one doubt-solving sessions, 
          the course prepares learners to confidently face tech interviews. 
          It’s an ideal step for anyone aiming to become a job-ready Java developer.
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
