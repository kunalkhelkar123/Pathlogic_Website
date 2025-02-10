"use client"

import {Cpu, Clock, Users, Code, Brain, BotMessageSquare} from "lucide-react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import technologies from "./data/technologies.js";
import WorkshopHeader from "./components/WorkshopHeader.jsx";
import './WorkshopsPage.css';
// import {Helmet} from "react-helmet-async";

const iconComponents = {
    Cpu: Cpu,
    Code: Code,
    Brain: Brain,
    BotMessageSquare: BotMessageSquare,
};

export default function WorkshopsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* SEO Metadata */}
            {/*<Helmet>*/}
            {/*    <title>Workshops | Pathlogics</title>*/}
            {/*    <meta name="description" content="Learn about our workshops and get access to cutting-edge technology."/>*/}

            {/*    /!* Open Graph Meta Tags *!/*/}
            {/*    <meta property="og:title" content="Workshops | Pathlogics" />*/}
            {/*    <meta property="og:description" content="Learn about our workshops and get access to cutting-edge technology." />*/}
            {/*    /!*<meta property="og:image" content="URL_to_image.jpg" />*!/*/}
            {/*    <meta property="og:url" content="https://www.pathlogics.in/workshops" />*/}
            {/*    <meta property="og:type" content="website" />*/}
            {/*</Helmet>*/}
            {/* Header Section */}
            <WorkshopHeader techUri="workshops" title="Workshops"  />

            {/* Workshops Grid */}
            <div className="mx-auto px-8 py-24 square-bg-pattern">
                <div className="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2">
                    {technologies.map((workshop) => {
                        const Icon = iconComponents[workshop.icon];  // Dynamically set the icon
                        return (
                            <motion.div
                                key={workshop.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                // whileHover={{ scale: 1.01 }}
                                className="max-w-screen-sm px-8 py-12 group relative flex flex-col justify-start hover:shadow-lg overflow-hidden rounded-2xl border hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 "
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 shadow-md bg-gradient-to-br from-gray-50 to-gray-100 opacity-70 circular-bg-pattern" />

                                {/* Icon */}
                                <div className="relative right-0 mb-4">
                                    <Icon className="h-12 w-12 text-orange-500" />
                                </div>

                                {/* Content */}
                                <div className="relative space-y-4">
                                    <h3 className="text-4xl font-bold text-orange-500">
                                        {workshop.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg ">
                                        {workshop.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-2 pt-4">
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Clock className="h-5 w-5" />
                                            <span>Duration: {workshop.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-600">
                                            <Users className="h-5 w-5" />
                                            <span>Course Mode: {workshop.mode}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="gap-6 pt-12 flex flex-row flex-wrap justify-center items-center">
                                        <Link to="/quickenquiry" className="">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                className="rounded-md bg-orange-500 px-6 py-3 text-base font-bold shadow-md text-white transition-colors hover:bg-orange-600"
                                            >
                                                    Apply Now
                                            </motion.button>
                                        </Link>
                                        <Link to={`/workspace/${workshop.techUri}`} className="">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                className="rounded-md bg-gray-800 px-6 py-3 text-base font-bold shadow-md text-white transition-colors hover:bg-gray-900"
                                            >
                                                    Know More
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}