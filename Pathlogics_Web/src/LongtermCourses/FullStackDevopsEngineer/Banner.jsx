import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../../assets/Banner1.jpeg";
// import brochurePDF from "../../../assets/";
import brochurePDF from "../../../src/assets/Brochure.pdf";

export default function CoreWeb() {
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
      title: "Placement support",
      description: "Dedicated placement team helps you land the right job with personalized placement assistance.",
    },
    {
      title: "Weekly Mock interviews",
      description: "Practice and polish your interview skills with our weekly mock sessions for confidence-building.",
    },
    {
      title: "Free Resume Building & Guidance",
      description: "Get expert help in creating a professional resume to stand out in today’s competitive job market..",
    },
    {
      title: "Online/ Offline Programs",
      description: "Choose from flexible learning options, available both online and offline, to suit your needs.",
    },

  ];

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center text-gray-900 flex flex-col   items-center py-10 px-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl ml-[8px]  text-center font-bold  text-orange-600">
          Pathlogics: Industry-Focused DevOps Training in Pune

          </h1>
          {/* <p className="text-lg text-white mb-12 p-20">
          Become a job-ready Full Stack Web Developer in Pune with expert-led training, practical projects, and guaranteed placement support.
        </p> */}
        </motion.div>
        <div className="text-center max-w-3xl mx-auto px-4 text-lg text-white py-4 ">
        Advance your career with our DevOps training in Pune. Gain hands-on experience with real-world tools and master the skills to automate and manage infrastructure efficiently.
        </div>

        <div className="flex flex-col md:flex-row gap-16 w-full max-w-6xl">
          <div className="grid gap-2 flex-grow">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                className="bg-teal-800 bg-opacity-60 text-gray-800 rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105 hover:bg-opacity-80"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h2 className="text-lg font-bold mb-1 text-orange-600">{detail.title}</h2>
                <p className="text-white text-sm">{detail.description}</p>
              </motion.div>
            ))}
            <div className=" items-center justify-center  text-white p-2   mt-4">
              <p className="    text-lg font-semibold text-center  mb-4">
                We are conducting a new batch starting every Monday!
              </p>
              <div className=" text-center items-center justify-center   gap-4">
                <button className=" bg-white text-blue-900 font-semibold sm:mr-8 mt-4 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
                  📅 Date: 7 April 2025
                </button>
                <button className="bg-white text-blue-900 font-semibold py-2 mt-4 px-4 rounded-lg shadow-md hover:bg-gray-200">
                  🗓️ Day: Monday
                </button>
              </div>
            </div>
          </div>

          <motion.div className="bg-gray-800 bg-opacity-60 p-6 w-full max-w-md rounded-lg shadow-lg" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-orange-600 mb-8">Enquiry Form</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
                <option value="Frontend Development">Frontend Development</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="DevOps & Deployment">DevOps & Deployment</option>
                <option value="Placement Training">Placement Training</option>
              </select>

              <div className="mt-6 flex gap-10 justify-center">
                <motion.button whileHover={{ scale: 1.1 }} className="bg-orange-600  text-white py-2 px-4 rounded-[5px] hover:bg-orange-700" type="submit">
                  Submit
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="bg-orange-600 text-white py-2 px-4 rounded-[5px] hover:bg-orange-700" type="button" onClick={handleDownload}>
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




    </>
  );
}
