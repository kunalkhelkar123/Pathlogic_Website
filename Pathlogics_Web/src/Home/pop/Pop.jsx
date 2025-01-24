//****************************************************************************************** */

import React, { useState } from "react";
import img from "../../assets/pop.png";
import emailjs from "@emailjs/browser";
function Pop() {
  let [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    degree: "",
    specialization: "",
    currentYear: "",
    passingYear: "",
    course: "",
  });

  // Handle form input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle closing the popup
  function handleClose() {
    setIsOpen(false);
  }

  // Send email using emailjs
  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      city: formData.city,
      phone: formData.phone,
      degree: formData.degree,
      specialization: formData.specialization,
      currentYear: formData.currentYear,
      passingYear: formData.passingYear,
      course: formData.course,
    };
    try {
      const response = await emailjs.send("service_db5sgob", "template_326m16e", {
        name: formData.fullName,
        email: formData.email,
        city: formData.city,
        phone: formData.phone,
        degree: formData.degree,
        specialization: formData.specialization,
        currentYear: formData.currentYear,
        passingYear: formData.passingYear,
        course: formData.course,
      }, "k05tTTCLechKDk94r")

      if (response) {

        setIsOpen(false);
        // console.log("send ")
        // alert("send ")
      }
      else {
        console.log("not send ")
        alert(" not send ")


      }
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Failed to send your message. Please try again later.");
    }
  }

  return (


    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 min-h-screen  ">
        <div
          className="bg-white w-100 p-9 rounded-lg shadow-lg z-50"
          style={{ width: "696px" }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={{ height: "15px", width: "15px" }}
              onClick={() => handleClose()}
            >
              <img src={img} />
            </button>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Contact Form</h1>
          <form onSubmit={sendEmail} >
            {/* Full Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block font-medium text-gray-700 mb-1"
                  htmlFor=" fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                />
              </div>
            </div>

            {/* City and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block font-medium text-gray-700 mb-1"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Ex: 9866666699"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                />
              </div>
            </div>

            {/* degree and specilization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-medium mb-1" htmlFor="pin-code">
                  Degree
                </label>
                <select
                  id="degree"
                  name="degree"
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                >
                  <option value="" disabled selected>
                    Select One
                  </option>
                  <option value="B.TECH">B.TECH</option>
                  <option value="BE">BE</option>
                  <option value="M.TECH">M.TECH</option>
                  <option value="MCA">MCA</option>
                  <option value="BCA">BCA</option>
                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="college">
                  Specialization
                </label>

                <input
                  id="specialization"
                  name="specialization"
                  type="text"
                  onChange={handleChange}
                  placeholder="enter specialization"
                  className="w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                />
              </div>
            </div>

            {/* Current Year and Passing Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block font-medium mb-1"
                  htmlFor="current-year"
                >
                  Current Year
                </label>
                <select
                  id="currentYear"
                  name="currentYear"
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                >
                  <option value="" disabled>
                    Select your current year
                  </option>

                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="4">Passout</option>
                </select>
              </div>
              <div>
                <label
                  className="block font-medium mb-1"
                  htmlFor="passingYear"
                >
                  Year of Passing
                </label>
                <select
                  id="passingYear"
                  onChange={handleChange}
                  name="passingYear"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                  required
                >
                  <option value="" disabled>
                    Select your year of passout
                  </option>
                  <option value="2024">2000</option>
                  <option value="2025">2001</option>
                  <option value="2026">2002</option>
                  <option value="2024">2003</option>
                  <option value="2025">2004</option>
                  <option value="2026">2005</option>
                  <option value="2024">2006</option>
                  <option value="2024">2007</option>
                  <option value="2025">2008</option>
                  <option value="2026">2009</option>
                  <option value="2024">2010</option>
                  <option value="2025">2011</option>
                  <option value="2026">2012</option>
                  <option value="2024">2013</option>
                  <option value="2025">2014</option>
                  <option value="2025">2015</option>
                  <option value="2026">2016</option>
                  <option value="2024">2017</option>
                  <option value="2024">2018</option>
                  <option value="2025">2019</option>
                  <option value="2026">2020</option>
                  <option value="2024">2021</option>
                  <option value="2025">2022</option>
                  <option value="2026">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2024">2027</option>
                  <option value="2025">2028</option>
                  <option value="2026">2029</option>
                  <option value="2024">2030</option>

                  <option value="OTHERS">OTHERS</option>
                </select>
              </div>

              <div>
                <label for="course" className="block font-medium mb-1">
                  Select Your Course:
                </label>
                <select
                  id="course"
                  name="course"
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-2 py-2"
                >
                  <option value="" disabled selected>
                    Select your course
                  </option>
                  <option value="full-stack-development">
                    Full Stack Development
                  </option>
                  <option value="full-stack-development">
                    Full Stack Web Development
                  </option>
                  <option value="mern-stack">MERN Stack</option>
                  <option value="java-development">Java Development</option>
                  <option value="python-data-science">
                    Python Data Science
                  </option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="mobile-app-development">
                    Mobile App Development
                  </option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="devops">DevOps</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="software-testing">Software Testing</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex " style={{ justifyContent: "space-around" }}>
              <button
                type="button"
                className="w-40 bg-orange-300 text-white py-2 rounded-md font-medium hover:bg-orange-800 px-4 py-2"
                onClick={() => handleClose()}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-40 bg-green-500 text-white py-2 rounded-md font-medium hover:bg-blue-800 px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Pop;
