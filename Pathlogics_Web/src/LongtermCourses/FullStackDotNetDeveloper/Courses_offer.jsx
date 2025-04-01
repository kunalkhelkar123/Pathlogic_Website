import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import entity from "../../assets/entity1.png";
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
        className="text-sm sm:text-xl md:text-2xl font-bold text-gray-800"
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
            Master the Must-Know Tools in .NET Full Stack Development
          </h3>
        </div>
        <div>
          <motion.p
            className="text-sm sm:text-lg md:text-xl text-gray-700 text-center mb-6 sm:mx-[220px] md:mx-[220px] lg:mx-[220px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            In this course, you’ll gain in-depth, hands-on experience with the tools and technologies essential for full-stack development in .NET. You’ll learn how to build and manage efficient, high-quality applications that perform seamlessly across all layers.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-20 gap-12 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <TechCard
              logo={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"
                  alt="C# Logo"
                  className="w-12 h-12"
                />
              }
              label="C #"
              color="bg-gray-300"
            />
            <TechCard
              logo={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
                  alt="ASP.NET Core Logo"
                  className="w-14 h-14"
                />
              }
              label="ASP.NET Core"
              color="bg-purple-300"
            />
            <TechCard
              logo={<img src={entity} alt="Entity Framework Logo" className="h-20 w-22 object-fit text-white" />}
              label="Entity Framework"
              color="bg-teal-200"
            />

            <TechCard
              logo={
                <img
                  src="https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg"
                  alt="SQL Server Logo"
                  className="w-12 h-12"
                />
              }
              label="SQL Server"
              color="bg-blue-200"
            />
          </motion.div>

          <div className="mt-12 text-center">
            <Link to="/AwsDevops">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white text-sm sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:bg-orange-800"
              >
                Start Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
