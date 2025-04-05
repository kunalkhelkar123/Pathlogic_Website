import React from 'react';
import abc from "../../../src/assets/webplacement.jpg";

export default function Blogs() {
    return (
        <div className="pt-6 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 ">
                Pathlogics Software Testing Training in Pune: Your Path to a Successful Career
            </h2>

            <div className="flex flex-col md:flex-row sm-mt-[-30px] items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  sm:-mt-[120px] lg:text-xl text-black leading-relaxed mb-6">
                        Pathlogics Software Testing Training in Pune offers a comprehensive curriculum designed to help you kickstart
                        a successful career in the QA industry. Our course covers both <strong>manual testing</strong> and <strong>automation testing</strong>, giving
                        you a well-rounded skill set that is highly valued by top companies. With hands-on training on industry-standard
                        tools like Selenium and JIRA, Whether you're new to software testing or looking to upgrade your skills, our
                        program prepares you for real-world challenges. Enroll today to gain the expertise needed to excel in manual
                        and automation testing and secure a rewarding career.


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
