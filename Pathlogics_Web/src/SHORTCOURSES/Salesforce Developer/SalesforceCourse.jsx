import React from "react";

const SalesforceCourse = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600">
          Salesforce Developer Course
        </h1>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Master Salesforce development and learn to build robust, scalable, and dynamic business solutions with hands-on training.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Overview</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            This course offers an in-depth understanding of Salesforce development tools and methodologies. You'll learn to create, customize, and deploy Salesforce solutions tailored to business needs.
          </p>
        </div>
      </section>

      <section className="mb-16 px-8 py-16 bg-gradient-to-r from-[#6fa6df] via-[#86c4f8] to-[#b9e2ff]">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">1. Introduction to Salesforce</h3>
            <p className="text-gray-600 mt-4">
              - Understand Salesforce fundamentals and its ecosystem. <br />
              - Learn about Salesforce CRM and its business applications.
            </p>
          </div>

          {/* Module 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">2. Apex Programming</h3>
            <p className="text-gray-600 mt-4">
              - Learn the basics of Apex, Salesforce's programming language. <br />
              - Write triggers, classes, and execute SOQL and SOSL queries.
            </p>
          </div>

          {/* Module 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">3. Lightning Component Framework</h3>
            <p className="text-gray-600 mt-4">
              - Build modern and responsive UI components with Lightning Web Components (LWC). <br />
              - Understand component lifecycle and event handling.
            </p>
          </div>

          {/* Module 4 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">4. Salesforce Security</h3>
            <p className="text-gray-600 mt-4">
              - Learn about Salesforce security features like profiles, roles, and sharing rules. <br />
              - Implement security best practices to protect sensitive data.
            </p>
          </div>

          {/* Module 5 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">5. Deployment and DevOps</h3>
            <p className="text-gray-600 mt-4">
              - Learn deployment strategies and tools like Change Sets and Salesforce CLI. <br />
              - Introduction to Salesforce DevOps for efficient development workflows.
            </p>
          </div>

          {/* Module 6 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800">6. Integration and APIs</h3>
            <p className="text-gray-600 mt-4">
              - Understand REST and SOAP APIs for integrating Salesforce with external systems. <br />
              - Learn to use external services for seamless data exchange.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-blue-500 text-center mb-8">Course Features</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
          <ul className="list-disc list-inside">
            <li>Comprehensive hands-on training with real-world projects</li>
            <li>In-depth coverage of Apex, LWC, and Salesforce tools</li>
            <li>Access to Salesforce certification preparation materials</li>
            <li>Guided assignments and industry-level case studies</li>
            <li>Official certification upon successful completion</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold text-blue-500 mb-4">Start Your Journey as a Salesforce Developer!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Enroll now and become a Salesforce expert with in-demand skills!
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          Enroll Now
        </button>
      </section>
    </div>
  );
};

export default SalesforceCourse;
