import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/Banner1.jpeg"; 
import brochurePDF from "../../assets/Brochure.pdf"; 

export default function NodeJsCoursePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batchSchedule: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [formPopup, setFormPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormPopup(true);
    setTimeout(() => setFormPopup(false), 3000);
  };

  const courseFeatures = [
    {
      title: "Placement Support",
      description:
        "Dedicated placement team helps you land the right job with placement assistance and weekly mock interviews.",
    },
    {
      title: "100% Practical Training",
      description:
        "Every concept is taught with practical implementation, not just theory.",
    },
    {
      title: "Online/ Offline Programs",
      description:
        "Choose from flexible learning options, available both online and offline, to suit your needs.",
    },
    {
      title: "Course Duration",
      description:
        "Master concepts step-by-step with structured training over 4 months.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white py-12 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Best Node JS Course In Pune with Certification
        </h1>
        <p className="text-lg">
          Start your coding journey by building awesome web apps with Node.js course in Pune.
          Get certified and gain real project experience to boost your career.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 mt-10 max-w-6xl mx-auto">
        {/* Left Side - Info Boxes & Buttons */}
        <div className="flex flex-col flex-1 space-y-4">
          {courseFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#003d33] bg-opacity-90 rounded-md shadow-md px-6 py-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-orange-600">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-white">{item.description}</p>
            </motion.div>
          ))}

          {/* Batch Info */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-white">
              We are conducting a new batch starting every Sunday!
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow">
                📅 Date: 9 June 2025
              </button>
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md shadow">
                📆 Day: Sunday
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.div
          className="bg-[#1a1a2e] bg-opacity-90 p-6 w-full max-w-md rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Enquiry Form
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded-md text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded-md text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 rounded-md text-black"
              required
            />
            <select
              name="batchSchedule"
              value={formData.batchSchedule}
              onChange={handleChange}
              className="p-2 rounded-md text-black"
              required
            >
              <option value="">Select Batch Schedule</option>
              <option value="Weekday">Weekday</option>
              <option value="Weekend">Weekend</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>

            <div className="flex gap-4 mt-4 justify-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
              >
                Download Brochure
              </button>
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
        >
          ✅ Brochure Download Started!
        </motion.div>
      )}

      {formPopup && (
        <motion.div
          className="fixed bottom-10 right-10 bg-green-800 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✅ Form Submitted Successfully!
        </motion.div>
      )}
    </div>
  );
}
