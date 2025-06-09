import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Data Visualization",
    description: `Data visualization in Power BI allows you to turn complex data into easy-to-understand visual formats. It helps you spot trends, outliers, and patterns that might otherwise go unnoticed. With Power BI's intuitive drag-and-drop interface, you can create stunning charts, graphs, and maps that bring your data to life.`,
    points: [
      "Create dynamic, interactive dashboards and reports",
      "Transform data into visually engaging charts, graphs, and maps",
      "Customize visual elements to suit business needs",
    ],
  },
  {
    title: "Data Modeling",
    description: `Power BI's data modeling feature enables you to connect, organize, and structure data from multiple sources. By creating relationships between different datasets, you can build a comprehensive data model that is essential for accurate reporting and analysis. This helps ensure that your data is logically connected and ready for analysis.`,
    points: [
      "Establish relationships between tables and datasets",
      "Build calculated columns and measures for more complex analysis",
      "Use Power BI’s DAX language to create powerful formulas",
    ],
  },
  {
    title: "Data Transformation",
    description: `Data transformation in Power BI allows you to clean, reshape, and prepare data for analysis. With the Power Query Editor, you can remove inconsistencies, merge tables, and apply necessary transformations to make your data ready for reporting. This step ensures that the data you work with is accurate and optimized.`,
    points: [
      "Cleanse and filter raw data to remove errors",
      "Merge and transform multiple data sources",
      "Perform calculations and apply transformations using Power Query Editor",
    ],
  },
  {
    title: "Interactive Reports",
    description: `Interactive reports in Power BI enable users to explore data in a dynamic way. By incorporating slicers, drilldowns, and interactive visuals, Power BI lets users engage with reports in real-time, allowing for deeper insights and better decision-making.`,
    points: [
      "Use slicers and filters to explore data interactively",
      "Drill down into data for detailed insights",
      "Provide dynamic, user-driven reports that evolve with the data",
    ],
  },
];

const PowerBITools = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleTools = showMore ? toolsData : toolsData.slice(0, 2);

  return (
    <section className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-10"
        >
          Essential Power BI Data Analytics Toolkit
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Power BI is designed to make data analysis simple and accessible, no matter your level of expertise. It brings together powerful features for visualizing, modeling, transforming, and reporting data, all in one place. With its user-friendly tools, turning complex data into clear, meaningful insights has never been easier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {visibleTools.map((tool, idx) => (
            <div key={idx}>
              <h4 className="text-blue-600 text-2xl font-semibold mb-2">{tool.title}</h4>
              <p className="text-black mb-3">{tool.description}</p>
              <ul className="list-disc list-inside text-black space-y-1">
                {tool.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PowerBITools;
