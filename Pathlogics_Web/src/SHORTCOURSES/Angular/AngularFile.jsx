import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AngularFile = () => {
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
          AngularJS – Everything You Need to Succeed as a Developer
        </motion.h2>

        {/* What is AngularJS */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is AngularJS?</h3>
          <p className="text-lg leading-relaxed">
            AngularJS is a popular JavaScript framework created by Google to help developers build fast and interactive websites. Instead of writing tons of code from scratch, AngularJS gives you ready-to-use features that make building web apps much easier. Whether it’s creating dynamic pages, reusing components, or syncing your data in real time. AngularJS takes care of the heavy lifting so you can focus on building cool, user-friendly apps that actually work smoothly.
          </p>
        </div>

        {/* Why Learn AngularJS */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Learn AngularJS?</h3>
          <p className="text-lg leading-relaxed">
            If you’re thinking about a career in web development, AngularJS is a great skill to have in your toolkit. It’s trusted by companies around the world to build fast, modern web apps and it’s beginner-friendly too. Whether you want to become a frontend developer or take the full-stack route, learning AngularJS gives you a solid head start. Plus, when you practice by building real projects, it’s not just learning, it’s career-building.
          </p>
        </div>

        {/* AngularJS vs Angular */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">AngularJS vs. Angular – What’s the Difference?</h3>
          <p className="text-lg leading-relaxed">
            It’s easy to get confused between AngularJS and Angular, they sound almost the same! But here’s the deal: AngularJS is the original version, built using JavaScript. Angular (2 and above) is the newer version, built with a different language called TypeScript. While they work a bit differently, learning AngularJS first gives you a strong foundation. It helps you understand the core concepts, so moving to modern Angular later becomes way easier.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/full-stack-web-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition">
              Know More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AngularFile;
