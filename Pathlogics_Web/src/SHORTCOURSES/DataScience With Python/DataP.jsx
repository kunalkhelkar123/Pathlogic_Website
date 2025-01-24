import React from "react";
import { Link } from "react-router-dom";

const DataP = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 bg-black-50">
      <header className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-600">
          Data Science with Python Course
        </h2>
        <p className="text-xl text-black-700 mt-4 max-w-2xl mx-auto">
          Learn the fundamentals of Data Science and master Python to analyze, visualize, and model data effectively for real-world applications.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Course Overview</h2>
        <div className="max-w-4xl mx-auto text-lg text-black-700">
          <p>
            This comprehensive Data Science course is designed to equip you with the tools, techniques, and best practices needed to succeed in the rapidly growing field of data science. By the end of the course, you will have the knowledge and skills required to analyze large datasets, build machine learning models, visualize data insights, and deploy solutions into production. Whether you're looking to start a career in Data Science or level up your skills, this course will provide you with the foundation to excel.
          </p>
          <p className="mt-4">
            Through practical examples, projects, and a hands-on approach, you will build a strong portfolio that demonstrates your capabilities to future employers. Additionally, the course prepares you for the challenges of real-world data science problems, including cleaning messy data, working with unstructured data, and deploying models at scale.
          </p>
        </div>
      </section>

      <section className="mb-16 px-8 py-16 bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] overflow-hidden">
        <h2 className="text-4xl font-bold text-white-600 text-center mb-8">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">1. Introduction to Data Science</h3>
            <ul className="text-black-600 mt-4">
              <li>Explore what Data Science is, its applications in business, healthcare, finance, and more.</li>
              <li>Gain insights into the data science pipeline: data collection, cleaning, exploration, analysis, and visualization.</li>
              <li>Understand the different roles in data science such as Data Analyst, Data Scientist, and Machine Learning Engineer.</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">2. Python for Data Science</h3>
            <ul className="text-black-600 mt-4">
              <li>Master Python fundamentals, including variables, loops, functions, and error handling.</li>
              <li>Work with essential libraries like NumPy, Pandas, and Matplotlib for efficient data manipulation and analysis.</li>
              <li>Learn data wrangling techniques to clean, transform, and manipulate raw data into a structured format.</li>
            </ul>
          </div>

          {/* Module 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">3. Data Visualization</h3>
            <ul className="text-black-600 mt-4">
              <li>Learn the principles of effective data visualization to present data in a clear, understandable way.</li>
              <li>Create static and interactive visualizations using libraries like Matplotlib, Seaborn, and Plotly.</li>
              <li>Understand the use of different types of charts, including line, bar, scatter, heatmaps, and pie charts.</li>
              
            </ul>
          </div>

          {/* Module 4 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">4. Machine Learning Basics</h3>
            <ul className="text-black-600 mt-4">
              <li>Understand the theory behind machine learning algorithms: supervised learning, unsupervised learning, and reinforcement learning.</li>
              <li>Implement key algorithms such as Linear Regression, Decision Trees, Random Forests, and K-Means clustering.</li>
              <li>Learn about model evaluation and validation techniques like cross-validation, A/B testing, and performance metrics.</li>
  
            </ul>
          </div>

          {/* Module 5 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">5. Statistical Analysis</h3>
            <ul className="text-black-800 mt-4">
              <li>Learn key statistical concepts such as probability theory, distributions, hypothesis testing, and sampling methods.</li>
              <li>Understand correlation, regression analysis, and time series forecasting techniques.</li>
              <li>Apply statistical methods to interpret data, test hypotheses, and make data-driven decisions.</li>
            </ul>
          </div>

          {/* Module 6 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800">6.Project and Deployment</h3>
            <ul className="text-black-600 mt-4">
              <li>Work on capstone projects where you will apply all the concepts you've learned to real-world datasets.</li>
              <li>Learn how to deploy machine learning models into production using frameworks such as Flask, Django, or FastAPI.</li>
              <li>Deploy data science applications as web apps or APIs that can interact with users in real-time.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Course Features</h2>
        <div className="max-w-3xl mx-auto text-lg text-black-600 space-y-4">
          <ul className="list-disc list-inside">
            <li>In-depth coverage of Python, Data Science libraries, and machine learning tools.</li>
            <li>Real-world data analysis and machine learning projects to build your portfolio.</li>
            <li>Hands-on assignments and quizzes to reinforce learning and challenge your skills.</li>
            <li>Direct access to instructors and a community of learners for support and collaboration.</li>
            <li>Certification upon completion to boost your resume and career prospects in Data Science.</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Start Your Journey in Data Science!</h2>
        <p className="text-lg text-black-600 mb-6" >
          Enroll now and master Data Science with Python to take your career to the next level!
        </p>
        <Link to="/quickenquiry">
          <button className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300 ">
            Enroll Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default DataP;
