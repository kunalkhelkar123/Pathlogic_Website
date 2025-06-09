import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/Banner1.jpeg";
import brochurePDF from "../../assets/Brochure.pdf";

export default function Dotnetone() {
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
    const link = document.createElement("a");
    link.href = brochurePDF;
    link.download = "Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const details = [
    {
      title: "ASP.NET Core Fundamentals",
      description:
        "Master backend development with ASP.NET Core, focusing on REST APIs, authentication, and database integration.",
    },
    {
      title: "Angular for Frontend",
      description:
        "Build powerful, single-page applications using Angular with routing, services, and component-driven architecture.",
    },
    {
      title: "Real-World Projects",
      description:
        "Work on industry-relevant projects combining .NET and Angular to create full-stack web applications.",
    },
    {
      title: "Placement Support & Mock Interviews",
      description:
        "Get dedicated placement training, resume building, and regular mock interviews to crack job opportunities.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Main Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="w-full flex justify-center">
          <h1 className="text-[40px] font-bold mb-4 text-orange-600 text-center whitespace-nowrap">
            Dot Net with Angular Course in Pune with Placement Support
          </h1>
        </div>
        <p className="text-lg text-white text-center leading-relaxed">
          Enroll in our Dot Net with Angular course in Pune with placement support. Gain in-depth knowledge of ASP.NET Core and Angular to build modern, responsive web applications. Learn from industry experts and boost your career in software development.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl mt-10">
        {/* Left Side - Features */}
        <div className="flex flex-col space-y-[6px] flex-grow items-center">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-[#004d40] bg-opacity-90 rounded-md shadow-lg px-6 py-4 h-24 w-full flex flex-col justify-center max-w-3xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-bold text-orange-600">{detail.title}</h3>
              <p className="text-sm mt-1 text-white">{detail.description}</p>
            </motion.div>
          ))}

          {/* Batch Info */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-white">
              We are conducting a new batch starting every Monday!
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow-md">
                📅 Date: 7 April 2025
              </button>
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow-md">
                📆 Day: Monday
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <motion.div
          className="bg-[#1a1a2e] bg-opacity-90 p-6 w-full max-w-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Enquiry Form</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            />
            <select
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            >
              <option value="">Select Passing Year</option>
              <option value="Pursuing">Pursuing</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            >
              <option value="">Select Interest</option>
              <option value=".NET Development">.NET Development</option>
              <option value="Angular Development">Angular Development</option>
              <option value="Full Stack (.NET + Angular)">Full Stack (.NET + Angular)</option>
              <option value="Placement Training">Placement Training</option>
            </select>

            <div className="mt-6 flex gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700"
                type="submit"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700"
                type="button"
                onClick={handleDownload}
              >
                Download Brochure
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Popups */}
      {showPopup && (
        <motion.div
          className="fixed top-5 right-5 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          ✅ Brochure Download Started!
        </motion.div>
      )}

      {formPopup && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-800 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          ✅ Form Submitted Successfully!
        </motion.div>
      )}
    </div>
  );
}
