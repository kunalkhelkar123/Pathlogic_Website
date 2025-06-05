import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ReactIntro = () => {
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
          React JS Course – Everything You Need to Succeed as a UI Developer
        </motion.h2>

        {/* What is React JS */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is React JS?</h3>
          <p className="text-lg leading-relaxed">
            React JS is a super popular JavaScript library developed by Facebook in 2013 and has
            quickly become one of the most widely used front-end libraries in the world. It is
            designed to help developers build fast, interactive, and user-friendly web interfaces.
            Instead of writing a ton of code from scratch, React lets you build reusable pieces
            called components that make development faster and more organized.
          </p>
          <p className="text-lg leading-relaxed">
            One of the coolest things about React is how it manages data and updates only the
            parts of a web page that change, which means smoother performance and a better user
            experience. That’s why it’s the go-to tool for building single-page applications,
            modern websites where everything loads without constantly refreshing the page.
          </p>
        </div>

        {/* Where is React JS Used */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Where is React JS Used?</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Social media platforms (e.g., Facebook, Instagram)</li>
            <li>Video streaming apps (e.g., Netflix)</li>
            <li>E-commerce websites (e.g., Shopify, Flipkart)</li>
            <li>SaaS platforms and dashboards</li>
            <li>Portfolio websites and blogs</li>
            <li>Admin panels and CMS interfaces</li>
          </ul>
        </div>

        {/* Why Learn React JS */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Learn React JS?</h3>
          <p className="text-lg leading-relaxed">
            Learning React JS means you're learning how the web works today. With its reusable
            components and huge community support, React makes building user-friendly apps easier
            and more efficient.
          </p>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>High demand in the job market</li>
            <li>Easy to learn with JavaScript knowledge</li>
            <li>Reusable components save development time</li>
            <li>Perfect for building responsive SPAs</li>
            <li>
              Strong community and ecosystem (React Router, Redux, Next.js, etc.)
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/full-stack-web-development" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
      know more
      </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReactIntro;
