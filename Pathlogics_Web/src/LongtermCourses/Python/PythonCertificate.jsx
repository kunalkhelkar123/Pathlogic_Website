import React from 'react';
import abc from "../../../src/assets/salesforcetraingng.jpg"; // You can replace this with a Python course image if needed

export default function Blogs() {
    return (
        <div className="pt-10 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 mb-2 sm:-mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-black text-center leading-tight px-2 mb-4">
               Pathlogics: The Best Institute for Full Stack Python Developer Course in Pune

            </h2>

            <div className="flex flex-col md:flex-row sm:-mt-14 items-center justify-between min-h-screen space-y-6 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg sm:-mt-[70px] lg:text-xl text-black leading-relaxed mb-6">
                        
At Pathlogics, we don’t just teach Python, we build developers. Our Full Stack Python Developer Course in Pune combines expert-led training with real-world projects, covering front-end to back-end technologies. 
From core Python to Django, databases, APIs, and more, you'll gain skills that are in high demand. Whether you're aiming for web, mobile, or enterprise applications, we’ve got you covered. Get certified, get confident, Build a strong portfolio and get placed with 100% job assurance.With live projects, expert guidance, and interview prep, we make sure you’re job-ready.
 Pathlogics is your launchpad to a successful tech career in Pune!

                    </p>

                    <a
                        href="/QuickEnquiry"
                        className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition"
                    >
                        Enroll Today!
                    </a>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={abc}
                        alt="Pathlogics Full Stack Python Training"
                        className="w-[390px] sm:-mt-20 -mt-[10] object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
