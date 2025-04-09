import React from 'react';
import abc from "../../../src/assets/manulatraining.jpg";

export default function Blogs() {
    return (
        <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 mb-4 sm:-mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-black text-center leading-tight px-2  mb-4">
                Learn, Practice, and Get Certified with Pathlogics Manual Testing Training in pune.
            </h2>

            <div className="flex flex-col md:flex-row  sm:-mt-20 items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  sm:-mt-[70px] lg:text-xl text-black leading-relaxed mb-6">
                        Get benefit of <strong>Pathlogics' Manual Testing Training in Pune  </strong> to learn the fundamentals
                        of software testing! In order to help you develop skills that are ready for job market,
                        our comprehensive course includes real-world scenarios, fundamental testing ideas, and
                        practical projects. This course guarantees that you learn, practice, and obtain a
                        recognized certification to advance your career under the guidance of expert instructors.
                        Our structured program will provide you the skills you need to succeed in the workplace,
                        whether you're an IT professional trying to advance your career or an aspiring tester.
                        Take the next step toward an exciting profession in software testing by enrolling today!



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
                        className="w-[450px]   sm:-mt-20   -mt-[10]  object-cover "
                    />
                </div>
            </div>
        </div>
    );
}
