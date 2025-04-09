import React from 'react';
import abc from "../../../src/assets/salesforcetraingng.jpg";

export default function Blogs() {
    return (
        <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 mb-4 sm:-mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-black text-center leading-tight px-2  mb-4">
                The Best Salesforce Training Institute in Pune
            </h2>

            <div className="flex flex-col md:flex-row  sm:-mt-14 items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg  sm:-mt-[70px] lg:text-xl text-black leading-relaxed mb-6">
                        Build a successful career with <strong>Salesforce Developer Training</strong> at Pathlogics. The training covers key concepts,
                        including development, salesforce administrator training, and integration. Our structured program ensures
                        step-by-step learning, making it easy for beginners and professionals alike. With <strong>100% placement assistance</strong>,
                        interview preparation, and career guidance, we help you achieve your goals. Join Pathlogics today and take the
                        next step toward a rewarding Salesforce career.  Our curriculum is designed to align with industry standards,
                        ensuring you gain the most relevant skills. Get access to certification support and career mentorship for
                        long-term success.




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
                        className="w-[390px]   sm:-mt-20   -mt-[10]  object-cover "
                    />
                </div>
            </div>
        </div>
    );
}
