import React from "react";
import { Link } from "react-router-dom";

const SalesforceCourse = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 bg-black-50">
      <header className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-600">
          Salesforce Developer Course
        </h2>
        <p className="text-xl text-black-600 mt-4 max-w-2xl mx-auto">
          Master Salesforce development and learn to build robust, scalable, and dynamic business solutions with hands-on training.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-8">Course Overview</h2>
        <div className="max-w-4xl mx-auto text-lg text-black-900">
          <p>
            This course offers an in-depth understanding of Salesforce development tools and methodologies. You'll learn to create, customize, and deploy Salesforce solutions tailored to business needs. Whether you're aiming for a career as a Salesforce Developer or looking to enhance your current skills, this course provides practical knowledge of Salesforce's ecosystem, including its cloud offerings, automation tools, and integration capabilities.
          </p>
        </div>
      </section>

      <section className="mb-16 px-8 py-16 bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
        <h2 className="text-4xl font-bold text-black-600 text-center mb-8">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">1. Introduction to Salesforce</h3>
            <ul className="text-black-600 mt-4">
              <li>Understand the Salesforce ecosystem, including Sales Cloud, Service Cloud, and Marketing Cloud.</li>
              <li>Learn about Salesforce CRM and its key features such as lead management, opportunity tracking, and automation.</li>
              <li>Explore the different Salesforce products, tools, and platforms used for business solutions and how they interact with each other.</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">2. Apex Programming</h3>
            <ul className="text-black-600 mt-4">
              <li>Master the basics of Apex, Salesforce's server-side programming language designed for developing business logic.</li>
              <li>Learn to write triggers to automate Salesforce processes such as record updates, validation, and data manipulation.</li>
              <li>Understand how to create Apex classes for reusable logic and better code organization.</li>

            </ul>
          </div>

          {/* Module 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">3. Lightning Component Framework</h3>
            <ul className="text-black-600 mt-4">
              <li>Learn to build modern and responsive user interfaces (UI) using Lightning Web Components (LWC), the Salesforce platform’s framework for developing web components.</li>
              <li>Understand the component lifecycle, event handling, and how to build interactive, user-friendly components.</li>
              <li>Create reusable components for UI elements like forms, tables, and dashboards to streamline development.</li>
  
            </ul>
          </div>

          {/* Module 4 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">4. Salesforce Security</h3>
            <ul className="text-black-600 mt-4">
              <li>Learn about Salesforce's security features such as profiles, roles, permission sets, and sharing rules to control data access.</li>
              <li>Understand how to implement security best practices for protecting sensitive data within the Salesforce platform.</li>
              <li>Explore multi-factor authentication (MFA), field-level security, and other tools used to secure Salesforce applications and user data.</li>
            </ul>
          </div>

          {/* Module 5 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">5. Deployment and DevOps</h3>
            <ul className="text-black-600 mt-4">
              <li>Learn deployment strategies for Salesforce applications, including how to use Change Sets and Salesforce CLI for version control and deployment automation.</li>
              <li>Understand the Salesforce development lifecycle from sandbox to production, and learn best practices for testing and deployment.</li>
              <li>Introduction to Salesforce DevOps tools and concepts, including CI/CD (Continuous Integration and Continuous Deployment) pipelines.</li>
          
            </ul>
          </div>

          {/* Module 6 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-black-800">6. Integration and APIs</h3>
            <ul className="text-black-600 mt-4">
              <li>Understand how to use REST and SOAP APIs for integrating Salesforce with external systems, such as ERP, databases, and third-party platforms.</li>
              <li>Learn how to create and consume web services within Salesforce using Apex and external integrations.</li>
              <li>Integrate Salesforce with other applications using tools like MuleSoft, the Salesforce integration platform, to enable seamless data exchange.</li>
  
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Course Features</h2>
        <div className="max-w-3xl font-semibold mx-auto text-lg text-black-800 space-y-4">
          <p>
            <span>1. Comprehensive hands-on training with real-world projects using Salesforce developement tools.</span>
                 <span>2. In-depth coverage of Apex, Lightning Web Components (LWC).</span>
            <p>3. Access to Salesforce certification preparation materials, including mock exams,study guides.</p>
            <p>4. Guided assignments and industry-level case studies to help you develop practical problem-solving skills.</p>
            <p>5. Official Salesforce Developer certification preparation, making you ready for real-world Salesforce job roles.</p>
            <p>6. Opportunities to work on full-stack Salesforce development projects that involve both front-end,back-end components.</p>
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Start Your Journey as a Salesforce Developer!</h2>
        <p className="text-lg text-black-600 mb-6">
          Enroll now and become a Salesforce expert with in-demand skills!
        </p>
        <Link to="/quickenquiry">
          <button className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Enroll Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default SalesforceCourse;
