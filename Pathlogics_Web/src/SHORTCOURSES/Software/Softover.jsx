import React from "react";

const Softover = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">
          Software Testing Course
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn the essential skills for effective software testing and quality assurance through hands-on experience and modern techniques.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Overview</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            This course provides a comprehensive guide to software testing, covering both manual and automated techniques. 
            You'll gain the knowledge necessary to test various software components and ensure that applications meet quality standards.
          </p>
        </div>
      </section>

      <section className="mb-16 px-16 py-24o
       bg-gradient-to-r from-[#f78f53] via-[#f0c45e] to-[#ffcb9c]">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">1. Introduction to Software Testing</h3>
            <p className="text-gray-600 mt-4">
              - Learn the importance of software testing in the software development lifecycle. <br />
              - Types of testing (Manual, Automated, Functional, Non-Functional).
            </p>
          </div>

          {/* Module 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">2. Test Case Design and Execution</h3>
            <p className="text-gray-600 mt-4">
              - Design effective test cases using techniques like Boundary Value Analysis and Equivalence Partitioning. <br />
              - Learn to execute tests and report defects.
            </p>
          </div>

          {/* Module 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">3. Automation Testing with ReactJS</h3>
            <p className="text-gray-600 mt-4">
              - Introduction to automation testing in ReactJS applications using Jest and React Testing Library. <br />
              - Writing and executing unit tests for React components.
            </p>
          </div>

          {/* Module 4 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">4. UI Testing with TailwindCSS</h3>
            <p className="text-gray-600 mt-4">
              - Learn to test the responsiveness and UI components built with TailwindCSS. <br />
              - Conduct end-to-end tests using Cypress.
            </p>
          </div>

          {/* Module 5 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">5. Security and Performance Testing</h3>
            <p className="text-gray-600 mt-4">
              - Learn about security vulnerabilities and how to test for them (SQL Injection, XSS). <br />
              - Understand performance testing and how to measure load times and scalability.
            </p>
          </div>

          {/* Module 6 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">6. Reporting and Bug Tracking</h3>
            <p className="text-gray-600 mt-4">
              - Learn how to create detailed bug reports and track defects. <br />
              - Use tools like JIRA for bug management and progress tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Features</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
          <ul className="list-disc list-inside">
            <li>Hands-on practice with real-world projects</li>
            <li>Comprehensive coverage of both manual and automated testing</li>
            <li>Access to industry-standard testing tools like Jest, Cypress, and Selenium</li>
            <li>Practical assignments and quizzes</li>
            <li>Certification upon completion</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold text-blue-500 mb-4">Get Started Today!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Enroll now and take your software testing skills to the next level!
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default Softover;
