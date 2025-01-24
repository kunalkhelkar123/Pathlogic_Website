import React from "react";
import { Link } from "react-router-dom";
function Secondpage(){
    return(<>
<div className="bg-gray-100 p-6 md:p-12">
      {/* Internship Program Section */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
          Internship Program
        </h1>
        <p className="text-gray-700 mb-6">
          Gain experience that makes you job-ready.
        </p>
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Start Your Career with Our Exclusive Post-Course Internship Program!
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Mentorship</li>
            <li>Real-World Projects</li>
            <li>100% Placement Guarantee</li>
          </ul>
          <Link to="/QuickEnquiry"> 
          <button className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700">
            Start Internship Program Today!
          </button></Link>
        </div>
      </section>

      {/* IT Certification Program Section */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
          Get Certified, Get Ahead
        </h1>
        <p className="text-gray-700 mb-6">
          Join Our Globally Recognized IT Certification Program!
        </p>
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Advanced Learning</li>
            <li>Expert Trainers</li>
            <li>In-Demand Skills</li>
          </ul>
          <Link to="/QuickEnquiry"> 
          <button className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700">
            Join IT Course Certification Program!
          </button></Link>
        </div>
      </section>

      {/* Paid Internship Section */}
      <section>
        <h1 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
          Learn, Earn, and Grow
        </h1>
        <p className="text-gray-700 mb-6">
          Join Our Paid Internship Program and start Your IT Career!
        </p>
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-700">
            <li>Paid Internship</li>
            <li>Industry Exposure</li>
            <li>Practical Learning</li>
          </ul>
          <Link to="/QuickEnquiry"> 
          <button className="mt-4 bg-orange-400 text-white px-6 py-3 rounded-md shadow hover:bg-orange-700">
            Make your Career with Our Paid Internship Program!
          </button></Link>
        </div>
      </section>
      
    </div>
    <hr/>


    </>)
}
export default Secondpage;