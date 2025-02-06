import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/Bannerrr.jpeg";

// import brochurePDF from "../../../assets/Brochure.pdf";

export default function ShortTermSalesforce() {
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

  const details = [
    {
      title: "Salesforce Fundamentals",
      description: "Learn the core concepts of Salesforce, including CRM, data modeling, and automation tools to drive business success.",
    },
    {
      title: "Salesforce Lightning & UI Development",
      description: "Master the Salesforce Lightning platform to build dynamic, responsive user interfaces and improve user experience.",
    },
    {
      title: "Advanced Salesforce Automation",
      description: "Gain expertise in Salesforce automation features such as workflows, process builder, and Apex to automate business processes.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-900 flex flex-col items-center py-10 px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl text-white font-bold mb-6">
          Full Stack <span className="text-orange-600">Salesforce</span> Program
        </h1>
        <p className="text-lg text-white mb-12 text-center">
          Master Salesforce and become an expert in CRM and automation with expert-led training and <strong>100% Placement Support</strong>.
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
              <h2 className="text-xl font-bold mb-4 text-orange-600">{detail.title}</h2>
              <p className="text-white">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="bg-gray-800 bg-opacity-60 p-6 w-full max-w-md rounded-lg shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
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
              <option value="SalesforceFundamentals">Salesforce Fundamentals</option>
              <option value="SalesforceLightning">Salesforce Lightning & UI Development</option>
              <option value="SalesforceAutomation">Advanced Salesforce Automation</option>
            </select>

            <div className="mt-6 flex gap-10 justify-center">
              <motion.button whileHover={{ scale: 1.1 }} className="bg-orange-600 text-white py-2 px-4 rounded-lg" type="submit">
                Submit
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="bg-orange-600 text-white py-2 px-4 rounded-lg" type="button" onClick={handleDownload}>
                Download Brochure
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      {showPopup && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-5 right-5 bg-gradient-to-br from-gray-900 to-teal-600 text-white px-6 py-3 rounded-lg shadow-lg">
          ✅ Brochure Download Started!
        </motion.div>
      )}

      {formPopup && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed bottom-10 right-10 bg-gradient-to-br from-gray-900 to-teal-900 text-white px-6 py-3 rounded-lg shadow-lg">
          ✅ Form Submitted Successfully!
        </motion.div>
      )}
    </div>
  );
}
