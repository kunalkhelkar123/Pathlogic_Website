import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../../../assets/Banner1.jpeg";
import brochurePDF from "../../../assets/brochure.pdf";

export default function Digitalmarketpage() {
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
      title: "15+ Industry-Recognized Certifications",
      description: "Enhance your resume with multiple recognized digital marketing certifications."
    },
    {
      title: "Hands-on Learning with Real Projects",
      description: "Gain practical experience by working on live digital marketing campaigns."
    },
    {
      title: "In-Demand Digital Skills",
      description: "Master SEO, SEM, content marketing, and other top digital marketing tools."
    },
    {
      title: "Career Support & Placement Guidance",
      description: "Get job-ready with resume building, interview training, and placement assistance."
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-[36px] md:text-[42px] font-bold mb-4 text-orange-600 whitespace-nowrap">
          Best Digital Marketing Course in Pune with 15+ Certifications.
        </h1>
        <p className="text-lg leading-relaxed">
          Start your career with the best digital marketing course in Pune, offering 15+ certifications to boost your skills and expertise. Gain practical skills in SEO, SEM, content marketing, and more. Start learning today and become an in-demand expert in the digital world!
        </p>
      </motion.div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl mt-10">
        {/* Features Section */}
        <div className="flex flex-col space-y-4 flex-1">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-[#004d40] bg-opacity-90 rounded-lg shadow-md px-6 py-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-md font-bold text-orange-500">
                {detail.title}
              </h3>
              <p className="text-sm mt-2">{detail.description}</p>
            </motion.div>
          ))}

          {/* Batch Info */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">
              New Digital Marketing batch starts every Monday!
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow-md">
                📅 Date: 7 April 2025
              </button>
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow-md">
                📆 Day: Monday
              </button>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <motion.div
          className="bg-[#1a1a2e] bg-opacity-90 p-6 w-full max-w-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
            Enquiry Form
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black"
              required
            />
            <select
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              className="w-full p-2 rounded-md text-black"
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
              className="w-full p-2 rounded-md text-black"
              required
            >
              <option value="">Select Interest</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO & SEM">SEO & SEM</option>
              <option value="Full Course + Placement">Full Course + Placement</option>
            </select>

            <div className="mt-6 flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700"
                type="submit"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
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
          className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Brochure Download Started!
        </motion.div>
      )}

      {formPopup && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Form Submitted Successfully!
        </motion.div>
      )}
    </div>
  );
}
