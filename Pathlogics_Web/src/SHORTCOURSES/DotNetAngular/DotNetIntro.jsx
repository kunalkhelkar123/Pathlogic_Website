import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DotNetIntro = () => {
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
          .NET with Angular: Power Your Career with Two Industry-Favorite Technologies
        </motion.h2>

        {/* What is Dot Net with Angular */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">What is Dot Net with Angular?</h3>
          <p className="text-lg leading-relaxed">
            Dot Net with Angular is a powerful combination used to build dynamic, scalable, and secure web applications.
            .NET (ASP.NET Core) is a popular backend framework by Microsoft used for developing APIs and web services using C#.
          </p>
          <p className="text-lg leading-relaxed">
            Angular is a front-end framework by Google used to build responsive and interactive single-page applications (SPAs).
          </p>
          <p className="text-lg leading-relaxed">
            Together, they allow developers to build complete web applications, from a robust backend to a modern, user-friendly interface.
          </p>
        </div>

        {/* Why Learn Dot Net with Angular */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Why Learn Dot Net with Angular?</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>High Demand in the IT Industry:</strong> Companies prefer developers who can work on both frontend and backend. Knowledge of .NET with Angular opens doors to many job roles.
            </li>
            <li>
              <strong>Strong Backend + Dynamic Frontend:</strong> .NET provides excellent security and performance for the backend, while Angular ensures a seamless and fast user experience.
            </li>
            <li>
              <strong>Career-Focused Skills:</strong> Learning this stack equips you with real-world development skills required by software companies, especially for web and enterprise applications.
            </li>
            <li>
              <strong>Microsoft + Google Technologies:</strong> Get trained in two of the most trusted technologies in the world, supported by a huge community and regular updates.
            </li>
            <li>
              <strong>Easy to Learn for Beginners:</strong> With proper guidance, even freshers or non-IT graduates can pick up .NET and Angular quickly and build professional-level applications.
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="/dotnet-angular-course" target="_blank" rel="noopener noreferrer">
            <button className="bg-orange-600 text-white text-center px-4 sm:mr-24 py-2 rounded-md shadow-md hover:bg-orange-600 transition">
              Know More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DotNetIntro;
