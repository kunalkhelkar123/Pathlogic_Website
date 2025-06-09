import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PowerBIIntro = () => {
  return (
    <section className="px-4 py-12 bg-white text-gray-900">
      <div className="w-[90%] mx-auto space-y-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Power BI Training: Everything You Need to Become a Data Visualization Pro
        </motion.h2>

        {/* What is Power BI */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is Power BI?</h3>
          <p className="text-lg leading-relaxed">
            Microsoft Power BI is a powerful business intelligence tool that allows you to turn raw data into meaningful insights. By creating interactive reports, dashboards, and data visualizations, it helps organizations to make data-driven decisions.
            Power BI makes it easier to understand and show your data in a visually appealing and easy to understand way, regardless of whether you're working with big datasets or intricate statistics.
          </p>
        </div>

        {/* Why Should You Learn Power BI */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Should You Learn Power BI?</h3>
          <p className="text-lg leading-relaxed">
            Power BI is in high demand across industries as businesses turn to data-driven insights for decision-making. By learning Power BI, you can open up opportunities in data analysis, business intelligence, and reporting.
            It’s not just for analysts; marketers, financial professionals, and business leaders can all benefit from Power BI’s ability to visualize and interpret data.
          </p>
          <p className="text-lg leading-relaxed">
            The tool helps in the creation of engaging dashboards, turning complex data into visually compelling stories that are easy to understand. Power BI also offers real-time data access, ensuring you’re always working with the latest insights.
            With the user-friendly design, it’s easy to learn, making it a great choice for beginners and experienced professionals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition flex items-center gap-2 mx-auto">
              Know More <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PowerBIIntro;
