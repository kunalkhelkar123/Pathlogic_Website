import React, { useState } from 'react';
import { motion } from 'framer-motion';

const toolsData = [
  {
    title: "Google Analytics",
    description: `Google Analytics is a must-have tool for tracking website performance. It helps marketers understand user behavior, traffic sources, and conversion paths, making it easier to optimize campaigns based on real data.`,
    points: [
      "Track website visitors and user actions",
      "Analyze traffic sources and conversion rates",
      "Make data-driven marketing decisions",
    ],
  },
  {
    title: "Google Search Console",
    description: `This tool gives insights into how your site performs in Google search results. It's crucial for monitoring SEO, fixing issues, and improving visibility.`,
    points: [
      "Track keyword rankings and search performance",
      "Identify and fix website issues",
      "Submit sitemaps for better indexing",
    ],
  },
  {
    title: "Google Ads",
    description: `Google Ads allows you to create paid search and display campaigns that appear across Google’s network. It's a key platform for learning PPC advertising and targeting the right audience effectively.`,
    points: [
      "Create targeted search, display, and video ads",
      "Manage budgets and bidding strategies",
      "Analyze ad performance with detailed insights",
    ],
  },
  {
    title: "Meta (Facebook) Ads Manager",
    description: `This tool lets you run and manage ad campaigns across Facebook, Instagram, and Messenger. It's essential for learning social media advertising and reaching highly targeted audiences.`,
    points: [
      "Set up and manage paid ad campaigns",
      "Define detailed audience targeting",
      "Monitor campaign performance in real-time",
    ],
  },
  {
    title: "SEMrush / Ubersuggest",
    description: `These tools help with SEO and keyword research. They provide insights into what people are searching for and how your competitors are performing online.`,
    points: [
      "Discover high-ranking keywords and content ideas",
      "Analyze competitor websites and backlinks",
      "Track SEO performance over time",
    ],
  },
  {
    title: "Mailchimp",
    description: `Mailchimp is widely used for email marketing. It helps you build mailing lists, create campaigns, and automate your communication with subscribers.`,
    points: [
      "Design and send email newsletters",
      "Automate subscriber interactions",
      "Track campaign performance and engagement",
    ],
  },
];

const DigitalMarketingTools = () => {
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
          Essential Tools Covered in Pathlogics Digital Marketing Course in Pune
        </motion.h3>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          In our Digital Marketing course, you won’t just learn the concepts, you’ll actually get hands-on with the tools that professionals use every day. From running ad campaigns to analyzing real-time data, you’ll work with industry-standard platforms that help create impactful and measurable marketing strategies. These tools are key to building smart, results-driven digital campaigns that stand out in today’s competitive online space.
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

export default DigitalMarketingTools;
