import React, { useState, useEffect } from 'react';
import placeholder from '../../assets/preview.png'; // Replace with your actual transparent image path
import bgimg from "../../assets/person.jpeg"
import { motion } from "framer-motion";

import brochurePDF from "../.././assets/Brochure.pdf";
// Loader Component
function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        <div className="flex items-center justify-center animate-show-hide">
          <img
            src={placeholder}
            alt="Loader"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Main Promotion Component
export default function Promotion() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [formPopup, setFormPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passingYear: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", formData);
    setFormPopup(true);
    setTimeout(() => setFormPopup(false), 3000);
  };

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    // Open in new tab
    window.open(brochurePDF, "_blank");

    // Create an invisible download link
    const link = document.createElement("a");
    link.href = brochurePDF;
    link.download = "Brochure.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM
  };
  // Simulate loading behavior (e.g., waiting for data or content to load)
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false); // After 6 seconds, stop showing loader and display content
    }, 1000); // 6-second loading time

    return () => clearTimeout(loadingTimer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; // Show the loader if still loading
  }

  return (
    <div className="relative flex flex-col   md:flex-row items-center justify-center min-h-[500px] w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 py-8  md:px-6">


      <div
        id="codetyping"
        style={{ backgroundImage: `url(${bgimg})` }}  // Use backticks (``) for template literals
        className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      >
      </div>



      {/* Left Side - Course Content */}
      <div className="w-full md:w-1/2  text-left  justify-start flex flex-col z-10 items-left text-white space-y-6 md:pr-10">
        <h1 className="text-3xl md:text-4xl font-bold">Full Stack Developer Course in Pune with 100% Placement Assistance.</h1>
        <p className="text-3xl  md:text-3xl text-gray-300"> Internship with stipend</p>
        <div className="  bg-opacity-50 py-2 rounded-lg backdrop-blur-md">
          <h2 className="text-xl font-semibold">Do you want to advance your web development career?</h2>
          <p className="text-gray-400 mt-2">
            As one of the top IT hubs in India, Pune is an excellent option for young tech professionals to
            advance their careers. To start their IT careers, many candidates search for a career-driven <strong>Full Stack Developer Course in Pune with Placement.</strong>
          </p>
          <div className=" text-left  justify-start  mt-4 md:text-left">
         
            <a
              href="/AboutUs"
              className="inline-block text-left  justify-start py-2 px-2 sm:px-3  sm:py-2 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition"
            >
              Explore More
            </a>
          </div>

        </div>
      </div>

      {/* Right Side - Enquiry Form */}
      <motion.div
        className="w-full md:w-1/3 mt-10 md:mt-0 z-10 bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Enquiry Form</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
          <select name="passingYear" value={formData.passingYear} onChange={handleChange} className="w-full p-2 border rounded-lg" required>
            <option value="">Select Passing Year</option>
            <option value="Pursuing">Pursuing</option>
            <option value="Completed">Completed</option>
          </select>
          <select name="interest" value={formData.interest} onChange={handleChange} className="w-full p-2 border rounded-lg" required>
            <option value="">Select Interest</option>
            <option value="JavaCoreConcepts">Java Core Concepts</option>
            <option value="JavaFrameworks">Java Frameworks & Libraries</option>
            <option value="DesignPatterns">Design Patterns & Best Practices</option>
            <option value="JavaWebDevelopment">Java Web Development</option>
            <option value="DatabaseConnectivity">Database Connectivity in Java</option>
          </select>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <motion.button whileHover={{ scale: 1.1 }} className="inline-block py-2 px-2 sm:px-3  sm:py-2 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition" type="submit">
              Submit
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} className="inline-block py-2 px-2 sm:px-3  sm:py-2 border border-teal-600 bg-teal-600 text-white rounded-md hover:bg-teal-800 transition" type="button" onClick={handleDownload}>
              Download Brochure
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
