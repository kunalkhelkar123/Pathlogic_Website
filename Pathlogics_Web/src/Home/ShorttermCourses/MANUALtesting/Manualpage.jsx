import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../../../assets/Homebanner.jpeg";
import brochurePDF from "../../..//assets/Brochure.pdf";

export default function Manualpage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", formData);
    setFormPopup(true);
    setTimeout(() => setFormPopup(false), 3000);
  };

  // const handleDownload = () => {
  //   setShowPopup(true);
  //   setTimeout(() => setShowPopup(false), 3000);
  // };

  const details = [
    {
      title: "Software Testing Fundamentals",
      description:
        "Learn the basics of software testing, including test cases, test plans, and defect lifecycle.",
    },
    {
      title: "Manual Testing Techniques",
      description:
        "Master black-box testing, white-box testing, exploratory testing, and usability testing.",
    },
    {
      title: "Bug Tracking & Reporting",
      description:
        "Understand how to track, report, and manage bugs using tools like JIRA and Bugzilla.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-900 flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <h1 className="text-4xl text-white font-bold mb-6 text-center">
          Short-Term  <span className="text-orange-600">Manual Testing</span> Program
        </h1>
        <p className="text-lg text-white mb-12 text-center">
        Master Manual Testing concepts and become a proficient Manual Testing developer with expert-led training.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="grid gap-8 flex-grow">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-teal-800 bg-opacity-60 text-gray-800 rounded-lg shadow-lg p-6 transition duration-300 transform hover:scale-105 hover:bg-opacity-80"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4 text-orange-600">
                {detail.title}
              </h2>
              <p className="text-white">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gray-800 bg-opacity-60 p-6 w-full max-w-md rounded-lg shadow-lg"
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
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <select
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
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
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">Select Interest</option>
              <option value="Software Testing Fundamentals">
                Software Testing Fundamentals
              </option>
              <option value="Manual Testing Techniques">
                Manual Testing Techniques
              </option>
              <option value="Bug Tracking & Reporting">
                Bug Tracking & Reporting
              </option>
            </select>

            <div className="mt-6 flex gap-10 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white py-2 px-4 rounded-[5px] hover:bg-orange-700"
                type="submit"
              >
                Submit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-600 text-white py-2 px-4 rounded-[5px] hover:bg-orange-700"
                type="button"
                onClick={handleDownload}
              >
                Download Brochure
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
