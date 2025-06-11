import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: 'Python Programming Language',
    description:
      'Python is the core language for data science, known for its simplicity, versatility, and vast community support. It’s easy to learn and comes with a wide range of libraries and frameworks that are essential for data analysis and machine learning tasks.',
    points: [
      'Easy-to-read syntax',
      'Open-source and free',
      'Extensive libraries and frameworks (e.g., NumPy, Pandas, Matplotlib)',
    ],
  },
  {
    title: 'Pandas',
    description:
      'The go-to library for data manipulation and analysis. Pandas provides two essential data structures, DataFrame and Series to store and manipulate data in a tabular format.',
    points: [
      'Data cleaning and preprocessing',
      'Handling missing data',
      'Merging, grouping, and aggregating data',
      'Fast and efficient data manipulation',
    ],
  },
  {
    title: 'Matplotlib & Seaborn (Data Visualization)',
    description:
      'These libraries are used for visualizing data and drawing insights. Matplotlib is the most widely used library for creating static plots, while Seaborn builds on Matplotlib, providing an easier interface for creating more complex and informative visualizations.',
    points: [
      'Line, bar, scatter plots, histograms, and pie charts',
      'Customization of plots for better clarity and aesthetics',
      'Heatmaps and correlation matrices (Seaborn)',
      'Statistical visualizations',
    ],
  },
  {
    title: 'Scikit-learn (Machine Learning Library)',
    description:
      'Scikit-learn is a powerful machine learning library that provides simple and efficient tools for data mining and data analysis. It supports various supervised and unsupervised learning algorithms.',
    points: [
      'Regression, classification, and clustering algorithms',
      'Model evaluation and validation tools (cross-validation, metrics)',
      'Data preprocessing and feature selection',
      'Pipelines for automating machine learning workflows',
    ],
  },
  {
    title: 'TensorFlow & Keras (Deep Learning)',
    description:
      'TensorFlow is an open-source framework for deep learning developed by Google. Keras is a high-level neural networks API that runs on top of TensorFlow. These libraries are used for building and training deep learning models.',
    points: [
      'Building neural networks for complex data (images, text, etc.)',
      'Support for GPU acceleration to speed up training',
      'Easy-to-use API for model creation and training (Keras)',
    ],
  },
  {
    title: 'Power BI & Tableau (Data Visualization & Business Intelligence)',
    description:
      'These are business intelligence tools used for creating interactive dashboards and reports. While not core Python tools, they are widely used in data science to communicate insights effectively.',
    points: [
      'Interactive visualizations and reports',
      'Data integration from multiple sources',
      'Real-time data updates and dashboard customization',
    ],
  },
];

const DotNetTools = () => {
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
          Essentials Tools Used in the Data Science With Python Course
        </motion.h3>

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
            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition"
          >
            {showMore ? 'View Less' : 'View More Tools'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DotNetTools;
