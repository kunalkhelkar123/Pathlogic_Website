import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Code2, Workflow, Sparkles, Layers } from "lucide-react";
// Main Component
export default function Component() {

    const TechCard = ({ logo, label, color }) => (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center space-y-4"
        >
            <div
                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${color} shadow-lg`}
            >
                {logo}
            </div>
            <motion.span
                whileHover={{ color: "#4A90E2" }}
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800"
            >
                {label}
            </motion.span>
        </motion.div>
    );

    return (
        <>
            {/* Main Section */}
            <div className="flex flex-col justify-center items-center sm:mb-0 -mb-20 py-6 px-4 sm:px-8 bg-cover bg-center">
                <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
                        Essential Tools You’ll Master in Our Salesforce Developer Course

                    </h3>
                </div>
                <div>   <motion.p
                    className="text-sm sm:text-lg md:text-xl text-gray-700 text-center mb-6 sm:mx-[220px] md:mx-[220px] lg:mx-[220px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    In our Salesforce Developer Course you'll learn essential tools and technologies used by industry professionals to develop and customize Salesforce applications. This training will equip you with the skills needed to build, manage, and optimize CRM solutions

                </motion.p></div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-20 gap-12 justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <TechCard
                            logo={<Code2 className="w-12 h-12 text-gray-700" />} // Apex → Code
                            label="Apex"
                            color="bg-gray-200"
                        />
                        <TechCard
                            logo={<Workflow className="w-12 h-12 text-red-700" />} // Flow → Workflow
                            label="Flow"
                            color="bg-red-200"
                        />
                        <TechCard
                            logo={<Sparkles className="w-12 h-12 text-blue-700" />} // LWC → Sparkles
                            label="LWC"
                            color="bg-blue-200"
                        />
                        <TechCard
                            logo={<Layers className="w-12 h-12 text-yellow-700" />} // Aura → Layers
                            label="Aura"
                            color="bg-yellow-200"
                        />
                    </motion.div>


                    <div className="mt-12 text-center">

                        <Link to="/Salesforce"> <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="bg-orange-600 text-white text-sm sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-orange-800"
                        >
                            Start Now
                        </motion.button></Link>
                    </div>

                </div>


            </div>
        </>
    );
}
