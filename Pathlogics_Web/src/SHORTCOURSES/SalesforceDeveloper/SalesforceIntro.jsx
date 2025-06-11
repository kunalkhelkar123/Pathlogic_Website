import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SalesforceIntro = () => {
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
          Salesforce Development Course: Everything You Need to Build on the Cloud
        </motion.h2>

        {/* What is Salesforce */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is Salesforce?</h3>
          <p className="text-lg leading-relaxed">
            Salesforce is the world’s leading Customer Relationship Management (CRM) platform, empowering 
            businesses to build stronger connections with their customers. Used by top companies globally, 
            Salesforce helps organizations manage sales, service, marketing, and customer interactions in a 
            seamless, efficient, and cloud-based environment. Whether you’re a small startup or a multinational 
            corporation, Salesforce can be a game-changer in how you engage with your customers.
          </p>
        </div>

        {/* Why Learn Salesforce */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Learn Salesforce?</h3>
          <p className="text-lg leading-relaxed">
            In today’s rapidly changing digital world, businesses are continuously looking for ways to stay 
            connected to their customers and gain insights into their behavior. Salesforce is at the heart of 
            this transformation. By learning Salesforce course, you are unlocking a world of opportunities in 
            CRM administration, development, and data management. It’s one of the most in-demand skills in the 
            tech industry, making professionals with Salesforce expertise in high demand.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/fullstack-salesforce-developer" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
              Know More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SalesforceIntro;
