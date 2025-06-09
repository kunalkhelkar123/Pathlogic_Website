import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ManualIntro = () => {
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
          Manual Testing Course: Your First Step Into the World of Quality Assurance
        </motion.h2>

        {/* What is Manual Testing */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is Manual Testing?</h3>
          <p className="text-lg leading-relaxed">
            Manual testing is a process where software applications are tested manually by a tester without the use of automated tools.
            Testers execute test cases based on requirements and report bugs or issues in the system.
            It involves validating the software’s functionality, usability, and performance from a user’s point of view.
            Manual testing ensures that the application behaves as expected in real-world usage.
            This process is fundamental during the early stages of development or when testing rapidly changing applications.
          </p>
        </div>

        {/* Importance of Manual Testing */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is the Importance of Manual Testing?</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Detects bugs that automation may miss</li>
            <li>Ideal for exploratory and usability testing</li>
            <li>Validates real-world user scenarios</li>
            <li>Offers flexibility and human intuition in QA</li>
          </ul>
        </div>

        {/* Growing Demand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Growing Demand of Manual Testing</h3>
          <p className="text-lg leading-relaxed">
            The demand for manual testing has continued to grow over the years, driven by its critical role in user experience and dynamic application testing.
            While automation tools excel in repetitive tasks, manual testing remains essential for verifying UI/UX, performing exploratory testing, and handling complex scenarios.
            Many industries, especially healthcare, finance, and e-commerce, rely on manual testers to ensure product quality before release.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/manual-testing-course" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition flex items-center gap-2 mx-auto">
              Know More <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManualIntro;
