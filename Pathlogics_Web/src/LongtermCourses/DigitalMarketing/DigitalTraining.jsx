import React from 'react';
import DigitalMarketing from "../../assets/DigitalMarketing.jpg";
import { Link } from 'react-router-dom';

export default function DigitalTraining() {
    return (
        <div className="pt-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black text-center leading-tight px-2 mb-6">
                Pathologics – The Best Digital Marketing Training Institute In Pune
            </h2>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed mb-6">
                        Become a certified<strong> Digital Marketing Professional </strong>and secure an internship with a stipend immediately
                        after completing the course. Apply your skills in live projects and boost your professional portfolio.
                        Our <Link to="/PlacementDigital"><strong>Digital Marketing course in Pune with placement</strong></Link> ensures you gain hands-on experience and are industry-ready to
                        kickstart your career confidently. You’ll master in-demand digital strategies, work on real-world campaigns,
                        and gain insights into industry best practices. With guaranteed placement assistance and comprehensive
                        training, this course sets you on a path toward a high-paying and secure career in marketing.
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
                        src={DigitalMarketing}
                        alt="Pathlogics Digital Marketing"
                        className="w-full max-w-md rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
